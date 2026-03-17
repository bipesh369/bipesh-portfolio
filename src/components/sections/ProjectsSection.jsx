import useIntersect from "../../hooks/useIntersect";
import SectionHeader from "../ui/SectionHeader";
import { PROJECTS } from "../../data";

/**
 * ProjectsSection — responsive grid of project cards with staggered
 * entrance animation, top-border hover reveal, tags, and links.
 */
export default function ProjectsSection() {
  const [ref, visible] = useIntersect(0.05);

  return (
    <section
      id="projects"
      ref={ref}
      className={`
        min-h-screen flex flex-col justify-center
        px-8 md:px-16 py-24
        bg-white dark:bg-navy-900
        border-b border-blue-100/60 dark:border-white/[0.06]
        section-animate ${visible ? "visible" : ""}
      `}
    >
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeader eyebrow="// 03. projects" title="Featured Work" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.num}
              className={`
                project-card relative
                bg-white dark:bg-navy-950
                border border-slate-200 dark:border-white/[0.07]
                rounded-2xl p-6 overflow-hidden cursor-default
                hover:border-blue-300 dark:hover:border-blue-700/60
                hover:-translate-y-1 hover:shadow-card-hover
                transition-all duration-300
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
              style={{
                transitionDelay: `${idx * 80}ms`,
                transitionProperty: "opacity, transform, box-shadow, border-color",
                transitionDuration: "500ms",
              }}
            >
              {/* Project number */}
              <p className="font-mono text-[0.58rem] tracking-[2px] uppercase
                            text-slate-400 dark:text-slate-600 mb-3">
                Project {project.num}
              </p>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-slate-900
                             dark:text-white mb-2.5">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs leading-[1.8] text-slate-400 dark:text-slate-500 mb-4">
                {project.desc}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-0">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded font-mono text-[0.6rem] tracking-wide
                               bg-blue-50 dark:bg-blue-950/50
                               border border-blue-100 dark:border-blue-900/50
                               text-blue-700 dark:text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[0.65rem] tracking-wider uppercase
                             text-blue-600 dark:text-blue-400
                             hover:text-blue-800 dark:hover:text-blue-200
                             flex items-center gap-1 transition-colors duration-150"
                >
                  ↗ Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[0.65rem] tracking-wider uppercase
                             text-blue-600 dark:text-blue-400
                             hover:text-blue-800 dark:hover:text-blue-200
                             flex items-center gap-1 transition-colors duration-150"
                >
                  ⌥ Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
