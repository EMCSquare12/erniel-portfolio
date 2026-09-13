import React from "react";

export const ProgressBar = ({
  label,
  percentage,
  variant,
  colorClass,
  icon,
  subtitle,
  score,
}) => {
  const getBarColor = () => {
    if (colorClass) return colorClass;
    if (variant === "teal")
      return "bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-400";
    if (variant === "amber")
      return "bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400";
    if (variant === "blue")
      return "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400";
    if (variant === "gradient")
      return "bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-400";
    return "bg-gradient-to-r from-blue-600 to-cyan-400";
  };

  const displayScore = score || `${percentage}%`;

  return (
    <div className="flex items-center gap-3.5 py-2.5 border-b border-slate-700/40 last:border-b-0">
      {/* Left Icon Container (Matches SkillPage design) */}
      {icon && (
        <div className="shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#161b22] border border-slate-700 flex items-center justify-center p-2 shadow-inner">
            {icon}
          </div>
        </div>
      )}

      {/* Progress Bar & Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-1">
          <div className="font-bold text-white text-xs sm:text-sm tracking-wide truncate">
            {label}
          </div>
          <span className="text-xs sm:text-sm text-slate-200 font-bold font-mono ml-2">
            {displayScore}
          </span>
        </div>

        <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/60 shadow-inner">
          <div
            className={`h-full rounded-full transition-all duration-500 shadow-sm ${getBarColor()}`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        {subtitle && (
          <p className="text-[10px] sm:text-xs text-slate-400 mt-1 truncate">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
