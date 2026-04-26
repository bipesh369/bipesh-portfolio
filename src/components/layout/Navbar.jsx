import { useState } from "react";
import { NAV_LINKS } from "../../data";
import ThemeToggle from "../ui/ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ activeSection, onNavClick }) {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    onNavClick(id);
    setOpen(false);
  };

  // ✅ Logo click handler (go to home section)
  const goHome = () => {
    handleClick("home"); // change to "hero" if your section id is hero
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-gray-100/90 dark:bg-navy-950/90 backdrop-blur-md border-b border-black/10 dark:border-white/[0.15]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">

        {/* Logo */}
        <div
          onClick={goHome}
          className="font-display text-3xl font-extrabold text-blue-600 dark:text-blue-400 cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          BJR
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-navy-950 border-t border-black/10 dark:border-white/[0.15]">
          <div className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`text-left text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}