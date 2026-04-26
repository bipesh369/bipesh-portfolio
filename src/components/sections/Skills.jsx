import { SKILLS } from "../../data";
import SectionHeader from "../layout/SectionHeader";

const DARK_ICONS = ["GitHub"];

const fixedIcons = {
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-8 md:px-16 py-16 bg-white dark:bg-navy-800 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl animate-float1 top-[-20%] left-[-10%]" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl animate-float2 top-[10%] right-[-10%]" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl animate-float3 top-[40%] left-[50%]" />
      </div>

      {/* TOP LINE */}
      <div className="absolute top-0 left-8 right-8 md:left-16 md:right-16 h-px bg-gradient-to-r from-transparent via-blue-400/25 dark:via-cyan-400/25 to-transparent" />

      {/* MAIN WRAPPER */}
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col min-h-[80vh]">
        
        {/* Header */}
        <SectionHeader eyebrow="// 02. skills" title="What I Build With" />

        {/* Categories */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 mt-10">
          {SKILLS.map((group, gi) => (
            <div key={gi} className="flex flex-col items-center flex-1">
              <div className="flex items-center gap-3 mb-6 w-full">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-500/40 dark:to-cyan-400/40" />
                <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-blue-600 dark:text-cyan-400 whitespace-nowrap">
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-500/40 dark:to-cyan-400/40" />
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {group.items.map((skill, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-col items-center justify-center
                    w-[100px] aspect-square rounded-xl
                    bg-slate-50 dark:bg-navy-900/80
                    border border-slate-300 dark:border-white/5
                    hover:border-blue-400/50 dark:hover:border-cyan-400/30
                    hover:-translate-y-1 hover:scale-105
                    hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]
                    transition-all duration-300"
                  >
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-white/5">
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-md scale-110" />
                      <img
                        src={fixedIcons[skill.name] ?? skill.icon}
                        alt={skill.name}
                        className={`relative z-10 w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110 ${
                          DARK_ICONS.includes(skill.name) ? "dark:invert" : ""
                        }`}
                      />
                    </div>

                    <span className="mt-2 text-[10px] font-semibold text-center text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-auto pt-10 flex items-center justify-center w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400/40 dark:via-cyan-400/40 to-transparent" />
          <span className="px-5 text-xs font-mono tracking-[0.25em] uppercase text-slate-400 dark:text-slate-500 whitespace-nowrap">
            the stack grows with the project
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-400/40 dark:via-cyan-400/40 to-transparent" />
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-8 right-8 md:left-16 md:right-16 h-px bg-gradient-to-r from-transparent via-blue-400/25 dark:via-cyan-400/25 to-transparent" />

      {/* Animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, 40px) scale(1.1); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, -40px) scale(1.15); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -50px) scale(1.05); }
        }
        .animate-float1 { animation: float1 12s ease-in-out infinite; }
        .animate-float2 { animation: float2 14s ease-in-out infinite; }
        .animate-float3 { animation: float3 16s ease-in-out infinite; }
      `}</style>
    </section>
  );
}