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
export const TYPEWRITER_ROLES = [
  "Full-Stack Developer",
];

export const HERO_STATS = [
  { label: "Full-Stack Web Applications" },
  { label: "API & Backend Architecture" },
  { label: "Modern UI & UX" },
];

// ─── Education ──────────────────────────────────────────────
export const EDUCATION = [
  {
    year: "2023 – Present",
    degree:
      "Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)",
    school: "Mahendra Multiple Campus, Nepalgunj",
  },
  {
    year: "2020 – 2022",
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
    category: "Backend Stack",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Mongoose",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
      },
      {
        name: "JWT",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jsonwebtoken/jsonwebtoken-plain.svg",
      },
      {
        name: "REST API",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    ],
  },

  {
    category: "Deployment",
    items: [
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Render",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/render/render-original.svg",
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
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────
export const PROJECTS = [
  {
    num: 1,
    title: "Agency.ai",
    desc: "A modern AI-powered digital agency platform designed to help businesses build, grow, and transform their digital presence with innovative technology and creative solutions.",
    tags: ["React.js", "Tailwind CSS", "Motion", "JavaScript"],
    demo: "https://agency-ai-five-coral.vercel.app/",
    code: "https://github.com/bipesh369/agency.ai.git", // Add your GitHub URL here, or leave empty to hide the button
  },
  {
    num: 2,
    title: "SewaPath",
    desc: "A citizen-focused platform that brings government service information into one place, allowing users to check eligibility, required documents, fees, processing time, and application steps before applying.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    demo: "https://sewapath-frontend.vercel.app/",
    code: "https://github.com/bipesh369/sewapath.git", // Add your GitHub URL here, or leave empty to hide the button
  },

  // Add more projects here as you build them
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
