# Devfolio

Personal portfolio of **Tarwinder Singh** — Software Engineer | Full Stack.

A static single-page site focused on clarity, performance, and a refined interactive presentation. Built for interviews and hiring managers: clean layout, real content, no gimmicks.

---

## Features

- **Sections** — Hero, About, Skills, Experience, Projects, Contact
- **Light & dark mode** — system preference, `localStorage`, no flash on load
- **Interactive background** — cursor-reactive particles plus light ambient sparks
- **Motion** — Framer Motion reveals, magnetic buttons, spotlight cards
- **Resume** — Google Drive View / Download menu (no redeploy for file updates)
- **Profile photo** — Drive-hosted image with monogram fallback if load fails
- **Content-driven** — most copy and links live in one data file
- **Stable installs** — exact dependency versions pinned in `package.json`
- **Fully static** — deploy `dist/` to any static host

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Build | [Vite](https://vite.dev/) |
| UI | [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Lint | [Oxlint](https://oxc.rs/) |

---

## Getting started

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** 10+

### Install & run

```bash
git clone https://github.com/RAW85/devfolio.git
cd devfolio
npm ci
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

Output is in `dist/` and can be deployed to any static host (Cloudflare Pages, Vercel, GitHub Pages, etc.).

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Typecheck + production build → `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Oxlint |

---

## Project structure

```text
devfolio/
├── public/                 # Favicon and other static files
├── src/
│   ├── components/
│   │   ├── effects/        # Particle field
│   │   ├── layout/         # Header, Footer, shell
│   │   └── ui/             # Theme toggle, cards, resume menu, portrait
│   ├── context/            # Theme provider
│   ├── data/
│   │   └── site.ts         # Name, copy, links, experience, projects
│   ├── hooks/
│   ├── lib/                # Drive URL helpers
│   ├── sections/           # Hero, About, Skills, Experience, Projects, Contact
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # Design tokens + Tailwind
├── LICENSE
├── package.json            # Exact versions only
├── package-lock.json
└── vite.config.ts
```

---

## Customization

### Site content

Edit:

```text
src/data/site.ts
```

Update name, role, tagline, contact info, nav, about text, skills, experience, and projects there.

Theme tokens (colors, type) live in `src/index.css`.

### Resume (Google Drive)

In `site.ts`, `links.resume` holds **view** and **download** URLs for the same Drive file.

1. Upload the PDF to Drive.
2. Share → **Anyone with the link** → Viewer.
3. Paste the file link IDs into `view` / `download`.
4. Prefer **Manage versions** on that same file so links never change.

### Profile photo (Google Drive)

In `site.ts`:

```ts
profile: {
  drive: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',
  alt: 'Your name',
}
```

- Share the image the same way as the resume (anyone with the link).
- If the URL is empty or the image fails to load, the **TS monogram** placeholder is shown.

---

## Design notes

- Typography: Instrument Serif (display) + Plus Jakarta Sans (UI)
- Motion respects `prefers-reduced-motion` where interactive effects apply
- Particles and magnetic hover are lighter or disabled on touch / reduced-motion setups

---

## License

This project is licensed under the [MIT License](LICENSE) — Copyright (c) 2026 Tarwinder.
