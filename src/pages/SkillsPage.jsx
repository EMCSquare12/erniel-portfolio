import React from "react";
import { Card } from "../components/Card";

export default function SkillsPage() {
  // Reusable Component for the small progress bars
  const ProgressBar = ({ label, percentage, range, colorClass }) => (
    <div className="mb-2">
      <div className="flex justify-between text-[10px] text-slate-300 mb-1">
        <span>{label}</span>
        <span>{range}</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${colorClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );

  // Reusable Component for the floating Skill Nodes
  const SkillNode = ({
    icon,
    title,
    subtitle,
    score,
    positionClasses,
    themeColor,
  }) => (
    <div
      className={`absolute flex items-center flex-col justify-center ${positionClasses} z-20`}
    >
      {/* Icon Box */}
      <div
        className={`relative w-12 h-12 rounded-xl bg-[#161b22] border-2 border-${themeColor}-500/50 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] shadow-${themeColor}-500/20`}
      >
        {icon}
        <span
          className={`absolute -bottom-2 bg-[#161b22] border border-${themeColor}-500 text-[9px] px-1.5 rounded text-white`}
        >
          {score}%
        </span>
      </div>
      {/* Text block */}
      <div className="flex flex-col items-center mt-2">
        <span className="text-white font-bold text-[12px]">{title}</span>
        <span className="text-slate-400 text-[10px]">{subtitle}</span>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      {/* HEADER */}
      <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
        SKILLS COMPASS{" "}
        <span className="text-slate-400 font-light normal-case">
          | Interactive Talent Map
        </span>
      </h2>

      {/* MAIN COMPASS CONTAINER */}
      <Card className="relative w-full h-[700px] bg-[#1c2128] border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
        {/* Radar Background Circles */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full border border-slate-600 border-dashed absolute"></div>
          <div className="w-[600px] h-[600px] rounded-full border border-slate-500 absolute"></div>
          <div className="w-[400px] h-[400px] rounded-full border border-slate-400 absolute"></div>
          {/* Vertical Divider */}
          <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent absolute"></div>
        </div>

        {/* TOP LEFT: MERN Proficiency Card */}
        <div className="absolute top-16 left-6 w-64 bg-[#21262d]/80 backdrop-blur-sm border border-slate-600 p-4 rounded-xl z-30">
          <h3 className="text-white font-bold text-sm mb-3">
            MERN Proficiency
          </h3>
          <ProgressBar
            label="React"
            range="90-10"
            percentage={90}
            colorClass="bg-blue-500"
          />
          <ProgressBar
            label="Node.js"
            range="10-18"
            percentage={75}
            colorClass="bg-blue-400"
          />
          <ProgressBar
            label="Express.js"
            range="6-15"
            percentage={65}
            colorClass="bg-blue-400"
          />
          <ProgressBar
            label="MongoDB"
            range="0-8"
            percentage={50}
            colorClass="bg-blue-300"
          />
        </div>

        {/* TOP RIGHT: Analytic Tool Proficiency Card */}
        <div className="absolute top-16 right-6 w-64 bg-[#21262d]/80 backdrop-blur-sm border border-slate-600 p-4 rounded-xl z-30">
          <h3 className="text-white font-bold text-sm mb-3">
            Analytic Tool Proficiency
          </h3>
          <ProgressBar
            label="Excel"
            range=""
            percentage={85}
            colorClass="bg-teal-400"
          />
          <ProgressBar
            label="SQL"
            range=""
            percentage={80}
            colorClass="bg-teal-500"
          />
          <ProgressBar
            label="Power BI"
            range=""
            percentage={75}
            colorClass="bg-teal-400"
          />
          <ProgressBar
            label="Tableau"
            range=""
            percentage={70}
            colorClass="bg-teal-300"
          />
        </div>

        {/* SECTION LABELS */}
        <div className="absolute top-6 left-8 text-xl font-bold text-blue-400/80 tracking-widest z-10">
          WEB DEVELOPMENT
        </div>
        <div className="absolute top-6 right-8 text-xl font-bold text-teal-400/80 tracking-widest z-10">
          DATA ANALYSIS
        </div>

        {/* BOTTOM WATERMARKS */}
        <div className="absolute bottom-6 left-8 text-blue-500/50 font-bold tracking-widest">
          WEB DEVELOPMENT
        </div>
        <div className="absolute bottom-6 right-8 text-teal-500/50 font-bold tracking-widest">
          DATA ANALYSIS
        </div>

        {/* CENTER BOX: MERN-Data Integration */}
        <div className="absolute z-30 flex flex-col items-center">
          <div className="bg-[#21262d]/90 backdrop-blur-md border border-slate-600 rounded-xl p-4 w-80 text-center shadow-2xl">
            <h3 className="text-white font-bold mb-3">MERN-Data Integration</h3>
            <div className="flex items-center justify-between">
              <div className="text-center w-1/2 px-2 border-r border-slate-600">
                <p className="text-blue-400 text-xs font-bold mb-1">
                  MERN Applications
                </p>
                <p className="text-[9px] text-slate-400">
                  Embedded BI in React apps
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 text-2xl">
                🌉
              </div>
              <div className="text-center w-1/2 px-2">
                <p className="text-teal-400 text-xs font-bold mb-1">
                  Live Data Feeds & Visualizations
                </p>
                <p className="text-[9px] text-slate-400">
                  Real-time SQL Integration
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mt-4 px-3 py-1 bg-slate-800/50 border border-slate-600 rounded-full text-[10px] text-teal-400">
            Validated: Oct 2024
          </div> */}
        </div>

        {/* BOTTOM BOX: Career Bridge */}
        <div className="absolute bottom-12 z-30 bg-[#21262d]/90 backdrop-blur-md border border-slate-600 rounded-xl p-4 w-72 shadow-2xl">
          <h3 className="text-white font-bold text-sm text-center mb-3">
            Career Bridge
          </h3>
          <div className="flex items-center justify-between text-slate-400">
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1 text-blue-400">👨‍💼</span>
              <span className="text-[10px]">Admin/IT Support</span>
            </div>
            <span className="text-xl text-teal-400">🌉&rarr;</span>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1 text-teal-400">💼</span>
              <span className="text-[10px]">New careers</span>
            </div>
          </div>
        </div>

        {/* LEFT SIDE SKILL NODES (Web Dev) */}
        <SkillNode
          icon="⚛️"
          title="React"
          subtitle="MERN App/Web"
          score={90}
          themeColor="blue"
          positionClasses="top-[25%] left-[32%]"
        />
        <SkillNode
          icon="JS"
          title="JavaScript"
          subtitle="End-to-End Logic"
          score={90}
          themeColor="blue"
          positionClasses="top-[45%] left-[13%]"
        />
        <SkillNode
          icon="EX"
          title="Express.js"
          subtitle="API Development"
          score={90}
          themeColor="blue"
          positionClasses="bottom-[40%] left-[24%]"
        />
        <SkillNode
          icon="🍃"
          title="MongoDB"
          subtitle="Performance Tuning"
          score={90}
          themeColor="blue"
          positionClasses="bottom-[20%] left-[18%] "
        />

        {/* RIGHT SIDE SKILL NODES (Data Analysis) */}
        <SkillNode
          icon="📊"
          title="Excel"
          subtitle="Data Cleaning & ETL"
          score={85}
          themeColor="teal"
          positionClasses="top-[25%] right-[32%]"
        />
        <SkillNode
          icon="🔄"
          title="Data Cleaning"
          subtitle="(Excel/PQ)"
          score={85}
          themeColor="teal"
          positionClasses="top-[45%] right-[13%]"
        />
        <SkillNode
          icon="🗄️"
          title="SQL"
          subtitle="Complex SQL Queries"
          score={85}
          themeColor="teal"
          positionClasses="bottom-[40%] right-[23%]"
        />
        <SkillNode
          icon="📈"
          title="Power BI"
          subtitle="Power BI Dashboarding"
          score={85}
          themeColor="teal"
          positionClasses="bottom-[20%] right-[17%]"
        />
      </Card>
    </div>
  );
}
