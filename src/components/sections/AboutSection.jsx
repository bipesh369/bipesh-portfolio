import useIntersect from "../../hooks/useIntersect";
import SectionHeader from "../ui/SectionHeader";
import { ABOUT_INFO, EXPERIENCE } from "../../data";

export default function AboutSection() {
  const [ref, visible] = useIntersect(0.1);

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen flex flex-col justify-center px-8 md:px-16 py-24
        bg-white dark:bg-navy-800
        border-b border-blue-100/60 dark:border-white/[0.06]
        section-animate ${visible ? "visible" : ""}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeader eyebrow="// 01. about_me" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side */}
          <div>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-4">
              Hey! I'm{" "}
              <strong className="text-slate-700 dark:text-blue-300 font-semibold">
                Bipesh Junior
              </strong>
              , a frontend developer based in Nepalgunj, Nepal. I love turning
              complex problems into elegant, high-performing digital products.
            </p>

            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-4">
              With{" "}
              <strong className="text-slate-700 dark:text-blue-300 font-semibold">
                1+ years
              </strong>{" "}
              of experience, I build modern web applications — from clean UIs
              to scalable frontend architectures.
            </p>

            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-8">
              When I’m not building things, I’m mentoring juniors, playing
              football, or exploring different parts of Nepal.
            </p>

            <ul className="space-y-3">
              {ABOUT_INFO.map(({ key, value }) => (
                <li key={key} className="flex gap-4 text-sm">
                  <span className="font-mono text-blue-600 dark:text-blue-400 min-w-[90px] font-medium">
                    {key}:
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div>
            <p className="font-mono text-base tracking-[3px] uppercase text-blue-600 dark:text-blue-400 mb-6">
               {'// Experience'}
            </p>

            <div className="flex flex-col">
              {EXPERIENCE.map((item, idx) => (
                <div key={`${item.role}-${idx}`} className="flex gap-4">
                  
                  {/* Timeline Indicator */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-white dark:bg-navy-800
                      border-2 border-blue-500 mt-1
                      shadow-[0_0_0_4px_rgba(37,99,235,0.12)]"
                    />
                    {idx < EXPERIENCE.length - 1 && (
                      <div className="w-[2px] flex-1 bg-blue-100 dark:bg-blue-900/60 my-2 min-h-[24px]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <span className="font-mono text-xs tracking-widest text-blue-500 dark:text-blue-400 uppercase block mb-1">
                      {item.year}
                    </span>

                    <h3 className="font-bold text-base text-slate-800 dark:text-white mb-1">
                      {item.role}
                    </h3>

                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {item.company}
                    </p>

                    <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}