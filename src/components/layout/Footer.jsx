import { SOCIAL_LINKS } from "../../data";

export default function Footer() {
  return (
    <footer
      className="px-8 md:px-16 py-7
                 bg-white dark:bg-navy-900
                 border-t border-slate-100 dark:border-white/[0.06]
                 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      {/* Left Text */}
      <p className="font-mono text-[0.68rem] tracking-wide text-slate-400 dark:text-slate-500 text-center md:text-left">
        Designed &amp; Built By{" "}
        <strong className="text-blue-600 dark:text-blue-500 font-mono text-[0.70rem]">
          Bipesh Junior
        </strong>
      </p>

      {/* Social Links (Closer Spacing) */}
      <div className="flex items-center gap-10">
        {SOCIAL_LINKS.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.url}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-500 transition"
            >
              <Icon size={19} />
            </a>
          );
        })}
      </div>

      {/* Right Text */}
      <p className="font-mono text-[0.70rem] tracking-wide text-slate-500 text-center md:text-right">
        © {new Date().getFullYear()} — All Rights Reserved
      </p>
    </footer>
  );
}
