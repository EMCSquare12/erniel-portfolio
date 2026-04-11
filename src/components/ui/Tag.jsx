import React from "react";

export const Tag = ({ src, alt, children }) => (
  <div className="px-2 py-1 flex flex-row items-center gap-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300 shadow-sm">
    {src && <img src={src} alt={alt} title={alt} className="w-5 h-5" />}
    {children}
  </div>
);
