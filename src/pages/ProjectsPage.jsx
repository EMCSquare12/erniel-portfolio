import React from "react";
import {
  IconReactJs as ReactJs,
  IconNodeJs as NodeJs,
  IconMongoDb as MongoDb,
  IconExpressJs as ExpressJs,
} from "../assets";
import { ProjectGalleryItem } from "../components/ProjectGalleryItem";

export default function ProjectsPage() {
  // Reusable Card Component matching the dark theme
  const Card = ({ children, className = "" }) => (
    <div
      className={`bg-[#1c2128] border border-slate-700/50 rounded-2xl p-6 shadow-xl ${className}`}
    >
      {children}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* HEADER */}
      <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
        FEATURED PORTFOLIO{" "}
        <span className="text-slate-400 font-light normal-case">
          | MERN Stack & Data Analytics
        </span>
      </h2>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN: Featured Hybrid Project */}
        <Card className="col-span-1 flex flex-col">
          <h3 className="font-bold text-white mb-4 uppercase text-sm">
            Featured Project: ProShop
          </h3>

          {/* Main Project Image Placeholder */}
          <div className="bg-slate-800 h-64 rounded-lg mb-6 w-full flex items-center justify-center border border-slate-700">
            [Main Dashboard Image]
          </div>

          {/* Tech Stack Icons */}
          <div className="flex space-x-2 mb-4 justify-center">
            {[MongoDb, ExpressJs, ReactJs, NodeJs].map((icon, idx) => (
              <div
                key={idx}
                className="w-8 h-8 p-1 rounded-full bg-slate-700 flex items-center justify-center"
              >
                <img src={icon}></img>
              </div>
            ))}
          </div>

          {/* Project Description */}
          <h4 className="font-bold text-white mb-3 text-sm">
            PROJECT DESCRIPTION
          </h4>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">✓</span>
              <div>
                <p className="text-sm font-semibold text-white">
                  End-to-End MERN Application with Real-time Data Pipeline
                </p>
                <p className="text-xs text-slate-400">
                  End-to-end MERN application with real-time data pipeline.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">✓</span>
              <div>
                <p className="text-sm font-semibold text-white">
                  SQL Database Integration for Structured Metrics
                </p>
                <p className="text-xs text-slate-400">
                  Integration and access integration for structured metrics.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">✓</span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Embedded Interactive Power BI Reports via API
                </p>
                <p className="text-xs text-slate-400">
                  Embedded interactive power BI cluster reports via API.
                </p>
              </div>
            </li>
          </ul>

          {/* Data Flow Diagram Placeholder */}
          {/* <div className="bg-white rounded-lg p-4 mt-auto">
            <p className="text-center text-black font-semibold text-xs mb-2">
              Data Flow
            </p>
            <div className="h-16 flex items-center justify-between text-black text-xs">
              [API] -{">"} [SQL] -{">"} [Power BI]
            </div>
          </div> */}
        </Card>

        {/* RIGHT AREA: Spans 2 columns */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* TOP RIGHT: Data Science Project (Spans 2 columns of its parent grid) */}
          <Card className="lg:col-span-2">
            <h3 className="font-bold text-white mb-4 uppercase text-sm">
              Data Science Project: Customer Segmentation
            </h3>

            {/* 2 Dashboards Side-by-Side */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-800 h-40 rounded-lg border border-slate-700 flex items-center justify-center">
                [Map Dashboard]
              </div>
              <div className="bg-slate-800 h-40 rounded-lg border border-slate-700 flex items-center justify-center">
                [Bar Chart Dashboard]
              </div>
            </div>

            <h4 className="font-bold text-white text-sm mb-1">
              Tableau dashboard
            </h4>
            <p className="text-sm text-slate-400 flex items-center justify-between">
              <span>
                MERN-based data capture -&gt; SQL analysis -&gt; Tableau
                visualization.
              </span>
              <span className="flex space-x-2">
                {/* Mini icons */}
                <span className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-xs">
                  📊
                </span>
                <span className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-xs">
                  SQL
                </span>
              </span>
            </p>
          </Card>

          {/* BOTTOM MIDDLE: IT Support Automation */}
          <div className="space-y-6">
            <Card>
              <h3 className="font-bold text-white mb-2 uppercase text-sm">
                IT Support Automation
              </h3>
              <p className="text-sm text-slate-400 mb-2">
                Referencing the previous career
              </p>
              <p className="text-sm text-slate-400">
                MERN tool to automate admin tasks, linked to data reports.
              </p>
            </Card>
            <Card className="p-0 overflow-hidden border-none">
              <div className="bg-slate-800 h-48 w-full border border-slate-700 rounded-2xl flex items-center justify-center">
                [IT Support Dashboard Image]
              </div>
            </Card>
          </div>

          {/* BOTTOM RIGHT: Project Gallery (ALL) */}
          <Card>
            <h3 className="font-bold text-white mb-4 uppercase text-sm">
              Project Gallery (All)
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Gallery Item 1 */}
              <div>
                <div className="bg-slate-800 h-24 rounded-lg mb-2 border border-slate-700 flex items-center justify-center">
                  [App]
                </div>
                <p className="text-xs text-white">E-Commerce App</p>
                <p className="text-[10px] text-slate-400 mb-1">(React/Node)</p>
                <div className="flex space-x-1">
                  <span className="w-4 h-4 rounded bg-slate-700"></span>
                  <span className="w-4 h-4 rounded bg-slate-700"></span>
                </div>
              </div>

              {/* Gallery Item 2 */}
              <div>
                <div className="bg-slate-800 h-24 rounded-lg mb-2 border border-slate-700 flex items-center justify-center">
                  [Report]
                </div>
                <p className="text-xs text-white">HR Data Reporting</p>
                <p className="text-[10px] text-slate-400 mb-1">
                  (Excel/VBA/SQL)
                </p>
                <div className="flex space-x-1">
                  <span className="w-4 h-4 rounded bg-slate-700"></span>
                  <span className="w-4 h-4 rounded bg-slate-700"></span>
                </div>
              </div>

              {/* Gallery Item 3 */}
              <div>
                <div className="bg-slate-800 h-24 rounded-lg mb-2 border border-slate-700 flex items-center justify-center">
                  [Dashboard]
                </div>
                <p className="text-xs text-white">Supply Chain Dashboard</p>
                <p className="text-[10px] text-slate-400 mb-1">
                  (Power Query/Power BI)
                </p>
                <div className="flex space-x-1">
                  <span className="w-4 h-4 rounded bg-slate-700"></span>
                  <span className="w-4 h-4 rounded bg-slate-700"></span>
                </div>
              </div>

              {/* Gallery Item 4 */}
              <div>
                <div className="bg-slate-800 h-24 rounded-lg mb-2 border border-slate-700 flex items-center justify-center">
                  [Scraper]
                </div>
                <p className="text-xs text-white">Web Scraper & Data Cleaner</p>
                <p className="text-[10px] text-slate-400 mb-1">
                  (Python/Node/MERN)
                </p>
                <div className="flex space-x-1">
                  <span className="w-4 h-4 rounded bg-slate-700"></span>
                  <span className="w-4 h-4 rounded bg-slate-700"></span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
