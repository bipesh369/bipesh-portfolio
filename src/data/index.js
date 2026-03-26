import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { id: "home",     label: "Home",     icon: "⌂" },
  { id: "about",    label: "About",    icon: "◉" },
  { id: "skills",   label: "Skills",   icon: "◈" },
  { id: "projects", label: "Projects", icon: "◧" },
  { id: "contact",  label: "Contact",  icon: "◎" },
];

// ─── Hero ────────────────────────────────────────────────────
export const TYPEWRITER_ROLES = [
  "Frontend Developer",
  "React.js Specialist",
];

export const HERO_STATS = [
  { num: "1+",  label: "Years Exp"  },
  { num: "3+", label: "Projects"   },
  { num: "2+", label: "Clients"    },
];

// ─── About ───────────────────────────────────────────────────
export const ABOUT_INFO = [
  { key: "Name",       value: "Bipesh Junior Tharu"},
  { key: "Role",       value: "Frontend Developer"},
  { key: "Location",   value: "Nepalgunj, Nepal"},
  { key: "Email",      value: "juniorbipesh@gmail.com"},
  { key: "Status",     value: "Available for work ✓" },
];

export const EXPERIENCE = [
  {
    year:    "2025 – Present",
    role:    "Frontend Developer",
    company: "Karnali Creative",
    desc:    "Building scalable React apps with TypeScript, Redux, and real-time features.",
  },
];

// ─── Skills ──────────────────────────────────────────────────
export const SKILLS = [
  { name: "HTML", icon: FaHtml5, pct: 95 },
  { name: "CSS", icon: FaCss3Alt, pct: 95 },
  { name: "JavaScript", icon: FaJs, pct: 95 },
  { name: "React.js", icon: FaReact, pct: 90 },
  { name: "Tailwind CSS", icon: SiTailwindcss, pct: 95 },
  { name: "TypeScript", icon: SiTypescript, pct: 90 },
  { name: "Next.js", icon: SiNextdotjs, pct: 60 },
];

export const EXTRA_TECH = [
  "Git", "Github", "Responsive Design", "Redux", "Vite",
];

// ─── Projects ────────────────────────────────────────────────
export const PROJECTS = [
  {
    num:   "01",
    title: "ManMaya Hospitality",
    desc:  "Comprehensive tour package and hospitality management system for smooth trip planning.",
    tags:  ["React.js", "TypeScript", "Tailwind CSS", "Axios/Fetch API", "React Router", "Node.js", "Express.js", "MongoDB"],
    demo:  "#",
    code:  "#",
  },
  {
    num:   "02",
    title: "FinTrack Dashboard",
    desc:  "Real-time personal finance tracker with interactive charts, multi-currency support, and smart budget planning.",
    tags:  ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
    demo:  "#",
    code:  "#",
  },
  {
    num:   "03",
    title: "ShopNest eCommerce",
    desc:  "Scalable online marketplace with Stripe payments, inventory management, and a full-featured admin panel.",
    tags:  ["React", "Redux", "Stripe", "Node.js"],
    demo:  "#",
    code:  "#",
  },
];

// ─── Contact ─────────────────────────────────────────────────
export const CONTACT_ITEMS = [
  { icon: FaMapMarkerAlt, label: "Location", value: "Nepalgunj, Nepal" },
  { icon: FaEnvelope, label: "Email", value: "juniorbipesh@gmail.com" },
  { icon: FaPhone, label: "Phone", value: "+977 9763852173" },
  { icon: FaGlobe, label: "Website", value: "bipeshjunior.dev" },
];

// ─── Social ──────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { icon: FaGithub, label: "GitHub", url: "https://github.com/bipesh369" },
  { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/bipeshjunior10" },
  { icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/bipeshjr10" },
  { icon: FaFacebook, label: "Facebook", url: "https://www.facebook.com/bipeshjunior" },
];