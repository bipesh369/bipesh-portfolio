# Bipesh Junior

## Frontend Developer | React | JavaScript | Full-Stack Development

I build responsive, user-focused web applications with React and modern frontend technologies.

My approach is project-driven: I learn by building real products, solving engineering problems, and continuously improving the architecture, performance, and user experience of what I build.

**Portfolio:** [bipeshjunior.com.np](https://www.bipeshjunior.com.np)
**GitHub:** [github.com/bipesh369](https://github.com/bipesh369)
**LinkedIn:** [linkedin.com/in/bipeshjunior10](https://www.linkedin.com/in/bipeshjunior10)

---

## About This Project

This repository contains my personal developer portfolio.

It is more than a collection of projects. I built the portfolio itself as a practical frontend engineering project to demonstrate how I approach:

* React component architecture
* Responsive UI development
* Reusable components
* State management
* Browser APIs
* Theme management
* UI interactions
* Maintainable code organization
* Modern CSS
* Deployment

The portfolio is designed to give recruiters and developers a quick understanding of my technical skills, projects, experience, and current development journey.

---

## Live Project

**Production:** [bipeshjunior.com.np](https://www.bipeshjunior.com.np)

**Repository:** [github.com/bipesh369/bipesh-portfolio](https://github.com/bipesh369/bipesh-portfolio)

---

## What I Built

### Responsive Portfolio

A responsive interface that adapts across desktop, tablet, and mobile screen sizes.

The layout uses reusable React components instead of placing the entire application inside a single page component.

### Theme System

Implemented a reusable dark/light theme system using React Context and Tailwind CSS.

The selected theme is persisted with `localStorage`, allowing the preference to survive page reloads.

### Interactive Navigation

The portfolio includes:

* Responsive navigation
* Mobile navigation
* Active section detection
* Smooth section navigation
* Scroll-based state updates

### Custom React Hooks

Instead of placing interaction logic directly inside UI components, reusable behavior is extracted into custom hooks.

Current hooks include:

```text
useTypewriter
useIntersect
useActiveSection
```

These handle typewriter animation, viewport intersection detection, and active navigation state.

### Project Showcase

Projects are represented through structured data rather than hardcoded directly into the UI.

This makes it possible to add or modify projects without rewriting the project component.

### Contact Experience

The contact section provides a structured way for visitors to reach me, with validation and user feedback states.

---

# Engineering Highlights

The main goal of this project was to keep the implementation simple enough to maintain while still following good frontend engineering practices.

### Component-Based Architecture

The application separates reusable UI elements from larger page sections.

```text
Application
│
├── Layout
│   ├── Navbar
│   ├── MobileMenu
│   └── Footer
│
├── UI
│   ├── Button
│   ├── SectionHeader
│   └── ThemeToggle
│
├── Sections
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Projects
│   └── Contact
│
├── Context
│   └── ThemeContext
│
├── Hooks
│   ├── useTypewriter
│   ├── useIntersect
│   └── useActiveSection
│
└── Data
    └── Portfolio Content
```

This structure allows individual parts of the application to evolve independently.

---

# Architecture

The high-level flow is:

```text
                    React Application
                           │
             ┌─────────────┴─────────────┐
             │                           │
         Components                  Application State
             │                           │
      ┌──────┼──────┐                    │
      │      │      │                    │
    Layout   UI   Sections         Theme Context
      │      │      │                    │
      └──────┴──────┴────────────┬───────┘
                                 │
                           Custom Hooks
                                 │
                                 ▼
                           Browser APIs
                                 │
                         ┌───────┴────────┐
                         │                │
                    IntersectionObserver
                                      localStorage
```

The architecture keeps presentation, reusable behavior, state, and content separated.

---

# Tech Stack

| Technology           | Why I Used It                          |
| -------------------- | -------------------------------------- |
| React 18             | Component-based UI development         |
| JavaScript           | Application logic                      |
| Tailwind CSS         | Responsive and maintainable styling    |
| Vite                 | Fast development and production builds |
| React Context        | Global theme state                     |
| IntersectionObserver | Scroll-based interactions              |
| localStorage         | Persistent theme preference            |
| CSS                  | Custom animations and UI behavior      |
| Git                  | Version control                        |
| GitHub               | Source code management                 |
| Vercel               | Deployment                             |

---

# Project Structure

```text
bipesh-portfolio/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── data/
│   │   └── index.js
│   │
│   ├── hooks/
│   │   ├── useActiveSection.js
│   │   ├── useIntersect.js
│   │   └── useTypewriter.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

# Why the Data Layer Matters

Portfolio content is centralized instead of being scattered throughout individual components.

For example:

```text
src/data/index.js
```

contains structured information for areas such as:

```text
Personal Information
Developer Roles
Skills
Education
Experience
Projects
Contact Information
Social Links
```

This creates a clean separation:

```text
Content
   │
   ▼
Data Layer
   │
   ▼
React Components
   │
   ▼
User Interface
```

As a result, updating a project or skill does not require changing the UI implementation.

---

# Custom Hook Design

One of the things I focused on in this project was separating behavior from presentation.

## `useTypewriter`

Responsible for the animated role text displayed in the hero section.

```text
Input
  ↓
Array of roles
  ↓
Typing
  ↓
Pause
  ↓
Deleting
  ↓
Next role
```

## `useIntersect`

Uses the browser's `IntersectionObserver` API to detect when elements enter the viewport.

This allows sections and elements to animate based on their visibility.

## `useActiveSection`

Observes page sections and determines which section is currently active.

The result is then used by the navigation system.

This avoids manually maintaining navigation state based on scroll position calculations.

---

# Responsive Design

The application was developed with responsive behavior as a core requirement rather than treating mobile support as an afterthought.

The interface adapts across:

```text
Desktop
   ↓
Tablet
   ↓
Mobile
```

Navigation, typography, spacing, grids, project cards, and content sections adapt to available screen space.

---

# Performance Considerations

The project intentionally avoids unnecessary dependencies and keeps most interactions based on native browser capabilities.

Examples include:

* `IntersectionObserver` instead of continuous scroll calculations
* React Context for lightweight global state
* Tailwind utilities for styling
* Centralized static data
* Component reuse
* Vite for optimized production builds

The objective is to keep the application lightweight while maintaining a polished user experience.

---

# Accessibility Considerations

The portfolio is developed with accessibility in mind through:

* Semantic HTML structure
* Keyboard-friendly interactive elements
* Responsive navigation
* Appropriate button usage
* Clear content hierarchy
* Sufficient visual separation between interface elements

Accessibility remains an area for continued improvement and auditing.

---

# Getting Started

## Prerequisites

Install:

```text
Node.js
npm
Git
```

## Clone

```bash
git clone https://github.com/bipesh369/bipesh-portfolio.git
cd bipesh-portfolio
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm start
```

The development server will start locally.

## Production build

```bash
npm run build
```

---

# Customization

If you want to adapt this portfolio structure for another developer, most content can be updated from:

```text
src/data/index.js
```

Commonly updated areas include:

```text
ABOUT_INFO
TYPEWRITER_ROLES
HERO_STATS
EDUCATION
EXPERIENCE
SKILLS
PROJECTS
CONTACT_ITEMS
SOCIAL_LINKS
```

Styling and theme configuration can be modified through:

```text
tailwind.config.js
```

---

# Development Workflow

My development process for this project follows a simple cycle:

```text
Identify Requirement
        ↓
Design Component
        ↓
Implement
        ↓
Test Responsiveness
        ↓
Refactor
        ↓
Deploy
        ↓
Iterate
```

This portfolio is continuously improved as I learn new frontend engineering concepts and build more projects.

---

# Featured Project

One of the main projects currently featured in my portfolio is **SewaPath**.

SewaPath is a full-stack web application designed to make government services easier to discover and navigate.

### SewaPath

```text
React
Node.js
Express
MongoDB
Mongoose
JWT
Tailwind CSS
```

The project includes:

* Government service discovery
* Authentication
* Authorization
* Service details
* Eligibility checking
* Required documents
* Service journeys
* Government office information
* Saved services
* English and Nepali content
* Admin functionality

Repository:

https://github.com/bipesh369/SewaPath

SewaPath is also part of my backend engineering learning journey, where I am applying backend concepts by building a real application rather than learning technologies in isolation.

---

# Current Focus

I am currently focusing on becoming a stronger frontend and full-stack developer by building real applications and improving my understanding of software architecture.

Areas I am actively working on include:

```text
React
Frontend Architecture
JavaScript
TypeScript
Backend Development
REST APIs
Node.js
Express
MongoDB
Authentication
System Design
Deployment
```

---

# Roadmap

Planned improvements for the portfolio include:

* [ ] Add automated testing
* [ ] Improve accessibility auditing
* [ ] Improve SEO
* [ ] Add Open Graph metadata
* [ ] Improve image optimization
* [ ] Add project case studies
* [ ] Add project filtering
* [ ] Improve contact form backend integration
* [ ] Add CI/CD checks
* [ ] Add performance monitoring
* [ ] Add analytics
* [ ] Add downloadable resume
* [ ] Continue improving mobile experience

---

# What This Repository Demonstrates

For recruiters and engineering teams, this project demonstrates my ability to work with:

**Frontend Development**

React, responsive design, Tailwind CSS, component architecture, reusable UI, browser APIs, and interactive interfaces.

**Engineering Practices**

Separation of concerns, reusable hooks, centralized data, maintainable component structure, version control, and iterative development.

**Product Thinking**

The portfolio is designed around the needs of its users rather than being only a visual showcase.

**Continuous Learning**

The project evolves alongside my development skills and serves as a practical environment for applying new concepts.

---

# Contact

If you are interested in my work, collaboration, internships, or frontend development opportunities:

**Portfolio**

https://www.bipeshjunior.com.np

**GitHub**

https://github.com/bipesh369

**LinkedIn**

https://www.linkedin.com/in/bipeshjunior10

---

# Author

## Bipesh Junior

Frontend Developer focused on building responsive and maintainable web applications with React and modern web technologies.

Currently learning through real-world projects and building toward full-stack development.

---

## License

This repository represents my personal portfolio.

The source code is publicly available for reference and learning. Please do not copy the portfolio design or personal content and present it as your own work.

---

Built by Bipesh Junior.
