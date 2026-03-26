import useTypewriter from "../../hooks/useTypewriter";
import useIntersect from "../../hooks/useIntersect";
import ProfilePhoto from "../../assets/ProfilePhoto";
import { TYPEWRITER_ROLES, HERO_STATS } from "../../data";

export default function HeroSection({ onNavClick }) {
  const role = useTypewriter(TYPEWRITER_ROLES);
  const [ref, visible] = useIntersect(0.1);

  return (
    <section
      id="home"
      ref={ref}
      className={`relative min-h-screen flex items-center
        px-8 md:px-16 py-20
        bg-gradient-to-br from-slate-50 via-white to-blue-50
        dark:from-navy-950 dark:via-navy-900 dark:to-navy-800
        border-b border-blue-100/60 dark:border-white/[0.06]
        overflow-hidden
        section-animate ${visible ? "visible" : ""}`}
    >
      {/* Background */}
      <div
        className="absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none opacity-[0.045] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2563eb 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full
        bg-blue-400/10 dark:bg-blue-500/10 blur-3xl pointer-events-none animate-float" 
      />

      <div className="absolute bottom-0 left-1/3 w-[320px] h-[320px] rounded-full
        bg-blue-300/10 dark:bg-blue-600/8 blur-2xl pointer-events-none animate-float-slow" 
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left */}
        <div>
          <p className="font-mono text-xs tracking-[5px] uppercase text-slate-400 dark:text-slate-500 mb-4">
            {'// Hello World 👋'}
          </p>

          <h1
            className="font-display font-extrabold leading-[1.05] mb-3 text-slate-800 dark:text-white"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4rem)" }}
          >
            I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              BIPESH JUNIOR
            </span>
          </h1>

          <p
            className="font-mono font-light mb-6 min-h-[2.2em]
              text-blue-600 dark:text-blue-300"
            style={{ fontSize: "clamp(1.9rem, 1vw, 1.4rem)" }}
          >
            &gt;&nbsp;{role}
            <span className="cursor-blink bg-blue-600 dark:bg-blue-400" />
          </p>

          <p className="text-sm leading-[1.9] text-slate-500 dark:text-slate-400 max-w-[480px] mb-9">
            Passionate frontend developer crafting high-performance, accessible web
            applications with clean code, modern architecture, and pixel-perfect
            interfaces that delight users.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => onNavClick("projects")}
              className="px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-500
                text-white font-mono text-xs tracking-widest uppercase
                shadow-[0_4px_20px_rgba(37,99,235,0.35)]
                hover:shadow-[0_8px_28px_rgba(37,99,235,0.5)]
                hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-200"
            >
              View Projects
            </button>

            <button
              onClick={() => onNavClick("contact")}
              className="px-7 py-3 rounded-lg border-[1.5px] border-blue-600
                dark:border-blue-500 text-blue-600 dark:text-blue-400
                font-mono text-xs tracking-widest uppercase
                hover:bg-blue-50 dark:hover:bg-blue-500/10
                hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-200"
            >
              Hire Me
            </button>

            <a
              href="/resume.pdf"
              download
              className="px-7 py-3 rounded-lg border-[1.5px] border-slate-300
                dark:border-slate-700 text-slate-600 dark:text-slate-400
                font-mono text-xs tracking-widest uppercase
                hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400
                hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-200"
            >
              ↓ Resume
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {HERO_STATS.map(({ num, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-display text-[2.2rem] font-extrabold leading-none
                  text-blue-600 dark:text-blue-400">
                  {num}
                </span>
                <span className="font-mono text-[0.6rem] tracking-[2px] uppercase
                  text-slate-400 dark:text-slate-500">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <ProfilePhoto className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" />
        </div>
      </div>
    </section>
  );
}