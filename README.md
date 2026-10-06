# Merna Portfolio

A personal frontend portfolio for Merna, built with Next.js App Router, React, TypeScript, and Tailwind CSS. The site contains static local portfolio content, project detail routes, a persisted light/dark theme, a local résumé download, and a mail-client contact workflow.

## Requirements

- Node.js 20.9 or later (Node 24 is used by CI and recorded in `.nvmrc`)
- npm

## Commands

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm test
npm run format
npm run format:check
```

`npm run dev` starts the development server. `npm run build` produces the production build and `npm run start` serves it. Tests run once rather than in watch mode.

## Project structure

```text
src/
├── app/                 App Router pages, metadata, 404 and error UI
├── components/          Layout, static sections, and project UI
├── data/                Canonical local site and project content
├── lib/                 Project lookup, URL, and contact helpers
└── providers/           Persisted client-side theme provider
public/
├── images/              Profile, project, experience, and decorative assets
└── resume/              Downloadable résumé
```

## Content and projects

Stable site content lives in `src/data/site.ts`. All project cards, project pages, static route parameters, and the related-project carousel derive from `src/data/projects.ts`.

### Adding a new project

1. Add the screenshot to `public/images/projects/`.
2. Add one typed object to `src/data/projects.ts` with a unique `id` and its `/images/projects/...` path.
3. Run `npm run check` and `npm run build`.

No route, grid, carousel, API, database, or CMS update is required.

## Theme and contact behavior

The application-wide theme provider saves the selected mode in browser local storage under `merna-portfolio-theme`. The document applies the saved theme before hydration to reduce initial flashing.

The contact form validates locally and opens the visitor's configured email application with a pre-filled `mailto:` draft addressed to the portfolio email. It does not submit data to a third party or claim that a message has been sent.

## Deployment notes

This is a static-content Next.js application with App Router routes at `/` and `/project/:id`. Deploy it to a platform that supports Next.js. Unlike the prior SPA, direct project routes are handled by Next.js and do not require a custom React Router rewrite rule. GitHub Actions runs install, lint, type checking, tests, and production build verification on pushes and pull requests.
