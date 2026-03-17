import useIntersect from "../../hooks/useIntersect";
import SectionHeader from "../ui/SectionHeader";
import { SKILLS, EXTRA_TECH } from "../../data";

export default function SkillsSection() {
  const [ref, visible] = useIntersect(0.15);

  return (
    <section
      id="skills"
      ref={ref}
      className={`min-h-screen flex flex-col justify-center
        px-8 md:px-16 py-24
        bg-slate-50 dark:bg-navy-950
        border-b border-blue-100/60 dark:border-white/[0.06]
        section-animate ${visible ? "visible" : ""}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeader eyebrow="// 02. skills" title="Tech Stack" />

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
          {SKILLS.map(({ name, icon: Icon, pct }, idx) => (
            <div
              key={name}
              className="bg-white dark:bg-navy-900 border border-slate-200
                dark:border-white/[0.07] rounded-xl p-4
                hover:border-blue-300 dark:hover:border-blue-600/50
                hover:-translate-y-0.5 hover:shadow-card
                transition-all duration-200"
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50
                    border border-blue-100 dark:border-blue-900
                    flex items-center justify-center flex-shrink-0"
                  >
                    <Icon className="text-blue-600 dark:text-blue-400 text-base" />
                  </div>

                  <span className="text-sm font-semibold text-slate-800 dark:text-white">
                    {name}
                  </span>
                </div>

                <span className="font-mono text-xs font-medium text-blue-600 dark:text-blue-400">
                  {pct}%
                </span>
              </div>

              {/* Progress */}
              <div className="h-[5px] rounded-full bg-blue-50 dark:bg-blue-950/60
                border border-blue-100 dark:border-blue-900/50 overflow-hidden"
              >
                <div
                  className="skill-fill"
                  style={{
                    width: visible ? `${pct}%` : "0%",
                    transitionDelay: `${idx * 70}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Extra tech */}
        <p className="font-mono text-[0.62rem] tracking-[3px] uppercase
          text-slate-400 dark:text-slate-500 mb-4"
        >
          // Also proficient in
        </p>

        <div className="flex flex-wrap gap-2">
          {EXTRA_TECH.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded font-mono text-[0.65rem] tracking-wide uppercase
                bg-blue-50 dark:bg-blue-950/40
                border border-blue-100 dark:border-blue-900/60
                text-blue-700 dark:text-blue-300
                hover:bg-blue-100 dark:hover:bg-blue-900/60
                hover:border-blue-300 dark:hover:border-blue-600
                hover:-translate-y-px cursor-default
                transition-all duration-150"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}