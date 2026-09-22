# Talia R. Bout — Personal Portfolio

A personal career portfolio for Talia R. Bout, Public Health student at
Tulane University's Celia Scott Weatherhead School of Public Health and
Tropical Medicine (Class of 2027).

Built as a static, multi-page site with plain HTML, CSS, and JavaScript —
no build step, no framework, no dependencies.

**Live site:** https://taliabout.github.io/Talia-Bout-Personal-Portfolio-/

## Structure

- `index.html` — Home: photo, bio, quick facts, focus-area pillars
- `experience.html` — Case studies: Gift of Life, Vertex, MGH, AP Derm, Cancer Genetics Research, Bedford Farms
- `projects.html` — Featured research/policy projects + developing/exploratory work, each labeled with real status
- `leadership.html` — Tulane Miracle, Pi Beta Phi, Ubuntu Mundo, and additional involvement
- `academics.html` — Education, MPH acceptance, coursework, skills, certifications
- `resume.html` — Embedded resume viewer + PDF download
- `contact.html` — Email, LinkedIn, GitHub
- `assets/Talia-Bout-Resume.pdf` — downloadable resume
- `assets/writing/` — HCT access disparities paper; Vertex Medicaid one-pager (published with Vertex's clearance)
- `assets/img/` — headshot
- `css/style.css` — shared design system (light/dark theme, layout, motion)
- `js/script.js` — theme toggle, mobile nav, scroll-reveal animations

## Running locally

Serve the folder with any static file server, e.g.:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

This site deploys automatically to GitHub Pages via GitHub Actions
(`.github/workflows/deploy-pages.yml`) on every push to `main`. It can
also be pointed at Netlify, Vercel, or any static host.

## Changelog

Iteration history for review — each entry is a pushed, deployed version.

- **2026-09-17 10:02 UTC** — Initial commit (repository created).
- **2026-09-17 16:30 UTC** — First version of the site: single-page layout
  covering About, Experience, Leadership, Career Focus, Skills, and
  Contact. Deployed to GitHub Pages for the first time.
- **2026-09-22 14:50 UTC** — Major redesign into a multi-page, editorial
  "consulting" style site (Home / Experience / Leadership / Academics /
  Resume / Contact), modeled on professional academic/consulting sites.
  Replaced generic bullet points with detailed case studies pulled from
  the full resume (Gift of Life, Vertex Pharmaceuticals, MGH Manstein
  Lab, Cancer Genetics Research, Tulane Miracle, Ubuntu Mundo). Added
  light/dark theme toggle with persistence, a dedicated Academics page
  (coursework, skills, certifications), a Resume page with inline PDF
  viewer and download button, and a Contact page with email and
  LinkedIn. Removed all references to running/fitness per request.
- **2026-09-22 15:40 UTC** — Content and design pass driven by a detailed
  accuracy brief and reference design. Added a real headshot; a typographic
  refresh (Source Serif 4 / IBM Plex Sans / IBM Plex Mono, teal/amber/navy
  palette) closer to the reference site; and a new Projects page covering
  six featured cases (Vertex Medicaid policy, Navigate to Lung Health,
  Herbolario Doemi, adolescent obesity research, maternal health policy,
  Gift of Life) plus a Developing/Exploratory section (Medicaid Navigator,
  CAR-T access pathway), each labeled with its real status (proposal vs.
  completed vs. ongoing) per the brief's accuracy guidance. Rewrote the
  Gift of Life entry to describe it as an active capstone rather than
  asserting unverified drive/swab counts. Added AP Derm and Bedford Farms
  to Experience; added Pi Beta Phi and National Charity League detail to
  Leadership; added the Accelerated MPH acceptance and fuller coursework
  to Academics; added GitHub throughout. Published Talia's own HCT
  access-disparities paper and, once confirmed cleared by Vertex, the
  Medicaid work-requirements patient one-pager as linked work samples. Did
  not publish the Vertex fellow-prioritization framework (an internal,
  unshared spreadsheet).
