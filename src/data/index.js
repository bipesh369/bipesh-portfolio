import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "about", label: "About", icon: "◉" },
  { id: "skills", label: "Skills", icon: "◈" },
  { id: "projects", label: "Projects", icon: "◧" },
  { id: "contact", label: "Contact", icon: "◎" },
];

// ─── Hero ────────────────────────────────────────────────────
export const TYPEWRITER_ROLES = ["Frontend Developer", "React Developer"];

export const HERO_STATS = [
  { label: "React UI Systems" },
  { label: "Responsive Layouts" },
  { label: "Performance Focused" },
];

// ─── Education ──────────────────────────────────────────────
export const EDUCATION = [
  {
    year: "2022 – Present",
    degree:
      "Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)",
    school: "Mahendra Multiple Campus, Nepalgunj",
  },
  {
    year: "2019 – 2021",
    degree: "+2 Science",
    school: "Holyland English Secondary School, Nepalgunj",
  },
];

// ─── Experience ─────────────────────────────────────────────
export const EXPERIENCE = [
  {
    year: "2025 – Present",
    role: "Frontend Developer",
    company: "Karnali Creative",
    desc: "Building scalable React apps with modern UI systems and performance-first architecture.",
  },
];

// ─── Skills ──────────────────────────────────────────────────
export const SKILLS = [
  {
    category: "Core Technologies",
    items: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
  },
  {
    category: "Frontend Stack",
    items: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────
export const PROJECTS = [
  {
    num: "01",
    title: "ManMaya Hospitality",
    desc: "Tour and hospitality management system for seamless trip planning.",
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    demo: "https://manmayahospitality.com",
    code: "#",
  },
];

// ─── Contact ────────────────────────────────────────────────
export const CONTACT_ITEMS = [
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Nepalgunj, Nepal",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "juniorbipesh@gmail.com",
    link: "mailto:juniorbipesh@gmail.com",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+977 9763852173",
    link: "https://wa.me/9779763852173",
  },
  {
    icon: FaGlobe,
    label: "Portfolio",
    value: "bipeshjunior.com.np",
    link: "https://bipeshjunior.com.np",
  },
];

// ─── Social ──────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { icon: FaGithub, label: "GitHub", url: "https://github.com/bipesh369" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/bipeshjunior10",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://instagram.com/bipeshjr10",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    url: "https://facebook.com/bipeshjunior",
  },
];
