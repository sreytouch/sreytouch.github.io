# Sreytouch Lang — Engineering Portfolio

Live site: [https://sreytouch.github.io/](https://sreytouch.github.io/)

The React + Vite portfolio for Sreytouch Lang (Jessica), focused on AI engineering, full-stack software, backend systems, and cloud infrastructure.

## Structure

- `index.html`, `404.html`, `assets/`, and the root public files contain the GitHub Pages build.
- `portfolio-source/` contains the editable React + Vite source for the site.
- `portfolio-source/public/` also contains project imagery, the favicon, social preview, sitemap, and crawler rules.
- `portfolio-source/scripts/sync-pages.mjs` safely copies a production build into the repository root.

Edit the source files, then rebuild. Changes made directly to generated root files are overwritten by the next build.

## Local development

Use Node.js 20.19+ or 22.13+ and npm.

```sh
cd portfolio-source
npm ci
npm run dev
```

## Validate and build

From `portfolio-source/`:

```sh
npm run lint
npm run build
npm run preview
```

`build` creates a production bundle in `portfolio-source/dist/`. `preview` serves that bundle locally. This project uses JavaScript; it has no TypeScript compilation step or test suite. Lint checks and the production build provide the automated baseline; check navigation, theme switching, responsive layouts, and project previews in the browser after UI changes.

The development-only `minimatch` overrides select a patched release for ESLint and its configuration package. Recheck these overrides when upgrading ESLint; they can be removed when its supported dependency range includes the fix.

## Prepare GitHub Pages

From `portfolio-source/`:

```sh
npm run build:pages
```

This command builds the site, copies its generated HTML, assets, and public files into the repository root, and creates `404.html` from the same application entry. It removes only obsolete hashed JavaScript and CSS bundles, preserving unrelated files. It does not commit, push, or deploy.

The site is configured for the root URL `https://sreytouch.github.io/`. GitHub Pages should serve the repository root from the publishing branch. The included `.nojekyll` prevents Jekyll processing. Deployment follows the repository’s GitHub Pages settings when the prepared files are committed and pushed.

## Content and assets

- Profile and employment content should remain aligned with the supplied resume. Preserve historical job titles and dates.
- Project claims should be checked against their public source repositories before editing.
- The portfolio does not host a downloadable resume. Keep the original resume outside the public site.
- SEO and social metadata live in `portfolio-source/index.html`; the social preview source is `portfolio-source/public/social-preview.svg`, with a PNG for broad social platform support.
- Keep `sitemap.xml`, `robots.txt`, and canonical/social URLs aligned if the portfolio domain changes.
