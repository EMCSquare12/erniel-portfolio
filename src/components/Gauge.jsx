import React from "react";

// --- Reusable Sub-components ---

const Gauge = ({ percent, colorClass }) => {
  const radius = 40;
  const circumference = Math.PI * radius; // ~125.66
  const strokeDashoffset = circumference - (percent / 100) * circumference;
  const rotation = (percent / 100) * 180;

  return (
    <div className="relative w-28 h-14 flex justify-center">
      <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
        {/* Background Track */}
        <path
          d="M 10 50 a 40 40 0 0 1 80 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className="text-gray-400 opacity-20"
        />
        {/* Progress Arc */}
        <path
          d="M 10 50 a 40 40 0 0 1 80 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={`${colorClass} transition-all duration-1000 ease-out`}
        />
        {/* Needle Pointer */}
        <g transform={`rotate(${rotation}, 50, 50)`} className={colorClass}>
          {/* Tapered needle base */}
          <path d="M 50 47 L 15 49.5 L 15 50.5 L 50 53 Z" fill="currentColor" />
          {/* Needle center pivot */}
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
};

const SkillItem = ({ skill }) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Top Section: Gauge & Percentage */}
      <div className="flex flex-col items-center gap-1">
        <Gauge percent={skill.percent} colorClass={skill.colorClass} />
        <div className="mt-2 text-center">
          <p className="text-lg font-bold text-gray-100">{skill.percent}%</p>
          <p className="text-xs text-gray-400 font-medium">{skill.name}</p>
        </div>
      </div>

      {/* Bottom Section: Icon & Name */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-gray-800/80 shadow-inner flex items-center justify-center border border-gray-700/50">
          {skill.icon}
        </div>
        <p className="text-xs text-gray-400 font-medium text-center">
          {skill.name}
        </p>
      </div>
    </div>
  );
};

// --- Main Component ---

export default function SkillsSpectrum() {
  const skillsData = [
    {
      name: "MERN Stack",
      percent: 90,
      colorClass: "text-blue-500",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-cyan-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(30 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(150 12 12)"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "SQL",
      percent: 85,
      colorClass: "text-sky-500",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        </svg>
      ),
    },
    {
      name: "Excel/Power Query",
      percent: 80,
      colorClass: "text-emerald-500",
      icon: (
        <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white text-[10px] font-black">
          X
        </div>
      ),
    },
    {
      name: "Power BI/Tableau",
      percent: 80,
      colorClass: "text-cyan-400",
      icon: (
        <div className="w-6 h-6 flex items-end justify-center gap-0.5 pb-1">
          <div className="w-1.5 h-3 bg-yellow-500 rounded-sm"></div>
          <div className="w-1.5 h-4 bg-yellow-500 rounded-sm"></div>
          <div className="w-1.5 h-2 bg-yellow-500 rounded-sm"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 p-6 font-sans">
      {/* Card Container */}
      <div className="w-full max-w-3xl bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/5">
        <h2 className="text-xl font-bold text-white mb-8 tracking-wide">
          Skills Spectrum
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
