# Reyanda — Company Website

[![Deploy to GitHub Pages](https://github.com/Reyanda/Reyanda/actions/workflows/pages.yml/badge.svg)](https://github.com/Reyanda/Reyanda/actions/workflows/pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

The official website for **Reyanda** — a technology company with a hybrid approach to software: open source where community drives value, proprietary where sustained investment and guarantees are required.

**Live site:** https://reyanda.github.io/Reyanda/

---

## Pages

| Route | Description |
|---|---|
| `/` | Main landing page — philosophy, projects, open source section |
| `/projects/manimr/` | manimR dedicated subpage — features, get started, gallery |

---

## Repository structure

```
Reyanda/
├── index.html                  # Main landing page
├── css/
│   └── style.css               # Shared design system & tokens
├── js/
│   └── main.js                 # Scroll effects, reveal animations, counters
├── projects/
│   └── manimr/
│       ├── index.html          # manimR product subpage
│       ├── manimr.css          # manimR-specific styles (violet theme)
│       └── manimr.js           # manimR animations & copy-to-clipboard
├── assets/                     # Static assets (icons, images)
├── .github/
│   └── workflows/
│       └── pages.yml           # GitHub Actions — auto-deploy on push to main
├── _config.yml                 # GitHub Pages / Jekyll config
├── .nojekyll                   # Disables Jekyll processing (pure static site)
└── README.md
```

---

## Tech stack

- **Pure HTML5 / CSS3 / Vanilla JS** — zero frameworks, zero build step
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts
- **Animations:** CSS keyframes, SVG `<animate>` / `<animateTransform>`, IntersectionObserver
- **Deployment:** GitHub Actions → GitHub Pages

---

## Enabling GitHub Pages

1. Go to **Settings → Pages** in this repository
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow deploys automatically

The site will be live at:
```
https://<your-org>.github.io/<repo-name>/
```

---

## Local development

No build step required. Serve the repo root with any static file server:

```bash
# Python (built-in)
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# Go
go run golang.org/x/tools/cmd/present@latest
```

Then open http://localhost:8080 in your browser.

---

## Design system

All design tokens are CSS custom properties defined at the top of `css/style.css`:

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#05050a` | Page background |
| `--accent` | `#6366f1` | Primary accent (indigo) |
| `--accent-2` | `#a855f7` | Secondary accent (violet) — manimR theme |
| `--accent-3` | `#06b6d4` | Tertiary accent (cyan) |
| `--grad-1` | indigo → violet | Primary gradient |
| `--grad-2` | cyan → indigo | Secondary gradient |
| `--font-sans` | Inter | Body & headings |
| `--font-mono` | JetBrains Mono | Code blocks |

---

## Projects featured

| Project | Type | Language | Page |
|---|---|---|---|
| [manimR](projects/manimr/) | Open Source | R | `/projects/manimr/` |
| DataForge | Open Source | Rust / Python | Coming soon |
| Reyanda Platform | Proprietary | — | Coming soon |
| Sentry Vault | Proprietary | Go | Coming soon |
| BioKit R | Open Source | R | Coming soon |
| EdgeMesh | Hybrid / Open-core | Go / Rust | Coming soon |

---

## Contributing

This repository hosts the **website only**. To contribute to individual projects, see their own repositories:

- **manimR** → [github.com/Reyanda/manimR](https://github.com/Reyanda/manimR)

To report a bug or suggest an improvement to the website itself, [open an issue](https://github.com/Reyanda/Reyanda/issues).

---

## License

Website content and code © 2024 Reyanda. Released under the [MIT License](LICENSE).
