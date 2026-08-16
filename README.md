# Portfolio — Juan Diego Ron Molina

Personal portfolio site for Juan Diego Ron Molina, Computer Engineering — Artificial Intelligence, LLM and Computer Vision.

## Stack

- [Astro](https://astro.build) (static output) with [React](https://react.dev) islands for interactive components
- [Tailwind CSS v4](https://tailwindcss.com)
- [motion](https://motion.dev) for scroll reveals and the magnetic button effect
- Self-hosted variable fonts ([Geist](https://vercel.com/font), Instrument Serif)

## Requirements

- [Node.js](https://nodejs.org) 22.12 or newer
- npm (bundled with Node)

## Getting started

Install dependencies once:

```sh
npm install
```

Then, from the project root:

| Command           | Action                                                    |
| :----------------- | :--------------------------------------------------------- |
| `npm run dev`     | Starts the local dev server at `http://localhost:4321`     |
| `npm run build`   | Builds the production site to `./dist/`                    |
| `npm run preview` | Serves the production build locally, to check before deploying |

While `npm run dev` is running, edits to files in `src/` hot-reload in the browser automatically.

## Project structure

```text
/
├── public/                  # Static assets (favicon, images, etc.)
├── src/
│   ├── components/          # Astro components + React islands (Reveal, MagneticButton, ThemeToggle)
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML shell: meta tags, fonts, dark-mode bootstrap
│   ├── pages/
│   │   └── index.astro      # The single-page site, assembled from the section components
│   └── styles/
│       └── global.css       # Design tokens (colors, fonts) and Tailwind entry point
└── package.json
```

Each homepage section (Hero, Work, Experience, About, Contact) lives in its own file under `src/components/` — edit those directly to change copy, projects, or links.

## Deploying

`npm run build` outputs a fully static site to `./dist/` that can be hosted on any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.) with no server runtime required.
