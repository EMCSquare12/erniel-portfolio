import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaGithubSquare,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "RESUME", path: "/resume" },
    { name: "SKILLS", path: "/skills" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      {/* MOBILE TOP NAVBAR */}
      <header className="md:hidden flex items-center justify-between bg-[#1c2128]/90 backdrop-blur-md border-b border-slate-700/50 px-4 py-3 sticky top-0 z-50 transition-colors">
        <div>
          <h1 className="text-base font-bold text-white leading-tight">
            Erniel Caalim
          </h1>
          <p className="text-xs text-slate-400">Web Dev & Data Analyst</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-300 hover:text-white focus:outline-none bg-slate-800/80 border border-slate-700 rounded-lg transition-all cursor-pointer"
            aria-label="Toggle Light/Dark Theme"
            title={
              theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
          >
            {theme === "dark" ? (
              <FaSun className="w-4 h-4 text-amber-400" />
            ) : (
              <FaMoon className="w-4 h-4 text-indigo-500" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none bg-slate-800/80 border border-slate-700 rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* MOBILE SLIDE-OUT MENU */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-72 bg-[#1c2128] border-r border-slate-700/80 z-50 p-6 flex flex-col justify-between transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
            <div>
              <h1 className="text-lg font-bold text-white">Erniel Caalim</h1>
              <span className="block text-xs text-slate-400 mt-0.5">
                Web Developer & Data Analyst
              </span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="text-slate-400 hover:text-white p-1"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <nav className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-slate-700/60 text-white border-l-4 border-blue-500"
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
          {/* Mobile Drawer Theme Toggle Button */}
          <div className="mb-4">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-700/80 transition-all cursor-pointer shadow-sm text-xs font-semibold"
              aria-label="Toggle Light/Dark Theme"
            >
              <span className="flex items-center gap-2">
                {theme === "dark" ? (
                  <FaSun className="w-4 h-4 text-amber-400" />
                ) : (
                  <FaMoon className="w-4 h-4 text-indigo-500" />
                )}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-700/80 text-slate-300 uppercase tracking-wider font-mono">
                {theme === "dark" ? "OFF" : "ON"}
              </span>
            </button>
          </div>

          <div className="flex space-x-4 mb-4 text-slate-400">
            <a
              href="https://github.com/EMCSquare12"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithubSquare className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ninelcaalim12@gmail.com"
              className="hover:text-white transition-colors"
            >
              <IoMdMail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-slate-500">© Copyright Erniel Caalim.</p>
        </div>
      </div>

      {/* DESKTOP SIDEBAR */}
      <aside className="w-64 border-r bg-[#1c2128]/60 backdrop-blur-md border-slate-700/50 p-6 flex-col justify-between hidden md:flex shrink-0 transition-colors">
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
          {/* Desktop Theme Toggle Button */}
          <div className="mb-4">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-700/80 transition-all cursor-pointer shadow-sm text-xs font-semibold"
              aria-label="Toggle Light/Dark Theme"
            >
              <span className="flex items-center gap-2">
                {theme === "dark" ? (
                  <FaSun className="w-4 h-4 text-amber-400" />
                ) : (
                  <FaMoon className="w-4 h-4 text-indigo-500" />
                )}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-700/80 text-slate-300 uppercase tracking-wider font-mono">
                {theme === "dark" ? "OFF" : "ON"}
              </span>
            </button>
          </div>

          <div className="flex space-x-4 mb-4 text-slate-400">
            <a
              href="https://github.com/EMCSquare12"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithubSquare className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ninelcaalim12@gmail.com"
              className="hover:text-white transition-colors"
            >
              <IoMdMail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-slate-500">© Copyright Erniel Caalim.</p>
        </div>
      </aside>
    </>
  );
}
