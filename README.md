# Al-Ameen Yahya Harande — Portfolio

Personal portfolio site, built with React 19, TypeScript and Vite.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build to dist/
npm run preview   # serve the production build locally
npm run lint      # lint with oxlint
```

Requires Node.js 20.19+.

## Editing content

All text, roles, projects and links live in [`src/data/profile.ts`](src/data/profile.ts), typed by [`src/data/types.ts`](src/data/types.ts). Components in `src/components/` only handle layout, so most updates never touch them.

- Wrap text in `**double asterisks**` to bold it in the About and Experience sections.
- To add a project screenshot, put the image in `src/assets/projects/`, import it in `profile.ts` and set `image` and `imageAlt` on the project. Projects without a screenshot use an illustration chosen with `art`.

## Structure

```
src/
  components/   one component per section, plus small shared pieces
  data/         profile content and its types
  hooks/        useTheme (light/dark, remembers the visitor's choice)
  styles/       global.css with design tokens for both themes
  assets/       project screenshots
public/         favicon
```

## Deployment

`npm run build` outputs a static site to `dist/`, which can be hosted on Vercel, Netlify or GitHub Pages.
