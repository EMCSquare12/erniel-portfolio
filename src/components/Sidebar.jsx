import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Sidebar() {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "RESUME", path: "/resume" },
    { name: "PROJECTS", path: "/projects" },
    // { name: "DASHBOARD", path: "/dashboard" },
    { name: "SKILLS", path: "/skills" },

    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <aside className="w-64 border-r bg-[#1c2128]/60 backdrop-blur-md  border-slate-700/50 p-6 flex flex-col justify-between hidden md:flex">
      <div>
        <h1 className="text-xl font-bold text-white mb-8 border-b border-slate-700 pb-4">
          Erniel Caalim
          <span className="block text-sm font-normal text-slate-400 mt-1">
            Web Developer & Data Analyst
          </span>
        </h1>

        <nav className="flex flex-col space-y-2">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-slate-700/50 text-white border-l-2 border-blue-500"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div>
        <div className="flex space-x-4 mb-4 text-slate-400">
          <FaGithubSquare className="w-5 h-5" />
          <FaLinkedin className="w-5 h-5" />
          <IoMdMail className="w-5 h-5" />
        </div>
        <p className="text-xs text-slate-500">© Copyright Erniel Caalim.</p>
      </div>
    </aside>
  );
}
