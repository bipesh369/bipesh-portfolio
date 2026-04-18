# Bipesh Junior — Portfolio
 
A **fully separated**, production-ready React + Tailwind CSS portfolio
 
- 🎨 **Blue + White** colour palette
- 🌙 **Dark / Light mode** toggle (persisted in localStorage)
- 🖼️ **Profile photo** section in hero (swap with your real photo)
- ✍️ **Typewriter** role animation
- 📱 **Fully responsive** (mobile hamburger → sidebar on desktop)
- ✅ **Form validation** with error messages + success state
- ⚡ **No external UI libraries** — pure React + Tailwind
---
 
## 🎓 Education
 
| Year | Degree | Institution |
|------|--------|-------------|
| 2022 – Present | B.Sc. CSIT (Computer Science & Information Technology) | Mahendra Multiple Campus, Nepalgunj |
| 2019 – 2021 | +2 Science | Holyland English Secondary School, Nepalgunj |
 
---
 
## 💼 Experience
 
| Year | Role | Company | Description |
|------|------|---------|-------------|
| 2025 – Present | Frontend Developer | Karnali Creative | Building scalable React apps with TypeScript, Redux, and real-time features. |
 
---
 
## Project Structure
 
```
src/
│
├── main.jsx                         ← React entry point (Vite)  
├── index.css                        ← Tailwind + global styles  
├── App.jsx                          ← Root layout + routing shell  
│
├── context/
│   └── ThemeContext.jsx             ← Dark / Light mode provider
│
├── data/
│   └── index.js                     ← Static content (nav, skills, projects, socials)
│
├── hooks/
│   ├── useTypewriter.js             ← Typewriter animation
│   ├── useIntersect.js              ← Scroll visibility trigger
│   └── useActiveSection.js          ← Active section tracker
│
├── assets/
│   ├── images/                      ← Profile images, project images
│   └── icons/                       ← Custom SVG icons (if any)
│
├── components/
│   │
│   ├── layout/
│   │   ├── Navbar.jsx               ← Main navigation (replace Sidebar)
│   │   ├── MobileMenu.jsx            ← Mobile dropdown menu
│   │   └── Footer.jsx                ← Minimal footer
│   │
│   ├── ui/
│   │   ├── ThemeToggle.jsx          ← Dark/light toggle
│   │   ├── SectionHeader.jsx        ← Reusable section title
│   │   └── Button.jsx               ← Reusable button component (recommended)
│   │
│   └── sections/
│       ├── HeroSection.jsx
│       ├── AboutSection.jsx
│       ├── SkillsSection.jsx
│       ├── ProjectsSection.jsx
│       └── ContactSection.jsx
```
 
---
 
## Quick Start
 
```bash
# 1. Install dependencies
npm install
 
# 2. Start dev server
npm start
# → http://localhost:3000
 
# 3. Build for production
npm run build
```
 
---
 
## Customise Content
 
| What | File |
|------|------|
| Name, email, location | `src/data/index.js` → `ABOUT_INFO` |
| Typewriter roles | `src/data/index.js` → `TYPEWRITER_ROLES` |
| Hero stats | `src/data/index.js` → `HERO_STATS` |
| Education | `src/data/index.js` → `EDUCATION` |
| Experience | `src/data/index.js` → `EXPERIENCE` |
| Skills + percentages | `src/data/index.js` → `SKILLS` |
| Projects | `src/data/index.js` → `PROJECTS` |
| Contact info | `src/data/index.js` → `CONTACT_ITEMS` |
| Social links | `src/data/index.js` → `SOCIAL_LINKS` |
| Colour palette | `tailwind.config.js` → `theme.extend.colors` |
 
---
 
## Tech Stack
 
| Tool | Purpose |
|------|---------|
| **React 18** | UI framework |
| **Tailwind CSS 3** | Utility-first styling |
| **TypeScript** | Type safety |
| **Fira Code** | Monospace / code font |
| **Syne** | Display / heading font |
| **Inter** | Body font |
| **IntersectionObserver** | Scroll animations (no library) |
| **CSS class strategy** | Tailwind `darkMode: "class"` |
 
---
 
## Features Checklist
 
- [x] Fixed sidebar with scroll-aware active link highlight
- [x] Animated hamburger with cross-morph on mobile
- [x] Dark / Light toggle pill with sun/moon icons (persisted)
- [x] Typewriter cycling through roles
- [x] Hero profile photo with glow rings + availability badge
- [x] Scroll-triggered section fade-in animations
- [x] Tabbed Education & Experience timeline in About section
- [x] Scroll-triggered skill progress bars (fire once)
- [x] Staggered project card entrance animation
- [x] Project card top-border reveal on hover
- [x] Contact form with client-side validation + loading spinner + success state
- [x] Fully responsive — desktop sidebar collapses to mobile top-bar
- [x] Custom scrollbar styling
- [x] Zero external UI libraries
---
 
Built with ❤️ by **Bipesh Junior Tharu**