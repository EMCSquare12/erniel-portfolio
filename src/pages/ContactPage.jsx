import React from "react";
import { Card } from "../components/ui/Card";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase mb-4 sm:mb-6">
        GET IN TOUCH{" "}
        <span className="block sm:inline text-slate-400 font-light normal-case text-xs sm:text-base">
          | Let's Collaborate
        </span>
      </h2>

      <Card className="p-4 sm:p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col space-y-6 sm:space-y-8 justify-center">
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-white mb-3">
                Let's talk about your next project.
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Whether you have a question, a project idea, or just want to
                connect, feel free to drop a message. I'll try my best to get
                back to you as soon as possible!
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3.5 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#161b22] border border-slate-700 flex items-center justify-center text-cyan-400 shadow-inner shrink-0">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    Email
                  </p>
                  <a
                    href="mailto:ninelcaalim12@gmail.com"
                    className="text-xs sm:text-sm text-slate-400 hover:text-cyan-400 transition-colors break-all"
                  >
                    ninelcaalim12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#161b22] border border-slate-700 flex items-center justify-center text-blue-500 shadow-inner shrink-0">
                  <FaLinkedin size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    LinkedIn
                  </p>
                  <a
                    href="https://linkedin.com/in/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm text-slate-400 hover:text-blue-500 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#161b22] border border-slate-700 flex items-center justify-center text-white shadow-inner shrink-0">
                  <FaGithub size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/EMCSquare12"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    github.com/EMCSquare12
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#161b22] border border-slate-700 flex items-center justify-center text-teal-400 shadow-inner shrink-0">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Pasig, Metro Manila, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-[#161b22] border border-slate-700/50 rounded-2xl p-5 sm:p-8 shadow-inner flex flex-col justify-center">
            <h3 className="font-bold text-white uppercase text-xs sm:text-sm mb-4 sm:mb-6 flex items-center gap-2">
              SEND A DIRECT MESSAGE
            </h3>

            <form
              className="flex flex-col space-y-4 sm:space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Erniel Caalim"
                  className="w-full bg-[#0d1117] border border-slate-600 rounded-lg p-2.5 sm:p-3 text-xs sm:text-sm text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all shadow-sm"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="sample@email.com"
                  className="w-full bg-[#0d1117] border border-slate-600 rounded-lg p-2.5 sm:p-3 text-xs sm:text-sm text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all shadow-sm"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase ml-1">
                  Message
                </label>
                <textarea
                  placeholder="How can I help you?"
                  rows="4"
                  className="w-full bg-[#0d1117] border border-slate-600 rounded-lg p-2.5 sm:p-3 text-xs sm:text-sm text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all resize-none shadow-sm"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase py-3 rounded-lg mt-2 transition-colors flex justify-center items-center gap-2 text-xs sm:text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <span>Send Message</span>
                <FaPaperPlane size={12} />
              </button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}
