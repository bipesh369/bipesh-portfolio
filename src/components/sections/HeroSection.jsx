import useTypewriter from "../../hooks/useTypewriter";
import useIntersect from "../../hooks/useIntersect";
import ProfilePhoto from "../../assets/ProfilePhoto";
import { TYPEWRITER_ROLES, HERO_STATS } from "../../data";
import { FaArrowRight, FaDownload, FaCommentDots } from "react-icons/fa";

export default function HeroSection({ onNavClick }) {
  const role = useTypewriter(TYPEWRITER_ROLES);
  const [ref, visible] = useIntersect(0.1);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen pt-28 flex items-center px-6 sm:px-8 md:px-16 pb-12
      bg-gradient-to-br from-slate-50 via-white to-blue-50
      dark:from-navy-950 dark:via-navy-900 dark:to-navy-800
      border-b border-blue-100/60 dark:border-white/[0.06]
      overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none opacity-[0.045] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2563eb 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[320px] h-[320px] rounded-full bg-blue-300/10 blur-2xl animate-float-slow pointer-events-none" />

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* LEFT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[0.6rem] tracking-[3px] uppercase text-emerald-700 dark:text-emerald-400">
              Available for work
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display font-extrabold leading-[1.05] mb-3 text-slate-800 dark:text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
          >
            <span
              className="block font-light"
              style={{
                fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
                letterSpacing: "0.15em",
              }}
            >
              I'm
            </span>
            <span className="text-blue-600 dark:text-blue-400">
              BIPESH JUNIOR
            </span>
          </h1>

          {/* Typewriter */}
          <p
            className="font-mono font-light mb-6 min-h-[2.2em] text-blue-600 dark:text-blue-300"
            style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
          >
            &gt;&nbsp;{role}
            <span className="cursor-blink bg-blue-600 dark:bg-blue-400" />
          </p>

          {/* Description */}
          <p className="text-sm leading-[1.9] text-slate-500 dark:text-slate-400 max-w-[480px] mb-9">
            I build{" "}
            <span className="text-slate-700 dark:text-slate-200 font-medium">
              scalable React interfaces
            </span>{" "}
            with clean architecture and smooth interactions, focused on fast,
            intuitive, and reliable real-world experiences with performance and clarity in mind.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">

            {/* Primary */}
            <button
              onClick={() => onNavClick("projects")}
              className="group flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl
              bg-blue-600 text-white
              font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase
              shadow-[0_10px_30px_rgba(37,99,235,0.35)]
              hover:shadow-[0_18px_45px_rgba(37,99,235,0.45)]
              hover:-translate-y-1 transition-all duration-300"
            >
              View my work
              <FaArrowRight className="text-[12px] group-hover:translate-x-1 transition" />
            </button>

            {/* Secondary */}
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl
              border border-blue-500/60
              text-blue-600 dark:text-blue-400
              font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase
              backdrop-blur-md bg-white/40 dark:bg-white/5
              hover:-translate-y-1 transition-all duration-300"
            >
              <FaDownload className="text-[12px]" />
              Download CV
            </a>

            {/* Ghost */}
            <button
              onClick={() => onNavClick("contact")}
              className="group flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl
              border border-slate-300/70 dark:border-slate-700
              text-slate-600 dark:text-slate-400
              font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase
              hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400
              hover:-translate-y-1 transition-all duration-300"
            >
              <FaCommentDots className="text-[12px]" />
              Let's talk
            </button>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-10">
            {HERO_STATS.map(({ label }, i) => (
              <div
                key={`${label}-${i}`}
                className="px-3.5 py-2 rounded-xl border border-blue-100/70 dark:border-white/[0.06]
                bg-white/70 dark:bg-white/[0.02]
                backdrop-blur-md"
                style={{
                  animation: `waveFloat 4s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                <span className="font-mono text-[0.6rem] text-slate-700 dark:text-slate-300">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT (PROFILE FLOAT FIXED) */}
        <div className="flex justify-center lg:justify-end">
          <div className="animate-float-profile">
            <ProfilePhoto className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96" />
          </div>
        </div>
      </div>
    </section>
  );
}