/**
 * SectionHeader — consistent eyebrow + title + rule used
 * at the top of every content section.
 */
export default function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-[0.65rem] tracking-[3px] uppercase text-blue-500 dark:text-blue-400 mb-2">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
        {title}
      </h2>
      <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-blue-300" />
    </div>
  );
}
