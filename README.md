# tarwinder-portfolio

Personal portfolio of **Tarwinder Singh** — Software Engineer | Full Stack.

A static single-page site focused on clarity, performance, and a refined interactive presentation. Built for interviews and hiring managers: clean layout, real content, no gimmicks.

**Live (GitHub Pages):** [https://raw85.github.io/tarwinder-portfolio/](https://raw85.github.io/tarwinder-portfolio/)

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
- **Hosted on GitHub Pages** — free, public repo, deploy from `gh-pages` branch

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
git clone git@github.com:RAW85/tarwinder-portfolio.git
cd tarwinder-portfolio
npm ci
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Production build (local preview)

```bash
# Base path must match the GitHub Pages project URL
# Windows PowerShell:
$env:VITE_BASE="/tarwinder-portfolio/"
npm run build
npm run preview
```

```bash
# macOS / Linux:
VITE_BASE=/tarwinder-portfolio/ npm run build
npm run preview
```

Output is written to `dist/`.

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Typecheck + production build → `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Oxlint |

---

## Deploy to GitHub Pages (free)

Hosting uses **Deploy from a branch** (same idea as a static site on `master`/`gh-pages`), **not** GitHub Actions.

Live URL:

```text
https://raw85.github.io/tarwinder-portfolio/
```

`VITE_BASE` must be `/tarwinder-portfolio/` so JS/CSS load under that path.

### First-time deploy

1. Ensure the GitHub repo is **public** and named **`tarwinder-portfolio`**.
2. Build with the correct base (from repo root):

```powershell
cd C:\Projects\tarwinder-portfolio
$env:VITE_BASE="/tarwinder-portfolio/"
npm ci
npm run build
```

3. Push the **contents of `dist/`** to the **`gh-pages`** branch (SSH):

```powershell
cd dist
git init
git add -A
git commit -m "Deploy site to GitHub Pages"
git branch -M gh-pages
git remote add origin git@github.com:RAW85/tarwinder-portfolio.git
git push -f origin gh-pages
cd ..
```

4. On GitHub: repo → **Settings → Pages**
   - **Source:** Deploy from a branch  
   - **Branch:** `gh-pages`  
   - **Folder:** `/ (root)`  
   - **Save**

5. Wait a minute, then open the live URL above.

### Update the live site later

```powershell
cd C:\Projects\tarwinder-portfolio
$env:VITE_BASE="/tarwinder-portfolio/"
npm run build
cd dist
git add -A
git commit -m "Update site"
git push -f origin gh-pages
cd ..
```

(`dist` keeps its own git history for the `gh-pages` branch only. Source code stays on `main`.)

### Notes

- **Source code** → `main` (or `master`) via normal `git push`.
- **Built site** → `gh-pages` only (the Pages branch).
- Do **not** commit `dist/` into `main` (it is gitignored).
- Repo name and `VITE_BASE` must stay aligned (`/tarwinder-portfolio/`).

---

## Project structure

```text
tarwinder-portfolio/
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
└── vite.config.ts          # Reads VITE_BASE for GitHub Pages path
```

---

## Customization

### Site content

All portfolio copy (name, tagline, about, skills, experience, projects, links) lives in:

```text
src/data/site.ts
```

Theme tokens live in `src/index.css`.

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
