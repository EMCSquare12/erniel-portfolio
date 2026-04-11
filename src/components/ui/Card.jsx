import React from "react";

export const Card = ({ children, className = "", onClick }) => (
  <div
    onClick={onClick}
    className={`bg-[#1c2128]/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-xl ${className}`}
  >
    {children}
  </div>
);
