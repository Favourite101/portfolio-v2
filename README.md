# Favour Oluwatunmibi — Portfolio

A minimal, dark, and fast personal portfolio built to showcase my work as a software engineer.

**Live:** _deploy on Vercel_

## Highlights

- ⚡ **Next.js 15** (App Router) + **TypeScript** — SSG, great Lighthouse scores, SEO-ready
- 🎨 **Tailwind CSS** + **Framer Motion** — dark, sleek UI with subtle scroll & hover motion
- 🖥️ **Interactive terminal** — press `Ctrl/⌘ + K` (or click `$ terminal`) and type `help`
- 📱 Fully responsive, accessible, keyboard-navigable

## Tech stack

| Area     | Tools                                    |
| -------- | ---------------------------------------- |
| Framework| Next.js 15, React 19                     |
| Language | TypeScript                               |
| Styling  | Tailwind CSS                             |
| Motion   | Framer Motion                            |
| Icons    | lucide-react                             |
| Deploy   | Vercel                                   |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/          # App Router entry, layout, global styles
components/    # Nav, Hero, About, Experience, Projects, Skills, Contact, Terminal, Footer
lib/data.ts   # Single source of truth for all content
public/        # Resume, images
```

All content lives in [`lib/data.ts`](lib/data.ts) — edit there to update the site.

---

Designed & built by Favour Oluwatunmibi.
