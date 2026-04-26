import useIntersect from "../../hooks/useIntersect";
import SectionHeader from "../layout/SectionHeader";
import { PROJECTS } from "../../data";

export default function ProjectsSection() {
  const [ref, visible] = useIntersect(0.05);

  return (
    <section
      id="projects"
      ref={ref}
      className={`
        relative
        min-h-screen flex flex-col justify-center
        px-8 md:px-16 py-24
        bg-white dark:bg-navy-900
        section-animate ${visible ? "visible" : ""}
      `}
    >
      {/* TOP LINE */}
      <div className="absolute top-0 left-8 right-8 md:left-16 md:right-16 h-px bg-gradient-to-r from-transparent via-blue-400/25 dark:via-cyan-400/25 to-transparent" />

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-8 right-8 md:left-16 md:right-16 h-px bg-gradient-to-r from-transparent via-blue-400/25 dark:via-cyan-400/25 to-transparent" />

      <div className="max-w-6xl mx-auto w-full">

        {/* Header — no description paragraph, it was generic filler */}
        <SectionHeader eyebrow="// 03. projects" title="Selected Work" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {PROJECTS.map((project) => (
            <article
              key={project.num}
              className={`
                group relative flex flex-col overflow-hidden rounded-2xl p-6
                bg-white dark:bg-navy-950
                border border-slate-200 dark:border-white/[0.07]
                hover:border-blue-400/50 dark:hover:border-cyan-400/40
                hover:-translate-y-2
                hover:shadow-[0_18px_45px_rgba(37,99,235,0.18)]
                transition-all duration-300
              `}
            >
              {/* Project number + status */}
              <div className="flex items-center justify-between mb-3">
                <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-slate-400 dark:text-slate-600">
                  Project {String(project.num).padStart(2, "0")}
                </p>

                {/* Live indicator — only shows if demo link exists and is not localhost */}
                {project.demo && !project.demo.includes("localhost") && (
                  <span className="flex items-center gap-1.5 font-mono text-[0.55rem] tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-xs leading-[1.8] text-slate-500 dark:text-slate-400 mb-5">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md font-mono text-[0.6rem]
                    bg-blue-50 dark:bg-blue-950/40
                    border border-blue-100 dark:border-blue-900/40
                    text-blue-700 dark:text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links — pushed to bottom, hide code link if localhost */}
              <div className="flex gap-5 mt-auto pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                {project.demo && !project.demo.includes("localhost") && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[0.65rem] tracking-wider uppercase
                    text-blue-600 dark:text-blue-400
                    hover:text-blue-800 dark:hover:text-blue-300
                    transition-colors duration-200"
                  >
                    ↗ Live Demo
                  </a>
                )}

                {project.code &&
                  !project.code.includes("localhost") && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[0.65rem] tracking-wider uppercase
                      text-slate-400 dark:text-slate-500
                      hover:text-blue-600 dark:hover:text-blue-400
                      transition-colors duration-200"
                    >
                      ⌥ View Code
                    </a>
                  )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}