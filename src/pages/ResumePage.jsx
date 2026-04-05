import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";

// Certificate Image Imports
import WebDev from "../assets/Certificates/WebDev.jpg";
import WebDevLite from "../assets/Certificates/WebDevLite.png";
import NodeJs from "../assets/Certificates/NodeJs.jpg";
import ReactCert from "../assets/Certificates/React.jpg";
import DataAnalysis from "../assets/Certificates/DataAnalysis.jpg";
import Excel from "../assets/Certificates/Excel.jpg";
import PowerBi from "../assets/Certificates/PowerBi.jpg";
import SQL1 from "../assets/Certificates/SQL1.jpg";
import SQL2 from "../assets/Certificates/SQL2.jpg";

export default function ResumePage() {
  const [expandedBadge, setExpandedBadge] = useState(null);

  const toggleBadge = (badge) => {
    setExpandedBadge((prev) => (prev === badge ? null : badge));
  };

  // Reusable Progress Bar for Skills
  const ProgressBar = ({ label, percentage }) => (
    <div className="flex items-center space-x-4 mb-4">
      <span className="text-sm text-slate-300 w-16">{label}</span>
      <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm text-slate-300 w-8 text-right">
        {percentage}%
      </span>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      {/* TOP ACTION BAR */}
      <Card className="bg-[#1c2128] border border-slate-700/50 p-4! rounded-2xl flex flex-col md:flex-row justify-between items-center shadow-xl gap-4">
        {/* Left Links */}
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

        {/* Right Action Buttons */}
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

      {/* MAIN 3-COLUMN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* COLUMN 1: EVOLUTION (Timeline) */}
        <Card className="col-span-1">
          <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest mb-8">
            EVOLUTION
          </h3>

          {/* Vertical Timeline Container */}
          <div className="relative pl-4">
            {/* The vertical line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-700"></div>

            {/* Timeline Item 1 */}
            <div className="relative pl-8 mb-8">
              <div className="absolute -left-[1.5px] top-1.5 w-3 h-3 rounded-full bg-blue-400 ring-4 ring-[#1c2128]"></div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-white font-bold">HOUSEKEEPING</h4>
                <span className="text-xs text-slate-500">2016-2018</span>
              </div>
              <div className="bg-[#21262d] border border-slate-700/50 p-4 rounded-xl mt-2 relative">
                {/* Speech bubble arrow pointer */}
                <div className="absolute top-4 -left-2 w-4 h-4 bg-[#21262d] border-l border-b border-slate-700/50 transform rotate-45"></div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-3">
                  <li>Maintained cleanliness across all assigned areas.</li>
                  <li>
                    Ensured resident comfort by upholding high standards of room
                    upkeep and sanitation.
                  </li>
                  <li>
                    Followed safety protocols to consistently meet hygiene and
                    organization requirements.
                  </li>
                </ul>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-8 mb-8">
              <div className="absolute -left-[1.5px] top-1.5 w-3 h-3 rounded-full bg-teal-400 ring-4 ring-[#1c2128]"></div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-white font-bold">Data Encoder</h4>
                <span className="text-xs text-slate-500">2019-2020</span>
              </div>
              <div className="bg-[#21262d] border border-slate-700/50 p-4 rounded-xl mt-2 relative">
                <div className="absolute top-4 -left-2 w-4 h-4 bg-[#21262d] border-l border-b border-slate-700/50 transform rotate-45"></div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-3">
                  <li>Encoded signed delivery receipts into the system.</li>
                  <li>
                    Processed high volumes of delivery data for messengers and
                    their respective consignees
                  </li>
                  <li>
                    Maintained precise records of telecommunications deliveries
                  </li>
                </ul>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-8 mb-8">
              <div className="absolute -left-[1.5px] top-1.5 w-3 h-3 rounded-full bg-slate-500 ring-4 ring-[#1c2128]"></div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-white font-bold">Admin Clerk</h4>
                <span className="text-xs text-slate-500">2021-2022</span>
              </div>
              <div className="bg-[#21262d] border border-slate-700/50 p-4 rounded-xl mt-2 relative">
                <div className="absolute top-4 -left-2 w-4 h-4 bg-[#21262d] border-l border-b border-slate-700/50 transform rotate-45"></div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-3">
                  <li>
                    Assisted the Store Manager in daily operations and general
                    store management.
                  </li>
                  <li>
                    Handled incoming deliveries and verified inventory accuracy.
                  </li>
                  <li>
                    Arranged store displays. Optimize product visibility and
                    visual appeal.
                  </li>
                </ul>
              </div>
            </div>

            {/* Timeline Item 4 (Bottom) */}
            <div className="relative pl-8">
              <div className="absolute -left-[1.5px] top-1.5 w-3 h-3 rounded-full bg-slate-600 ring-4 ring-[#1c2128]"></div>
              <div className="flex justify-between items-center">
                <h4 className="text-white font-bold">Admin and IT Support</h4>
                <span className="text-xs text-slate-500">Current</span>
              </div>
              <div className="bg-[#21262d] border border-slate-700/50 p-4 rounded-xl mt-2 relative">
                <div className="absolute top-4 -left-2 w-4 h-4 bg-[#21262d] border-l border-b border-slate-700/50 transform rotate-45"></div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-3">
                  <li>
                    Assisted the Store Manager in daily operations and general
                    store management.
                  </li>
                  <li>
                    Handled incoming deliveries and verified inventory accuracy.
                  </li>
                  <li>
                    Arranged store displays. Optimize product visibility and
                    visual appeal.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* COLUMN 2: SUMMARY, EDUCATION, CERTS */}
        <Card className="col-span-1 flex flex-col space-y-8">
          {/* Section 1: Summary */}
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

          {/* Section 2: Education */}
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

          {/* Section 3: Certifications */}
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
                <button className="  cursor-pointer">🔗</button>
              </a>
            </div>
            <hr className="border-slate-700 mb-4" />

            <div className="grid grid-cols-2 gap-4">
              {/* Badge 1 */}
              <div
                className={`transition-all ${expandedBadge === "web" ? "col-span-2" : "col-span-1"}`}
              >
                <div
                  onClick={() => toggleBadge("web")}
                  className="relative bg-[#21262d] border border-slate-700/50 p-3 rounded-xl flex items-center space-x-3 hover:border-teal-500/50 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-xs text-green-500 border border-slate-600">
                    MERN
                  </div>
                  <div>
                    <p className="text-sm text-white font-semibold mb-1">
                      Web Development Master Class
                    </p>
                    <p className="text-[9px] text-teal-400 flex items-center">
                      View Certificates{" "}
                      <span className="ml-1 text-[8px]">
                        {expandedBadge === "web" ? "↓" : "↗"}
                      </span>
                    </p>
                  </div>
                  {expandedBadge === "web" ? (
                    <FaChevronCircleUp className="absolute right-5 text-slate-600" />
                  ) : (
                    <FaChevronCircleDown className="absolute right-5 text-slate-600" />
                  )}
                </div>

                {/* Dropdown Card for Badge 1 */}
                {expandedBadge === "web" && (
                  <div className="mt-3 p-4 bg-[#21262d] border border-slate-700/50 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                    <img
                      src={WebDev}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform w-full h-full"
                      alt="Web Dev Bootcamp"
                    />
                    <img
                      src={WebDevLite}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform w-full h-full"
                      alt="Web Dev Lite"
                    />
                    <img
                      src={NodeJs}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform w-full h-full"
                      alt="NodeJS Complete Guide"
                    />
                    <img
                      src={ReactCert}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform w-full h-full"
                      alt="React Complete Guide"
                    />
                  </div>
                )}
              </div>

              {/* Badge 2 */}
              <div
                className={`transition-all ${expandedBadge === "data" ? "col-span-2" : "col-span-1"}`}
              >
                <div
                  onClick={() => toggleBadge("data")}
                  className="relative bg-[#21262d] border border-slate-700/50 p-3 rounded-xl flex items-center space-x-3 hover:border-teal-500/50 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 bg-yellow-600/20 rounded flex items-center justify-center text-lg text-yellow-500 border border-yellow-600/30">
                    📊
                  </div>
                  <div>
                    <p className="text-sm text-white font-semibold mb-1">
                      Data Analyst, Excel, Power BI Expert
                    </p>
                    <p className="text-[9px] text-teal-400 flex items-center">
                      View Certificates{" "}
                      <span className="ml-1 text-[8px]">
                        {expandedBadge === "data" ? "↓" : "↗"}
                      </span>
                    </p>
                  </div>
                  {expandedBadge === "data" ? (
                    <FaChevronCircleUp className="absolute right-5 text-slate-600" />
                  ) : (
                    <FaChevronCircleDown className="absolute right-5 text-slate-600" />
                  )}{" "}
                </div>

                {/* Dropdown Card for Badge 2 */}
                {expandedBadge === "data" && (
                  <div className="mt-3 p-4 bg-[#21262d] border border-slate-700/50 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                    <img
                      src={DataAnalysis}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform w-full h-full"
                      alt="Data Analysis"
                    />
                    <img
                      src={Excel}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform w-full h-full"
                      alt="Excel Expert"
                    />
                    <img
                      src={PowerBi}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform w-full h-full"
                      alt="Power BI Expert"
                    />
                  </div>
                )}
              </div>

              {/* Badge 3 */}
              <div
                className={`transition-all ${expandedBadge === "sql" ? "col-span-2" : "col-span-1"}`}
              >
                <div
                  onClick={() => toggleBadge("sql")}
                  className="relative bg-[#21262d] border border-slate-700/50 p-3 rounded-xl flex items-center space-x-3 hover:border-teal-500/50 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 bg-blue-600/20 rounded flex items-center justify-center text-lg text-blue-500 border border-blue-600/30">
                    🎖️
                  </div>
                  <div>
                    <p className="text-sm text-white font-semibold mb-1">
                      Database (SQL) Proficiency
                    </p>
                    <p className="text-[9px] text-teal-400 flex items-center">
                      View Certificates{" "}
                      <span className="ml-1 text-[8px]">
                        {expandedBadge === "sql" ? "↓" : "↗"}
                      </span>
                    </p>
                  </div>
                  {expandedBadge === "sql" ? (
                    <FaChevronCircleUp className="absolute right-5 text-slate-600" />
                  ) : (
                    <FaChevronCircleDown className="absolute right-5 text-slate-600" />
                  )}{" "}
                </div>

                {/* Dropdown Card for Badge 3 */}
                {expandedBadge === "sql" && (
                  <div className="mt-3 p-4 bg-[#21262d] border border-slate-700/50 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                    <img
                      src={SQL1}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform w-full h-full"
                      alt="SQL Certificate 1"
                    />
                    <img
                      src={SQL2}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform w-full h-full"
                      alt="SQL Certificate 2"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* COLUMN 3: SKILLS & PROJECTS */}
        <Card className="col-span-1 flex flex-col space-y-8">
          {/* Section 1: Toolkit */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 uppercase tracking-widest mb-6">
              HYBRID TOOLKIT
            </h3>
            <div className="space-y-1">
              <ProgressBar label="React" percentage={85} />
              <ProgressBar label="Node.js" percentage={80} />
              <ProgressBar label="SQL" percentage={90} />
              <ProgressBar label="Power BI" percentage={85} />
              <ProgressBar label="Excel" percentage={95} />
            </div>
          </div>

          {/* Section 2: Projects Highlights */}
          <div className="flex-1">
            <h3 className="text-sm font-bold text-white uppercase mb-4">
              SELECTED PROJECTS HIGHLIGHTS
            </h3>
            <div className="space-y-4">
              {/* Project Card 1 */}
              <div className="bg-[#21262d] border border-slate-700/50 p-4 rounded-xl flex space-x-4 hover:border-slate-500 transition-colors cursor-pointer">
                <div className="w-24 h-20 bg-slate-100 rounded border border-slate-300 flex-shrink-0 relative overflow-hidden flex flex-col">
                  {/* Fake UI thumbnail */}
                  <div className="h-4 bg-slate-800 w-full flex items-center px-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-1 p-1">
                    <div className="bg-slate-300 rounded-sm"></div>
                    <div className="bg-slate-300 rounded-sm"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-[13px] font-bold text-white mb-1 leading-tight">
                      E-Commerce Analytics Dashboard
                    </h4>
                    <p className="text-[10px] text-slate-400 line-clamp-2">
                      E-Commerce Analytics Dashboard and sloppied analytics
                      economis-tin...
                    </p>
                  </div>
                  <div className="flex space-x-2 text-xs mt-2">
                    <span className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-blue-400">
                      ⚛️
                    </span>
                    <span className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-yellow-400">
                      JS
                    </span>
                    <span className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-green-400">
                      🍃
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-[#21262d] border border-slate-700/50 p-4 rounded-xl flex space-x-4 hover:border-slate-500 transition-colors cursor-pointer">
                <div className="w-24 h-20 bg-slate-100 rounded border border-slate-300 flex-shrink-0 relative overflow-hidden flex flex-col">
                  {/* Fake UI thumbnail */}
                  <div className="h-4 bg-slate-800 w-full flex items-center px-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  </div>
                  <div className="flex-1 p-1 flex flex-col space-y-1">
                    <div className="h-2 bg-slate-300 rounded-sm w-3/4"></div>
                    <div className="h-2 bg-slate-300 rounded-sm w-full"></div>
                    <div className="h-2 bg-slate-300 rounded-sm w-5/6"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-[13px] font-bold text-white mb-1 leading-tight">
                      IT Support Automation Tool
                    </h4>
                    <p className="text-[10px] text-slate-400 line-clamp-2">
                      IT Support Automation Tool and aremplowataed and the
                      preomeecess...
                    </p>
                  </div>
                  <div className="flex space-x-2 text-xs mt-2">
                    <span className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-yellow-400">
                      JS
                    </span>
                    <span className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-blue-400">
                      &lt;/&gt;
                    </span>
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
