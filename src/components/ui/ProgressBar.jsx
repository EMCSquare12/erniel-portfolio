import React from "react";

export const ProgressBar = ({
  label,
  percentage,
  range,
  colorClass,
  variant = "default",
}) => {
  if (variant === "gradient") {
    return (
      <div className="flex items-center space-x-4 mb-4">
        <span className="text-sm text-slate-300 w-16">{label}</span>
        <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-sm text-slate-300 w-8 text-right">
          {percentage}%
        </span>
      </div>
    );
  }

  return (
    <div className="mb-2">
      <div className="flex justify-between text-[10px] text-slate-300 mb-1">
        <span>{label}</span>
        {range && <span>{range}</span>}
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${colorClass || "bg-blue-500"}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
