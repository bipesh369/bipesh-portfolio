import { useCallback } from "react";

// Context
import { ThemeProvider } from "./context/ThemeContext";

// Hooks
import useActiveSection from "./hooks/useActiveSection";

// Data
import { NAV_LINKS } from "./data";

// Layout components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Section components
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

const SECTION_IDS = NAV_LINKS.map(({ id }) => id);

function AppShell() {
  const [activeSection, setActiveSection] = useActiveSection(
    SECTION_IDS,
    0.35
  );

  // Smooth scroll with navbar offset
  const scrollTo = useCallback(
    (id) => {
      setActiveSection(id);

      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = 80; // adjust if needed
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    [setActiveSection]
  );

  return (
    <div className="font-body antialiased bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white">
      
      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavClick={scrollTo}
      />

      {/* Main Content */}
      <main className="pt-[80px]">
        <HeroSection onNavClick={scrollTo} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}