import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { Card } from "../components/ui/Card";
import { ProgressBar } from "../components/ui/ProgressBar";
import { ProjectGalleryItem } from "../components/ProjectGalleryItem";

import { timelineData, badgesData } from "../data/resumeData";

import {
  Hero,
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
    <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 pb-12">
      {/* HEADER CARD */}
      <Card className="bg-[#1c2128]/80 backdrop-blur-md border border-slate-700/50 rounded-2xl flex flex-col md:flex-row gap-6 shadow-xl p-4 sm:p-6 items-center md:items-stretch">
        <div className="shrink-0 flex items-center justify-center">
          <img
            src={Hero}
            alt="Erniel Caalim"
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl border border-slate-700/50 shadow-sm object-cover bg-[#21262d]"
          />
        </div>

        <div className="flex-1 flex flex-col min-w-0 w-full">
          <div className="bg-[#161b22]/50 border border-slate-700/60 p-4 sm:p-5 rounded-xl shadow-inner max-h-48 w-full mb-4 shrink-0 overflow-y-auto custom-scrollbar">
            <p className="text-[10px] sm:text-[11px] text-emerald-400 font-bold uppercase tracking-widest text-left mb-2">
              Professional Summary
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              A dynamic professional bridging the gap between IT operations,
              data analysis, and modern web development. With a strong
              foundation in administrative support and data encoding, I have
              transitioned into full-stack development (MERN) and business
              intelligence (Power BI, SQL). I specialize in building data-driven
              applications that streamline workflows and deliver actionable
              insights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full mt-auto">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <Link
                to="/"
                className="text-slate-400 hover:text-white transition-colors text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap"
              >
                Landing portfolio
              </Link>
              <Link
                to="/resume"
                className="text-teal-400 hover:text-teal-300 transition-colors text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap"
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className="text-slate-400 hover:text-white transition-colors text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              <a
                href="https://drive.google.com/drive/folders/1SZsIJh3WBEQa035xq84g2dMbw3gKoVc3?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-[#161b22] border border-slate-600 text-white rounded-lg text-xs font-bold hover:bg-slate-700 transition-all"
              >
                Download Resume
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-[#161b22] border border-slate-600 text-white rounded-lg text-xs font-bold hover:bg-slate-700 transition-all"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8">
        {/* LEFT COLUMN */}
        <div className="xl:col-span-7 space-y-6 sm:space-y-8">
          <Card>
            <h3 className="text-base sm:text-lg font-bold text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              Career Evolution
            </h3>
            <div className="relative pl-5 sm:pl-6 border-l-2 border-slate-700/50 space-y-8 sm:space-y-10">
              {timelineData.map((item, idx) => (
                <div key={idx} className="relative">
                  <div
                    className={`absolute -left-[27px] sm:-left-[31px] top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${item.color} ring-4 ring-[#1c2128] shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                  ></div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h4 className="text-white font-bold text-sm sm:text-base">
                      {item.role}
                    </h4>
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-500 bg-slate-800/50 px-2.5 py-0.5 sm:py-1 rounded-full border border-slate-700/50 mt-1 sm:mt-0 inline-block w-max">
                      {item.period}
                    </span>
                  </div>

                  <div className="bg-[#161b22]/50 border border-slate-700/50 p-3.5 sm:p-5 rounded-xl">
                    <ul className="text-xs sm:text-sm text-slate-400 space-y-1.5 list-none">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2">
                          <span className="text-teal-500/50 mt-0.5">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              Education
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-[#161b22]/50 p-4 rounded-xl border border-slate-700/50">
                <div>
                  <p className="text-sm sm:text-base text-white font-bold">
                    Web Development Bootcamp
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Uplift Code Camp (Intensive Course)
                  </p>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 bg-slate-800 px-3 py-1 rounded-full mt-2 sm:mt-0 w-max">
                  2024
                </span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-[#161b22]/50 p-4 rounded-xl border border-slate-700/50">
                <div>
                  <p className="text-sm sm:text-base text-white font-bold">
                    Information Technology Programming
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    System Technology Institute (STI College)
                  </p>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 bg-slate-800 px-3 py-1 rounded-full mt-2 sm:mt-0 w-max">
                  2016 - 2019
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="xl:col-span-5 space-y-6 sm:space-y-8">
          <Card>
            <h3 className="text-base sm:text-lg font-bold text-blue-400 uppercase tracking-widest mb-4 sm:mb-6 flex items-center gap-2">
              Core Toolkit
            </h3>
            <div className="space-y-2">
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
          </Card>

          <Card className="flex flex-col">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-widest flex items-center gap-2">
                Certifications
              </h3>
              <a
                href="https://drive.google.com/drive/folders/1SZsIJh3WBEQa035xq84g2dMbw3gKoVc3?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-teal-400 hover:text-teal-300 flex items-center gap-1 bg-teal-500/10 px-2.5 py-1 rounded-lg transition-colors"
              >
                Drive <FaExternalLinkAlt size={10} />
              </a>
            </div>

            <div className="flex flex-col gap-3.5">
              {badgesData.map((badge) => {
                const isExpanded = expandedBadge === badge.id;
                return (
                  <div key={badge.id} className="flex flex-col">
                    <div
                      onClick={() => toggleBadge(badge.id)}
                      className={`relative bg-[#161b22]/80 border ${
                        isExpanded
                          ? "border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.1)]"
                          : "border-slate-700/50"
                      } p-3.5 sm:p-4 rounded-xl flex items-center space-x-3.5 hover:border-teal-500/50 transition-all cursor-pointer group`}
                    >
                      <img
                        src={badge.icon}
                        alt={badge.title}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center p-1 border shadow-inner shrink-0 ${badge.iconClass}`}
                      />
                      <div className="flex-1 pr-6">
                        <p className="text-xs sm:text-sm text-white font-bold leading-tight group-hover:text-teal-300 transition-colors">
                          {badge.title}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">
                          {badge.images.length} Certificates
                        </p>
                      </div>
                      <div className="absolute right-3.5 text-slate-500 group-hover:text-teal-400 transition-colors">
                        {isExpanded ? (
                          <FaChevronCircleUp size={16} />
                        ) : (
                          <FaChevronCircleDown size={16} />
                        )}
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded
                          ? "max-h-[800px] mt-3 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-3 bg-[#161b22] border border-slate-700/50 rounded-xl grid grid-cols-2 gap-2.5">
                        {badge.images.map((img, i) => (
                          <div
                            key={i}
                            className="relative group/img aspect-[4/3] rounded-lg overflow-hidden border border-slate-600"
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              title={img.alt}
                              className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card>
            <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-widest mb-4 sm:mb-6 flex items-center gap-2">
              Top Projects
            </h3>

            <div className="space-y-4">
              <div className="bg-[#161b22]/80 border border-slate-700/50 p-3.5 sm:p-4 rounded-xl flex flex-col sm:flex-row gap-4 hover:border-emerald-500/30 transition-colors">
                <div className="w-full sm:w-32 shrink-0">
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
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                      Live Bingo
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-3">
                      A live multiplayer Bingo game utilizing WebSockets for
                      real-time synchronization between hosts and players.
                    </p>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {[IconReactJs, IconNodeJs, IconSocketIO].map((Icon, i) => (
                      <img
                        key={i}
                        src={Icon}
                        alt="Tech Icon"
                        className="w-4 h-4 sm:w-5 sm:h-5 opacity-70"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
