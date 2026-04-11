import React, { useEffect, useState } from "react";

export const CustomGauge = ({ name, value, color }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setCurrentValue(value), 200);
    return () => clearTimeout(timeout);
  }, [value]);

  const radius = 40;
  const pathLength = Math.PI * radius;
  const strokeDashoffset = pathLength - (currentValue / 100) * pathLength;
  const needleRotation = (currentValue / 100) * 180;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-8 h-8 md:w-14 md:h-14 mb-2">
        <svg
          viewBox="0 0 100 55"
          className="w-full h-full overflow-visible drop-shadow-md"
        >
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="#334155"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          <g
            transform={`translate(50, 50) rotate(${needleRotation - 90})`}
            className="transition-transform duration-1000 ease-out"
          >
            <path d="M -2.5 0 L 0 -32 L 2.5 0 Z" fill={color} />
            <circle cx="0" cy="0" r="4.5" fill={color} />
          </g>
        </svg>
      </div>
      <span className="text-sm text-white leading-tight">{value}%</span>
    </div>
  );
};
