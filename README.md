# Talia R. Bout — Personal Portfolio

A personal career portfolio for Talia R. Bout, Public Health student at
Tulane University's Celia Scott Weatherhead School of Public Health and
Tropical Medicine (Class of 2027).

Built as a static, multi-page site with plain HTML, CSS, and JavaScript —
no build step, no framework, no dependencies.

**Live site:** https://taliabout.github.io/Talia-Bout-Personal-Portfolio-/

## How this site was built

Built with **Claude Code** (Anthropic's coding agent) connected directly to
this GitHub repository. Each round of changes was made on a working branch,
opened as a pull request, reviewed, and merged into `main`, which
automatically redeploys the site through GitHub Actions and GitHub Pages.
The full history is visible in this repo's
[pull requests](https://github.com/taliabout/Talia-Bout-Personal-Portfolio-/pulls?q=is%3Apr)
and commit log.

Quality checks run before each release: HTML validation
([html-validate](https://html-validate.org/)), an internal link and anchor
checker, WCAG AA color-contrast checks, and automated browser tests at
desktop and phone widths (no console errors, no broken images, no
horizontal scrolling, working menu and dark-mode toggle).

## Structure

- `index.html` — Home: photo, bio, roles sought, impact numbers, focus areas, outside-of-work note
- `experience.html` — Vertex, MGH, Gift of Life, Cancer Genetics Research, plus additional experience
- `projects.html` — Writing Samples, Policy & Market Access, AI Projects, and Strategy Projects, each labeled with real status
- `leadership.html` — Tulane Miracle, Pi Beta Phi, Ubuntu Mundo, and additional involvement
- `academics.html` — Education, coursework, skills, certifications
- `resume.html` — Resume download (with an inline preview on desktop)
- `contact.html` — Email, LinkedIn, GitHub
- `404.html` — Custom "page not found" page
- `robots.txt`, `sitemap.xml` — Search-engine crawling and indexing
- `assets/Talia-Bout-Resume.pdf` — Downloadable resume
- `assets/writing/` — HCT access disparities paper; Vertex Medicaid one-pager (published with Vertex's clearance)
- `assets/img/` — Headshot, social-share preview image, and home-screen icon
- `css/style.css` — Shared design system (light/dark theme, layout, motion)
- `js/script.js` — Theme toggle, mobile nav, scroll-reveal animations

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
- **2026-09-25 22:39 UTC** — Professionalism/conciseness pass. Home: removed
  the "Current Role" and "Graduate Path" quick facts (campus-ambassador
  framing and the still-undecided MPH); bio now leads with Vertex and MGH.
  Experience: reordered to lead with Vertex, tightened every entry, and
  moved AP Derm/Bedford Farms into a compact "Additional Experience" list.
  Leadership: trimmed each entry to a single tight paragraph. Projects:
  reorganized into three labeled categories — Policy & Market Access,
  Strategy Projects, and AI Projects (Medicaid Navigator, now noting an
  upcoming cystic fibrosis policy project with the Boomer Esiason
  Foundation, and the CAR-T literature review) — and dropped the
  adolescent-obesity card to keep the page tighter.
- **2026-09-25 22:46 UTC** — Reframed the patient navigator project around
  its cystic fibrosis policy work with the Boomer Esiason Foundation, added
  a framing note to AI Projects, and moved that section up the page.
- **2026-09-28** — Submission-readiness pass. Synced every page to the
  updated resume (GPA 3.81 and Dean's List, Gift of Life Campus Ambassador
  role with 10 drives and a 25-person team, corrected Vertex and MGH dates,
  Samuel Fisher Memorial Fellow title, ~35-person lab presentations, Applied
  AI Literacy Badge) and replaced the downloadable resume PDF. Added web
  best practices: social-share preview image and Open Graph tags,
  canonical URLs, structured data, a custom 404 page, `robots.txt`,
  `sitemap.xml`, and a home-screen icon. Fixed heading hierarchy, raised two
  low-contrast colors to meet WCAG AA, corrected the headshot's dimensions,
  hid the inline PDF preview on phones (mobile browsers can't render it),
  made footer email links open an email directly, and removed unused CSS.
  All pages pass HTML validation with zero errors.
- **2026-09-28** — Recruiter-focused additions. Home: a "Seeking" statement
  (2027 roles in market access, health policy, and life-sciences
  consulting), a "By the Numbers" impact row (50-state tracker, ~500 bills,
  ~40 leaders briefed, $35K+ raised), and a short "Outside of Work" note
  (skiing and horseback riding). Projects: a new Writing Samples section
  featuring the Vertex patient brief and the HCT access-disparities paper.
  Contact: intro now states what roles she's seeking.
- **2026-09-28** — Final review pass. Replaced the Leadership headline with
  a more professional one, reordered Experience newest-first to match the
  resume (Gift of Life first), restored the resume's "Cancer Genetics
  Research" label, corrected the "Formulation of Health Policy" course name,
  and fixed the theme-toggle icon for visitors whose devices use dark mode.
  Re-verified: 0 HTML errors, 0 broken links or anchors, valid structured
  data and sitemap, and clean browser tests at desktop and phone widths.
