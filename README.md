# Prem Narayani - Portfolio (React + Vite)

Premium, animated portfolio site for **Prem Narayani** with a dark luxury theme, glassmorphism, smooth scrolling, and scroll-triggered animations.

## Tech Stack

- React (Vite)
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Lenis (smooth scrolling)
- React Router

## Setup

1. Install dependencies:
   - `npm install`
2. Start dev server:
   - `npm run dev`
3. Build for production:
   - `npm run build`
4. Preview build:
   - `npm run preview`

## Content Editing

- Primary content lives in `src/data/siteContent.js`
- Profile photo defaults to `public/face.jpeg` (change via `profile.portraitSrc`)
- Resume defaults to `public/resume.jpg` (change via `profile.resumeSrc`, supports PDF)
- Project covers live in `src/assets/projects/`

## Imports

- `@/` alias maps to `src/` (see `vite.config.js` and `jsconfig.json`)

## Folder Structure

- `src/components/` - UI building blocks + sections
- `src/pages/` - Router pages (`/`, `/work`, `/contact`, `/resume`)
- `src/assets/` - Local SVG visuals (portrait + project covers)
- `src/animations/` - Lenis + GSAP scroll FX
- `src/styles/` - Global Tailwind + premium CSS

