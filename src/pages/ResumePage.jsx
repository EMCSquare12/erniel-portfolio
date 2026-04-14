import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

// Reusable Components
import { Card } from "../components/ui/Card";
import { ProgressBar } from "../components/ui/ProgressBar";
import { ProjectGalleryItem } from "../components/ProjectGalleryItem";

// Data
import { timelineData, badgesData } from "../data/resumeData";

// Assets
import {
  IconMongoDb,
  IconExpressJs,
  IconReactJs,
  IconNodeJs,
  IconSocketIO,
  ProjectLiveBingoCreateRoom as CreateRoom,
  ProjectLiveBingoHostPage as HostPage,
  ProjectLiveBingoJoinRoom as JoinRoom,
  ProjectLiveBingoMainPage as MainPage,
  ProjectLiveBingoPlayerRoom as PlayerRoom,
} from "../assets";

export default function ResumePage() {
  const [expandedBadge, setExpandedBadge] = useState(null);

  const toggleBadge = (badge) => {
    setExpandedBadge((prev) => (prev === badge ? null : badge));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      {/* HEADER CARD */}
      <Card className="bg-[#1c2128] border border-slate-700/50 p-4! rounded-2xl flex flex-col md:flex-row justify-between items-center shadow-xl gap-4">
        <div className="flex space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="text-slate-400 hover:text-white transition-colors"
          >
            LANDING PORTFOLIO
          </Link>
          <Link
            to="/resume"
            className="text-teal-400 border-b-2 border-teal-400 pb-1"
          >
            RESUME
          </Link>
          <Link
            to="/contact"
            className="text-slate-400 hover:text-white transition-colors"
          >
            CONTACT
          </Link>
        </div>

        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 border border-teal-500/50 text-teal-400 rounded-lg text-xs font-semibold hover:bg-teal-500/10 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            <span>DOWNLOAD PDF RESUME</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-blue-500/50 text-blue-400 rounded-lg text-xs font-semibold hover:bg-blue-500/10 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>VIEW LINKEDIN PROFILE</span>
          </button>
        </div>
      </Card>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* COLUMN 1: EVOLUTION */}
        <Card className="col-span-1">
          <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest mb-8">
            EVOLUTION
          </h3>
          <div className="relative pl-4">
            <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-700"></div>
            {timelineData.map((item, idx) => (
              <div
                key={idx}
                className={`relative pl-8 ${idx !== timelineData.length - 1 ? "mb-8" : ""}`}
              >
                {/* Changed the offset to -left-[6px] to precisely center the dot */}
                <div
                  className={`absolute -left-[6px] top-1.5 w-3 h-3 rounded-full ${item.color} ring-4 ring-[#1c2128]`}
                ></div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-white font-bold">{item.role}</h4>
                  <span className="text-xs text-slate-500">{item.period}</span>
                </div>
                <div className="bg-[#21262d] border border-slate-700/50 p-4 rounded-xl mt-2 relative">
                  <div className="absolute top-4 -left-2 w-4 h-4 bg-[#21262d] border-l border-b border-slate-700/50 transform rotate-45"></div>
                  <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* COLUMN 2: EDUCATION & CERTIFICATIONS */}
        <Card className="col-span-1 flex flex-col space-y-8">
          <div>
            <h3 className="text-sm font-bold text-white uppercase mb-2">
              CAREER BRIDGE SUMMARY
            </h3>
            <hr className="border-slate-700 mb-4" />
            <p className="text-[13px] text-slate-400 leading-relaxed">
              Career guide connects the past IT support role on our action
              overflow, process virotainerments and current Web/Data skills anii
              ennative. Honr, tusos sanntirnative contributing the fast motion
              to current Web/Data skills.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase mb-2">
              EDUCATION
            </h3>
            <hr className="border-slate-700 mb-4" />
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-white font-semibold">
                    Information Technology Programming
                  </p>
                  <p className="text-[11px] text-slate-500">
                    System Technology Institute (STI College)
                  </p>
                </div>
                <span className="text-xs text-slate-400">2016-2019</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-white font-semibold">
                    Web Development Boothcamp
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Uplift Code Camp (2 months intensive course)
                  </p>
                </div>
                <span className="text-xs text-slate-400">2024</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-bold text-white uppercase">
                CERTIFICATIONS
              </h3>
              <a
                href="https://drive.google.com/drive/folders/1SZsIJh3WBEQa035xq84g2dMbw3gKoVc3?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cursor-pointer" title="View Drive Folder">
                  🔗
                </button>
              </a>
            </div>
            <hr className="border-slate-700 mb-4" />

            <div className="grid grid-cols-2 gap-4">
              {badgesData.map((badge) => (
                <div
                  key={badge.id}
                  className={`transition-all ${expandedBadge === badge.id ? "col-span-2" : "col-span-1"}`}
                >
                  <div
                    onClick={() => toggleBadge(badge.id)}
                    className="relative bg-[#21262d] border border-slate-700/50 p-3 rounded-xl flex items-center space-x-3 hover:border-teal-500/50 transition-colors cursor-pointer"
                  >
                    <img
                      src={badge.icon}
                      alt={badge.title}
                      title={badge.title}
                      className={`w-10 h-10 rounded flex items-center justify-center text-xs border ${badge.iconClass}`}
                    />
                    <div>
                      <p className="text-sm text-white font-semibold mb-1">
                        {badge.title}
                      </p>
                      <p className="text-[9px] text-teal-400 flex items-center">
                        View Certificates{" "}
                        <span className="ml-1 text-[8px]">
                          {expandedBadge === badge.id ? "↓" : "↗"}
                        </span>
                      </p>
                    </div>
                    {expandedBadge === badge.id ? (
                      <FaChevronCircleUp className="absolute right-5 text-slate-600" />
                    ) : (
                      <FaChevronCircleDown className="absolute right-5 text-slate-600" />
                    )}
                  </div>
                  {expandedBadge === badge.id && (
                    <div className="mt-3 p-4 bg-[#21262d] border border-slate-700/50 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                      {badge.images.map((img, i) => (
                        <img
                          key={i}
                          src={img.src}
                          alt={img.alt}
                          title={img.alt}
                          className="rounded-lg shadow-md hover:scale-105 transition-transform w-full h-full"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* COLUMN 3: SKILLS & PROJECTS HIGHLIGHTS */}
        <Card className="col-span-1 flex flex-col space-y-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest mb-6">
              HYBRID TOOLKIT
            </h3>
            <div className="space-y-1">
              <ProgressBar label="React" percentage={85} variant="gradient" />
              <ProgressBar label="Node.js" percentage={80} variant="gradient" />
              <ProgressBar label="SQL" percentage={90} variant="gradient" />
              <ProgressBar
                label="Power BI"
                percentage={85}
                variant="gradient"
              />
              <ProgressBar label="Excel" percentage={95} variant="gradient" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-bold text-white uppercase mb-4">
              SELECTED PROJECTS HIGHLIGHTS
            </h3>
            <div className="space-y-4">
              {/* Highlight Project 1 */}
              <div className="bg-[#21262d] border border-slate-700/50 p-4 rounded-xl flex space-x-4 hover:border-slate-500 transition-colors cursor-pointer">
                <div className="w-30 h-auto rounded -mb-2 relative flex flex-col">
                  <ProjectGalleryItem
                    images={[
                      MainPage,
                      CreateRoom,
                      JoinRoom,
                      HostPage,
                      PlayerRoom,
                    ]}
                    projectUrl="https://live-bingo-v2.netlify.app/"
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <h4 className="text-[13px] font-bold text-white mb-1 leading-tight">
                      Live Bingo
                    </h4>
                    <p className="text-[10px] w-[60%] text-slate-400 line-clamp-2">
                      A live multiplayer Bingo game where user can host their
                      own rooms or join others to play. Mark the players cards
                      in real-time.
                    </p>
                  </div>
                  <div className="flex space-x-2 text-xs mt-2">
                    <img
                      src={IconMongoDb}
                      alt="MongoDB"
                      title="MongoDB"
                      className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-blue-400"
                    />
                    <img
                      src={IconExpressJs}
                      alt="Express.js"
                      title="Express.js"
                      className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-blue-400"
                    />
                    <img
                      src={IconReactJs}
                      alt="React"
                      title="React"
                      className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-blue-400"
                    />
                    <img
                      src={IconNodeJs}
                      alt="Node.js"
                      title="Node.js"
                      className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-blue-400"
                    />
                    <img
                      src={IconSocketIO}
                      alt="Socket.IO"
                      title="Socket.IO"
                      className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-blue-400"
                    />
                  </div>
                </div>
              </div>

              {/* Highlight Project 2 */}
              <div className="bg-[#21262d] border border-slate-700/50 p-4 rounded-xl flex space-x-4 hover:border-slate-500 transition-colors cursor-pointer">
                <div className="w-30 h-auto rounded -mb-2 relative flex flex-col">
                  <ProjectGalleryItem
                    images={[
                      MainPage,
                      CreateRoom,
                      JoinRoom,
                      HostPage,
                      PlayerRoom,
                    ]}
                    projectUrl="https://live-bingo-v2.netlify.app/"
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <h4 className="text-[13px] font-bold text-white mb-1 leading-tight">
                      ProShop - Admin Dashboard
                    </h4>
                    <p className="text-[10px] w-[60%] text-slate-400 line-clamp-2">
                      An exclusive administrative gateway for precision
                      inventory management, live order tracking, and
                      comprehensive sales oversight.
                    </p>
                  </div>
                  <div className="flex space-x-2 text-xs mt-2">
                    <img
                      src={IconMongoDb}
                      alt="MongoDB"
                      title="MongoDB"
                      className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-blue-400"
                    />
                    <img
                      src={IconExpressJs}
                      alt="Express.js"
                      title="Express.js"
                      className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-blue-400"
                    />
                    <img
                      src={IconReactJs}
                      alt="React"
                      title="React"
                      className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-blue-400"
                    />
                    <img
                      src={IconNodeJs}
                      alt="Node.js"
                      title="Node.js"
                      className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-blue-400"
                    />
                    <img
                      src={IconSocketIO}
                      alt="Socket.IO"
                      title="Socket.IO"
                      className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-blue-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
