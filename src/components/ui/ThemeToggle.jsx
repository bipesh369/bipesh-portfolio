import { useTheme } from "../../context/ThemeContext";

/**
 * ThemeToggle — animated sun/moon pill toggle button.
 * Sits in the sidebar footer and in the mobile header.
 */
export default function ThemeToggle({ compact = false }) {
  const { isDark, toggleTheme } = useTheme();

  if (compact) {
    return (
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark/light mode"
        className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center
                   text-slate-400 hover:text-blue-300 hover:border-blue-400/50
                   hover:bg-blue-500/10 transition-all duration-200 text-sm"
      >
        {isDark ? "☀" : "☾"}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      className="relative inline-flex items-center w-14 h-7 rounded-full
                 bg-slate-700 dark:bg-blue-900 border border-white/10
                 transition-colors duration-300 focus:outline-none
                 focus:ring-2 focus:ring-blue-500/50"
    >
      {/* Pill thumb */}
      <span
        className={`absolute top-0.5 w-6 h-6 rounded-full shadow-md
                    flex items-center justify-center text-sm
                    transition-all duration-300
                    ${isDark
                      ? "translate-x-7 bg-blue-400 text-navy-950"
                      : "translate-x-0.5 bg-yellow-300 text-yellow-800"
                    }`}
      >
        {isDark ? "☀" : "☾"}
      </span>
    </button>
  );
}
