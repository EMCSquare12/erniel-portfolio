import React from "react";

export default function Sidebar() {
  const navItems = [
    "HOME",
    "PROJECTS",
    "DASHBOARD",
    "SKILLS",
    "RESUME",
    "CONTACT",
  ];

  return (
    <aside className="w-64 border-r border-slate-700/50 bg-[#161b22] p-6 flex flex-col justify-between hidden md:flex">
      {/* Top: Header */}
      <div>
        <h1 className="text-xl font-bold text-white mb-8 border-b border-slate-700 pb-4">
          Alex Chen
          <span className="block text-sm font-normal text-slate-400 mt-1">
            Web Developer & Data Analyst
          </span>
        </h1>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                item === "HOME"
                  ? "bg-slate-700/50 text-white border-l-2 border-blue-500"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom: Socials & Footer */}
      <div>
        <div className="flex space-x-4 mb-4 text-slate-400">
          {/* Replace with actual SVG icons */}
          <span className="hover:text-white cursor-pointer">GitHub</span>
          <span className="hover:text-white cursor-pointer">LinkedIn</span>
          <span className="hover:text-white cursor-pointer">Email</span>
        </div>
        <p className="text-xs text-slate-500">© Copyright Alex Chen, Inc.</p>
      </div>
    </aside>
  );
}
