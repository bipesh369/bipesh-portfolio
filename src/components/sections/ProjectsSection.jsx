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
        <SectionHeader eyebrow="// 03. projects" title="Featured Work" />

        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mt-4 mb-10">
          Selected projects focused on building scalable, performant, and
          user-centered web applications with clean architecture and modern UI
          systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.num}
              className={`
                group relative overflow-hidden rounded-2xl p-6
                bg-white dark:bg-navy-950
                border border-slate-200 dark:border-white/[0.07]
                hover:border-blue-400/50 dark:hover:border-cyan-400/40
                hover:-translate-y-2
                hover:shadow-[0_18px_45px_rgba(37,99,235,0.18)]
                transition-all duration-300
              `}
            >
              <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-slate-400 dark:text-slate-600 mb-3">
                Project {project.num}
              </p>

              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-xs leading-[1.8] text-slate-500 dark:text-slate-400 mb-5">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
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

              <div className="flex gap-5 mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[0.65rem] tracking-wider uppercase text-blue-600 dark:text-blue-400"
                >
                  ↗ Live Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[0.65rem] tracking-wider uppercase text-blue-600 dark:text-blue-400"
                >
                  ⌥ View Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
