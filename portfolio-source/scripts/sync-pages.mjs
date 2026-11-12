import { cp, lstat, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const sourceDirectory = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const repositoryRoot = resolve(sourceDirectory, '..')
const buildDirectory = join(sourceDirectory, 'dist')
const publicDirectory = join(sourceDirectory, 'public')

async function isSymbolicLink(path) {
  try {
    return (await lstat(path)).isSymbolicLink()
  } catch (error) {
    if (error.code === 'ENOENT') return false
    throw error
  }
}

async function assertNoSymlinks(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) throw new Error(`Refusing to copy a symbolic link: ${join(directory, entry.name)}`)
    if (entry.isDirectory()) await assertNoSymlinks(join(directory, entry.name))
  }
}

async function copyFileTree(source, destination) {
  if (await isSymbolicLink(destination)) throw new Error(`Refusing to overwrite a symbolic link: ${destination}`)
  const stat = await lstat(source)
  if (stat.isDirectory()) {
    await mkdir(destination, { recursive: true })
    for (const entry of await readdir(source)) {
      await copyFileTree(join(source, entry), join(destination, entry))
    }
    return
  }
  await cp(source, destination, { force: true })
}

// Never use a recursive delete on the repository root. Only Vite output and
// explicitly maintained public files are eligible for synchronization.
const publicEntries = await readdir(publicDirectory)
const allowedEntries = new Set(['index.html', 'assets', ...publicEntries])
const protectedEntries = new Set(['.git', '.github', '.agents', '.codex', '.gitignore', 'README.md', 'portfolio-source', 'package.json', 'package-lock.json'])
const buildEntries = await readdir(buildDirectory)
const html = await readFile(join(buildDirectory, 'index.html'), 'utf8')

if (!html.includes('<div id="root"></div>') || !html.includes('/assets/')) {
  throw new Error('The production build is missing the application entry or compiled assets. Run npm run build first.')
}

for (const entry of buildEntries) {
  if (!allowedEntries.has(entry) || protectedEntries.has(entry) || (entry.startsWith('.') && entry !== '.nojekyll')) {
    throw new Error(`Unexpected build output; refusing to overwrite ${entry}`)
  }
}
await assertNoSymlinks(buildDirectory)

for (const entry of buildEntries) {
  await copyFileTree(join(buildDirectory, entry), join(repositoryRoot, entry))
}
if (await isSymbolicLink(join(repositoryRoot, '404.html'))) {
  throw new Error('Refusing to overwrite a symbolic link: 404.html')
}
await writeFile(join(repositoryRoot, '404.html'), html)

// Clean only stale hashed JS/CSS bundles emitted by Vite. Preserve images and
// all unrelated repository files, including any hand-maintained public assets.
const currentAssets = new Set(await readdir(join(buildDirectory, 'assets')))
for (const entry of await readdir(join(repositoryRoot, 'assets'), { withFileTypes: true })) {
  if (entry.isFile() && /^index-[A-Za-z0-9_-]+\.(?:js|css)(?:\.map)?$/.test(entry.name) && !currentAssets.has(entry.name)) {
    await rm(join(repositoryRoot, 'assets', entry.name))
  }
}

console.log('GitHub Pages files are ready in the repository root. No commit or deployment was performed.')
