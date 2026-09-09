import React from "react";
import { Card } from "../components/ui/Card";
import { FaNetworkWired, FaTools, FaServer, FaShieldAlt } from "react-icons/fa";

import {
  IconAxios as Axios,
  IconGoogleSheets as GoogleScript,
  IconMongoose as Mongoose,
  IconReactRouter as ReactRouter,
  IconSocketIO as SocketIO,
  IconTailwind as Tailwind,
  IconRedux as Redux,
  IconGithub as Github,
  IconGitlab as Gitlab,
  IconJira as Jira,
  IconBootstrap as Bootstrap,
  IconReactJs as ReactIcon,
  IconNodeJs as NodeIcon,
  IconExpressJs as ExpressIcon,
  IconMongoDb as MongoIcon,
  IconSQL as SqlIcon,
  IconExcel as ExcelIcon,
  IconPowerBi as PowerBiIcon,
  IconTableau as TableauIcon,
} from "../assets";

import { mernSkills, dataSkills } from "../data/skillsData";

export default function SkillsPage() {
  // 1. Web Dev Skills List
  const webDevItems = [
    {
      ...mernSkills[0],
      icon: ReactIcon,
      subtitle: "MERN App/Web",
      score: "90%",
    },
    {
      ...mernSkills[1],
      icon: NodeIcon,
      subtitle: "End-to-End Logic",
      score: "90%",
    },
    {
      ...mernSkills[2],
      icon: ExpressIcon,
      subtitle: "API Development",
      score: "90%",
    },
    {
      ...mernSkills[3],
      icon: MongoIcon,
      subtitle: "NoSQL Database",
      score: "85%",
    },
  ];

  // 2. Data Analytics Skills List
  const dataAnalystItems = [
    {
      ...dataSkills[0],
      icon: ExcelIcon,
      subtitle: "Formulas & Pivots",
      score: "85%",
    },
    {
      ...dataSkills[1],
      icon: SqlIcon,
      subtitle: "Complex Queries",
      score: "85%",
    },
    {
      ...dataSkills[2],
      icon: PowerBiIcon,
      subtitle: "Dashboards & DAX",
      score: "85%",
    },
    {
      ...dataSkills[3],
      icon: TableauIcon,
      subtitle: "Data Viz & Stories",
      score: "80%",
    },
  ];

  // 3. IT Specialist Skills List
  const itSpecialistItems = [
    {
      label: "System Troubleshooting",
      percentage: 90,
      colorClass: "bg-[#eab308]",
      subtitle: "Hardware & Software Diagnostics",
      score: "90%",
      reactIcon: <FaTools className="w-5 h-5 text-amber-400" />,
    },
    {
      label: "Networking & Infrastructure",
      percentage: 85,
      colorClass: "bg-[#eab308]",
      subtitle: "TCP/IP, DNS, DHCP, Routers/Switches",
      score: "85%",
      reactIcon: <FaNetworkWired className="w-5 h-5 text-amber-400" />,
    },
    {
      label: "System Administration",
      percentage: 85,
      colorClass: "bg-[#eab308]",
      subtitle: "Active Directory, Windows/Linux",
      score: "85%",
      reactIcon: <FaServer className="w-5 h-5 text-amber-400" />,
    },
    {
      label: "Network Security & VPNs",
      percentage: 80,
      colorClass: "bg-[#eab308]",
      subtitle: "Firewalls, Endpoint Security & Access Control",
      score: "80%",
      reactIcon: <FaShieldAlt className="w-5 h-5 text-amber-400" />,
    },
  ];

  // Skill Row Component
  const SkillRow = ({
    icon,
    reactIcon,
    label,
    percentage,
    colorClass,
    subtitle,
    score,
  }) => (
    <div className="flex items-center gap-3.5 py-3 border-b border-slate-700/50 last:border-b-0">
      {/* Icon in Front */}
      <div className="shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#161b22] border border-slate-700 flex items-center justify-center p-2 shadow-inner">
          {reactIcon ? (
            reactIcon
          ) : (
            <img
              src={icon}
              alt={label}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>

      {/* Progress Bar & Text Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-1">
          <span className="font-bold text-white text-xs sm:text-sm tracking-wide">
            {label}
          </span>
          <span className="text-xs sm:text-sm text-slate-200 font-bold font-mono">
            {score || `${percentage}%`}
          </span>
        </div>

        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
          <div
            className={`h-full rounded-full transition-all duration-500 ${colorClass}`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        {subtitle && (
          <p className="text-[10px] sm:text-xs text-slate-400 mt-1 truncate">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );

  const Tag = ({ src, alt, children }) => (
    <div className="px-2.5 py-1 flex flex-row items-center gap-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300 shadow-sm">
      {src && (
        <img
          src={src}
          alt={alt}
          title={alt}
          className="w-4 h-4 object-contain"
        />
      )}
      {children}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
        SKILLS MATRIX{" "}
        <span className="block sm:inline text-slate-400 font-light normal-case text-xs sm:text-base">
          | Interactive Technical Map
        </span>
      </h2>

      {/* ========================================================= */}
      {/* SINGLE COLUMN MAIN CONTAINER FOR ALL 3 DOMAINS             */}
      {/* ========================================================= */}
      <div className="flex flex-col space-y-6">
        {/* 1. WEB DEVELOPMENT SECTION */}
        <Card className="bg-[#1c2128] border-slate-700/80 p-4 sm:p-6">
          <h3 className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            MERN Proficiency & Web Development
          </h3>
          <p className="text-xs text-slate-400 mb-4 pb-2 border-b border-slate-700/60">
            Embedded Business Intelligence & interactive React dashboards.
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            <div className="xl:col-span-7 space-y-1">
              {webDevItems.map((item, idx) => (
                <SkillRow key={idx} {...item} />
              ))}
            </div>

            <div className="xl:col-span-5 flex flex-col space-y-4">
              <div className="bg-[#161b22]/70 p-3.5 sm:p-4 rounded-xl border border-slate-700/60">
                <h4 className="font-bold text-white uppercase text-xs mb-2.5 tracking-wider">
                  Frameworks & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Tag src={Redux} alt="Redux">
                    Redux
                  </Tag>
                  <Tag src={Axios} alt="Axios">
                    Axios
                  </Tag>
                  <Tag src={SocketIO} alt="Socket.io">
                    Socket.io
                  </Tag>
                  <Tag src={Mongoose} alt="Mongoose">
                    Mongoose
                  </Tag>
                  <Tag src={Tailwind} alt="Tailwind">
                    Tailwind
                  </Tag>
                  <Tag src={Bootstrap} alt="Bootstrap">
                    Bootstrap
                  </Tag>
                  <Tag src={ReactRouter} alt="React Router">
                    React Router
                  </Tag>
                </div>
              </div>

              <div className="bg-[#161b22]/70 p-3.5 sm:p-4 rounded-xl border border-slate-700/60">
                <h4 className="font-bold text-white uppercase text-xs mb-2.5 tracking-wider">
                  Deployment & Dev Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Tag src={Github} alt="Github">
                    Github
                  </Tag>
                  <Tag src={Gitlab} alt="Gitlab">
                    Gitlab
                  </Tag>
                  <Tag src={Jira} alt="Jira">
                    Jira
                  </Tag>
                  <Tag>Netlify</Tag>
                  <Tag>Render</Tag>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 2. DATA ANALYSIS SECTION */}
        <Card className="bg-[#1c2128] border-slate-700/80 p-4 sm:p-6">
          <h3 className="text-xs sm:text-sm font-bold text-teal-400 uppercase tracking-wider mb-1 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
            Analytic Tool Proficiency & Data Analysis
          </h3>
          <p className="text-xs text-slate-400 mb-4 pb-2 border-b border-slate-700/60">
            Real-time SQL Integration & automated data pipelines.
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            <div className="xl:col-span-7 space-y-1">
              {dataAnalystItems.map((item, idx) => (
                <SkillRow key={idx} {...item} />
              ))}
            </div>

            <div className="xl:col-span-5 flex flex-col space-y-4">
              <div className="bg-[#161b22]/70 p-3.5 sm:p-4 rounded-xl border border-slate-700/60">
                <h4 className="font-bold text-white uppercase text-xs mb-2.5 tracking-wider">
                  Data Analytics Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Tag>Excel Formula</Tag>
                  <Tag src={GoogleScript} alt="Google Sheet Script">
                    Google Sheet Script
                  </Tag>
                  <Tag>Pivot Tables</Tag>
                </div>
              </div>

              <div className="bg-[#161b22]/70 p-3.5 sm:p-4 rounded-xl border border-slate-700/60">
                <h4 className="font-bold text-white uppercase text-xs mb-2.5 tracking-wider">
                  AI & Automation
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Tag>AI Prompting Technique</Tag>
                  <Tag>Code Copilots</Tag>
                  <Tag>Workflow Automation</Tag>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 3. IT SPECIALIST & NETWORK OPERATIONS SECTION */}
        <Card className="bg-[#1c2128] border-slate-700/80 p-4 sm:p-6">
          <h3 className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            IT Specialist & Network Operations
          </h3>
          <p className="text-xs text-slate-400 mb-4 pb-2 border-b border-slate-700/60">
            Hardware Troubleshooting, Enterprise Networking & Systems Support.
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            <div className="xl:col-span-7 space-y-1">
              {itSpecialistItems.map((item, idx) => (
                <SkillRow key={idx} {...item} />
              ))}
            </div>

            <div className="xl:col-span-5 flex flex-col space-y-4">
              <div className="bg-[#161b22]/70 p-3.5 sm:p-4 rounded-xl border border-slate-700/60">
                <h4 className="font-bold text-white uppercase text-xs mb-2.5 tracking-wider">
                  Networking & Protocols
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Tag>TCP/IP</Tag>
                  <Tag>DNS / DHCP</Tag>
                  <Tag>VPN Tunneling</Tag>
                  <Tag>Firewalls</Tag>
                  <Tag>Router & Switch Config</Tag>
                  <Tag>Subnetting</Tag>
                </div>
              </div>

              <div className="bg-[#161b22]/70 p-3.5 sm:p-4 rounded-xl border border-slate-700/60">
                <h4 className="font-bold text-white uppercase text-xs mb-2.5 tracking-wider">
                  Systems & IT Administration
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Tag>Active Directory</Tag>
                  <Tag>Windows Server</Tag>
                  <Tag>Linux / Bash</Tag>
                  <Tag>Hardware Maintenance</Tag>
                  <Tag>Helpdesk & SLA</Tag>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
