import React from "react";

export const ProgressBar = ({ label, percentage, variant, colorClass }) => {
  const getBarColor = () => {
    if (colorClass) return colorClass;
    if (variant === "teal") return "bg-teal-500";
    if (variant === "amber") return "bg-amber-500";
    if (variant === "blue") return "bg-blue-500";
    if (variant === "gradient")
      return "bg-gradient-to-r from-blue-500 to-teal-400";
    return "bg-blue-500";
  };

  return (
    <div className="mb-2.5 last:mb-0">
      <div className="flex justify-between text-xs text-slate-300 mb-1 font-medium">
        <span>{label}</span>
        <span className="text-slate-200 font-bold font-mono">
          {percentage}%
        </span>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
        <div
          className={`h-full rounded-full transition-all duration-500 ${getBarColor()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
