
import { SOCIAL_LINKS } from "../../data";

export default function Footer() {
  return (
    <footer
      className="px-8 md:px-16 py-8
                 bg-gray-100 dark:bg-navy-900
                 border-t border-black/10 dark:border-white/[0.06]
                 flex flex-col md:flex-row items-center justify-between gap-5"
    >
      {/* Left Text */}
      <p className="font-mono text-[0.68rem] tracking-wide text-gray-600 dark:text-slate-500 text-center md:text-left">
        Designed &amp; Built By{" "}
        <strong className="text-blue-600 dark:text-blue-500 font-mono text-[0.70rem] font-semibold">
          Bipesh Junior Tharu
        </strong>
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-3">
        {SOCIAL_LINKS.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.url}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex items-center justify-center
                w-9 h-9
                rounded-lg
                border border-black/[0.06] dark:border-white/[0.06]
                bg-white/60 dark:bg-white/[0.02]
                text-gray-500 dark:text-slate-500
                hover:text-blue-600 dark:hover:text-blue-500
                hover:border-blue-500/20
                hover:bg-blue-500/[0.06]
                hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              <Icon
                size={17}
                className="transition-transform duration-200 group-hover:scale-105"
              />
            </a>
          );
        })}
      </div>

      {/* Right Text */}
      <p className="font-mono text-[0.70rem] tracking-wide text-gray-600 dark:text-slate-500 text-center md:text-right">
        © {new Date().getFullYear()} — All Rights Reserved
      </p>
    </footer>
  );
}
