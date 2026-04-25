import { useCallback } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import useActiveSection from "./hooks/useActiveSection";
import { NAV_LINKS } from "./data";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import Skills from "./components/sections/Skills";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

const SECTION_IDS = NAV_LINKS.map(({ id }) => id);

function AppShell() {
  const [activeSection, setActiveSection] = useActiveSection(SECTION_IDS, 0.35);

  const scrollTo = useCallback(
    (id) => {
      setActiveSection(id);

      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = 64;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    [setActiveSection],
  );

  return (
    <div className="font-body antialiased bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white">
      <Navbar activeSection={activeSection} onNavClick={scrollTo} />

      <main>
        <HeroSection onNavClick={scrollTo} />
        <AboutSection />
        <Skills />
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
