# Sreytouch Portfolio

Live site: [https://sreytouch.github.io/](https://sreytouch.github.io/)

This repository powers the public GitHub Pages portfolio for Sreytouch Lang (Jessica).

## Structure

- `index.html`, `404.html`, and `assets/` contain the published GitHub Pages build.
- `portfolio-source/` contains the editable React + Vite source for the site.

## Local development

```bash
cd portfolio-source
npm install
npm run dev
```

## Rebuild for Pages

```bash
cd portfolio-source
npm install
npm run build
```

Then copy the generated `portfolio-source/dist/` output to the repository root:

- `dist/index.html` -> `index.html`
- `dist/index.html` -> `404.html`
- `dist/assets/*` -> `assets/`
