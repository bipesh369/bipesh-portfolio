import { useState } from "react";
import useIntersect from "../../hooks/useIntersect";
import SectionHeader from "../layout/SectionHeader";
import { EDUCATION, EXPERIENCE } from "../../data";
import { GraduationCap, Briefcase, CalendarDays } from "lucide-react";

export default function AboutSection() {
  const [ref, visible] = useIntersect(0.1);
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
  ];

  const items = activeTab === "education" ? EDUCATION : EXPERIENCE;

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen flex flex-col justify-center px-8 md:px-16 py-24
        bg-white dark:bg-navy-800
        section-animate ${visible ? "visible" : ""}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeader eyebrow="// 01. about_me" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side — bio */}
          <div>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-4">
              I'm{" "}
              <strong className="text-slate-700 dark:text-blue-300 font-semibold">
                Bipesh Junior Tharu
              </strong>{" "}
              — a frontend developer from Nepalgunj, Nepal, on my way to
              becoming a full-stack developer. Right now I'm deep in the
              frontend, and I've come to realize that doing it properly is
              harder, and more rewarding, than I expected.
            </p>

            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-4">
              I obsess over the details most people skip —{" "}
              <strong className="text-slate-700 dark:text-blue-300 font-semibold">
                pixel-accurate layouts, animations that feel native,
              </strong>{" "}
              and code the next developer won't curse at. Not because I have
              to. Because anything less than that bothers me.
            </p>

            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              I also mentor juniors at college — explaining things forces you
              to actually understand them, and it's made me a{" "}
              <strong className="text-slate-700 dark:text-blue-300 font-semibold">
                better developer
              </strong>{" "}
              more than anything else has. Away from the screen — football,
              and drives with friends through corners of Nepal most people haven't
              found yet.
            </p>
          </div>

          {/* Right Side — tabbed Education & Experience */}
          <div>
            {/* Tab Buttons */}
            <div className="flex gap-3 mb-6">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-10 py-3 rounded-full text-xs font-medium
                    border transition-all duration-200
                    ${
                      activeTab === id
                        ? "bg-blue-600/10 text-blue-500 border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400"
                        : "text-slate-500 border-slate-200 dark:border-white/10 hover:border-blue-400/40"
                    }`}
                >
                  <Icon size={15} />
                  {label}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative pl-7 min-h-[200px]">
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-blue-100 dark:bg-blue-900/50" />

              {items.map((item, idx) => (
                <div key={idx} className="relative mb-8 last:mb-0">
                  <div
                    className="absolute -left-[22px] top-[5px] w-[10px] h-[10px] rounded-full
                    bg-blue-500 border-2 border-white dark:border-navy-800
                    shadow-[0_0_0_2px_rgba(59,130,246,0.3)]"
                  />

                  <span
                    className="flex items-center gap-1.5 font-mono text-[11px] tracking-wide
                    text-blue-500 dark:text-blue-400 mb-1"
                  >
                    <CalendarDays size={11} />
                    {item.year}
                  </span>

                  <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-0.5">
                    {activeTab === "education" ? item.degree : item.role}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {activeTab === "education" ? item.school : item.company}
                  </p>

                  {activeTab === "experience" && item.desc && (
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
