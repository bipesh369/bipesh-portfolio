import useIntersect from "../../hooks/useIntersect";
import SectionHeader from "../layout/SectionHeader";
import { SKILLS, EXTRA_TECH } from "../../data";

export default function SkillsSection() {
  const [ref, visible] = useIntersect(0.15);

  return (
    <section
      id="skills"
      ref={ref}
      className={`
        relative min-h-screen flex flex-col justify-center
        overflow-hidden
        px-6 md:px-12 lg:px-16
        py-24 md:py-28
        bg-slate-50 dark:bg-navy-950
        border-b border-slate-200/70 dark:border-white/[0.06]
        section-animate ${visible ? "visible" : ""}
      `}
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -top-48 -left-48
            w-[600px] h-[600px]
            rounded-full
            bg-blue-500/[0.055]
            dark:bg-blue-500/[0.045]
            blur-[120px]
          "
        />

        <div
          className="
            absolute -bottom-48 -right-48
            w-[600px] h-[600px]
            rounded-full
            bg-cyan-400/[0.04]
            dark:bg-cyan-400/[0.035]
            blur-[130px]
          "
        />

        {/* Very subtle grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.018] dark:opacity-[0.025]
            [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />
      </div>

      {/* Top accent */}
      <div
        className="
          absolute top-0 left-6 right-6
          md:left-16 md:right-16
          h-px
          bg-gradient-to-r
          from-transparent
          via-blue-400/30
          to-transparent
          dark:via-cyan-400/25
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="// 02. skills"
            title="Tech Stack"
          />

          <p
            className="
              max-w-md
              text-sm
              leading-6
              text-slate-500
              dark:text-slate-400
              md:text-right
            "
          >
            Technologies I use to design, build and ship modern web
            applications.
          </p>
        </div>

        {/* Header divider */}
        <div
          className="
            mt-10 mb-10
            h-px
            bg-gradient-to-r
            from-slate-200
            via-blue-200/70
            to-transparent
            dark:from-white/[0.06]
            dark:via-blue-400/20
            dark:to-transparent
          "
        />

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILLS.map(({ name, icon: Icon, pct }, idx) => (
            <div
              key={name}
              className="
                group relative
                rounded-2xl
                bg-white/80
                dark:bg-navy-900/70
                border border-slate-200
                dark:border-white/[0.07]
                p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:border-blue-300
                dark:hover:border-blue-500/30
                hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]
                dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]
              "
            >
              {/* Hover highlight */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                  bg-gradient-to-br
                  from-blue-500/[0.035]
                  via-transparent
                  to-cyan-400/[0.025]
                "
              />

              {/* Top */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div
                    className="
                      flex items-center justify-center
                      w-10 h-10
                      rounded-xl
                      bg-slate-50
                      dark:bg-navy-950
                      border border-slate-200
                      dark:border-white/[0.07]
                      transition-all duration-300
                      group-hover:border-blue-200
                      dark:group-hover:border-blue-500/20
                      group-hover:scale-105
                    "
                  >
                    <Icon
                      className="
                        text-blue-600
                        dark:text-blue-400
                        text-base
                      "
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <span
                      className="
                        block
                        text-sm
                        font-semibold
                        text-slate-800
                        dark:text-white
                      "
                    >
                      {name}
                    </span>

                    <span
                      className="
                        block mt-0.5
                        text-[10px]
                        font-mono
                        uppercase
                        tracking-wider
                        text-slate-400
                        dark:text-slate-500
                      "
                    >
                      proficiency
                    </span>
                  </div>
                </div>

                {/* Percentage */}
                <span
                  className="
                    font-mono
                    text-xs
                    font-medium
                    text-blue-600
                    dark:text-blue-400
                  "
                >
                  {pct}%
                </span>
              </div>

              {/* Progress */}
              <div
                className="
                  relative z-10
                  mt-5
                  h-1.5
                  rounded-full
                  bg-slate-100
                  dark:bg-navy-950
                  overflow-hidden
                "
              >
                <div
                  className="
                    skill-fill
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                  "
                  style={{
                    width: visible ? `${pct}%` : "0%",
                    transitionDelay: `${idx * 70}ms`,
                  }}
                />
              </div>

              {/* Bottom metadata */}
              <div
                className="
                  relative z-10
                  flex items-center justify-between
                  mt-3
                "
              >
                <span
                  className="
                    text-[10px]
                    font-mono
                    text-slate-400
                    dark:text-slate-500
                  "
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    text-[10px]
                    font-mono
                    text-slate-400
                    dark:text-slate-500
                  "
                >
                  {pct >= 85
                    ? "Advanced"
                    : pct >= 70
                    ? "Strong"
                    : "Working"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Extra tech */}
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-5">
            <p
              className="
                font-mono
                text-[10px]
                tracking-[0.28em]
                uppercase
                text-slate-400
                dark:text-slate-500
                whitespace-nowrap
              "
            >
              // Also proficient in
            </p>

            <div
              className="
                h-px flex-1
                bg-gradient-to-r
                from-slate-200
                to-transparent
                dark:from-white/[0.06]
                dark:to-transparent
              "
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {EXTRA_TECH.map((tech) => (
              <span
                key={tech}
                className="
                  px-3.5 py-2
                  rounded-lg
                  font-mono
                  text-[10px]
                  tracking-wide
                  uppercase
                  bg-white
                  dark:bg-navy-900
                  border border-slate-200
                  dark:border-white/[0.07]
                  text-slate-500
                  dark:text-slate-400
                  hover:text-blue-600
                  dark:hover:text-cyan-400
                  hover:border-blue-200
                  dark:hover:border-cyan-400/20
                  hover:-translate-y-px
                  transition-all duration-200
                  cursor-default
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div
          className="
            mt-14
            flex items-center gap-4
          "
        >
          <div
            className="
              h-px flex-1
              bg-gradient-to-r
              from-transparent
              to-blue-300/40
              dark:to-cyan-400/20
            "
          />

          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.25em]
              uppercase
              text-slate-400
              dark:text-slate-600
              whitespace-nowrap
            "
          >
            the stack grows with the project
          </span>

          <div
            className="
              h-px flex-1
              bg-gradient-to-l
              from-transparent
              to-blue-300/40
              dark:to-cyan-400/20
            "
          />
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="
          absolute bottom-0 left-6 right-6
          md:left-16 md:right-16
          h-px
          bg-gradient-to-r
          from-transparent
          via-blue-400/20
          to-transparent
        "
      />
    </section>
  );
}