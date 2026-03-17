import photo from "../assets/bjr.jpg";

export default function ProfilePhoto({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-blue-300 opacity-30 blur-xl scale-110 animate-float" />

      {/* Rotating dashed border ring */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/40 animate-[spin_20s_linear_infinite]" />

      {/* Main photo frame */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-400/30 shadow-glow">
        <img
          src={photo}
          alt="Bipesh Junior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Status badge */}
      <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-white dark:bg-navy-900 rounded-full px-2.5 py-1 shadow-lg border border-blue-100 dark:border-blue-900">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] font-mono font-medium text-slate-600 dark:text-slate-300 tracking-wide">
          Available
        </span>
      </div>
    </div>
  );
}