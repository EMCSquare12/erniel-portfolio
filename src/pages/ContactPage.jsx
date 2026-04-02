import React from "react";

export default function ContactPage() {
  // Reusable Dark Card Component
  const Card = ({ children, className = "" }) => (
    <div
      className={`bg-[#1c2128] border border-slate-700/50 rounded-2xl p-6 shadow-xl ${className}`}
    >
      {children}
    </div>
  );

  // Reusable Flowchart Step Component
  const FlowStep = ({ number, icon, title, isLast }) => (
    <div className="flex items-center">
      <div className="flex flex-col items-center">
        <span className="text-xs text-slate-400 mb-2">{number}.</span>
        <div className="w-12 h-12 rounded-xl border border-slate-600 bg-[#161b22] flex items-center justify-center text-xl text-teal-400 shadow-inner mb-2">
          {icon}
        </div>
        <span className="text-[10px] text-center text-slate-300 max-w-[60px] leading-tight">
          {title}
        </span>
      </div>
      {!isLast && <div className="mx-2 text-teal-500 mb-6">&rarr;</div>}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      {/* HEADER */}
      <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
        CONNECT & DISCOVER{" "}
        <span className="text-slate-400 font-light normal-case">
          | Let's Collaborate
        </span>
      </h2>

      {/* MAIN 3-COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COLUMN 1: Visuals & Maps */}
        <div className="col-span-1 flex flex-col space-y-6">
          {/* Engagement Insights */}
          <Card className="flex flex-col flex-1">
            <h3 className="font-bold text-white uppercase text-sm mb-1">
              ENGAGEMENT INSIGHTS
            </h3>
            <p className="text-xs text-slate-400 mb-4">MERN/Live Data skill</p>

            {/* Mock Chart Area */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg h-40 mb-4 relative flex items-center justify-center overflow-hidden">
              <span className="text-slate-500 text-sm">
                [Interactive Line Chart]
              </span>

              {/* Fake Tooltip */}
              <div className="absolute top-4 right-4 bg-[#161b22]/90 border border-slate-600 p-2 rounded text-[10px] text-slate-300 shadow-xl backdrop-blur-sm z-10">
                <p className="font-bold text-white border-b border-slate-600 pb-1 mb-1">
                  Last 30, 2023
                </p>
                <p>
                  <span className="text-cyan-400 inline-block w-2 h-2 rounded-full mr-1"></span>
                  Website: 369
                </p>
                <p>
                  <span className="text-teal-400 inline-block w-2 h-2 rounded-full mr-1"></span>
                  Data points: 539
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-auto">
              Real-time, interactive chart of website visits (30 days).
            </p>
          </Card>

          {/* Geo-Interaction */}
          <Card className="flex flex-col flex-1">
            <h3 className="font-bold text-white uppercase text-sm mb-4">
              GEO-INTERACTION
            </h3>

            {/* Mock Map Area */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg h-40 mb-4 flex items-center justify-center relative">
              <span className="text-slate-500 text-sm">[World Map]</span>

              {/* Fake Legend */}
              <div className="absolute bottom-2 left-2 text-[8px] text-slate-300">
                <p className="font-bold mb-1">Interest Activity</p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 mr-1"></div>North America
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 mr-1"></div>Europe
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 mr-1"></div>Oceania
                </div>
              </div>
            </div>

            <h4 className="font-bold text-white text-xs mb-1">
              Interest Regions
            </h4>
            <p className="text-[10px] text-slate-400 mt-auto">
              Aggregated interest from SQL database (Power BI style).
            </p>
          </Card>
        </div>

        {/* COLUMN 2: Form & Actions */}
        <div className="col-span-1 flex flex-col space-y-6">
          {/* Form Card */}
          <Card className="flex-1 border-t-4 border-t-slate-600">
            <h3 className="font-bold text-white uppercase text-sm mb-6">
              SECURE INQUIRY FORM
            </h3>

            <form className="flex flex-col space-y-4">
              {/* Focused Input Example */}
              <input
                type="text"
                placeholder="Name"
                defaultValue="Name"
                className="w-full bg-[#161b22] border border-cyan-400 ring-1 ring-cyan-400/50 rounded-lg p-3 text-sm text-white outline-none shadow-[0_0_10px_rgba(34,211,238,0.2)]"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full bg-[#161b22] border border-slate-600 rounded-lg p-3 text-sm text-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#161b22] border border-slate-600 rounded-lg p-3 text-sm text-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full bg-[#161b22] border border-slate-600 rounded-lg p-3 text-sm text-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all resize-none"
              ></textarea>

              <button
                type="button"
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold uppercase py-3 rounded-lg mt-2 transition-colors"
              >
                [SEND MESSAGE]
              </button>
            </form>

            <div className="flex items-center mt-6 text-sm">
              <span className="text-green-500 mr-2 text-xl">🛡️</span>
              <div>
                <p className="font-bold text-white leading-tight">
                  MERN Web Security
                </p>
                <p className="text-[10px] text-slate-400">
                  SSL Encrypted & Validated (Express.js/React).
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Channels Card */}
          <Card>
            <h3 className="font-bold text-white uppercase text-sm mb-4">
              QUICK CHANNELS
            </h3>
            <div className="space-y-3">
              <button className="w-full bg-transparent border border-blue-500/50 hover:bg-blue-500/10 text-blue-400 rounded-lg py-2 text-sm transition-colors">
                [View LinkedIn Profile]
              </button>
              <button className="w-full bg-transparent border border-teal-500/50 hover:bg-teal-500/10 text-teal-400 rounded-lg py-2 text-sm transition-colors">
                [Direct Email]
              </button>
            </div>
          </Card>
        </div>

        {/* COLUMN 3: Skills Flow & Steps */}
        <div className="col-span-1 flex flex-col space-y-6">
          {/* Skills Bridge 1 */}
          <Card>
            <h3 className="font-bold text-white uppercase text-sm mb-6">
              SKILLS BRIDGE
            </h3>
            <div className="flex justify-between items-start">
              <FlowStep number="1" icon="&lt;/&gt;" title="Defined Scope" />
              <FlowStep number="2" icon="📊" title="Data-Driven Insights" />
              <FlowStep number="3" icon="🛠️" title="Prototyping (MERN)" />
              <FlowStep
                number="4"
                icon="✅"
                title="Deployed Solution"
                isLast={true}
              />
            </div>
          </Card>

          {/* Skills Bridge 2 */}
          <Card>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-white text-sm">
                  Skills Driven Chartt
                </h3>
                <p className="text-[10px] text-slate-400">
                  Collaboration Toolkit
                </p>
              </div>
              <div className="flex space-x-1">
                <span className="text-blue-400 bg-blue-500/10 p-1 rounded">
                  ⚛️
                </span>
                <span className="text-teal-400 bg-teal-500/10 p-1 rounded">
                  🍃
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <FlowStep number="1" icon="&lt;/&gt;" title="Defined Scope" />
              <FlowStep number="2" icon="📊" title="Data-Driven Insights" />
              <FlowStep number="3" icon="🛠️" title="Prototyping (MERN)" />
              <FlowStep
                number="4"
                icon="✅"
                title="Deployed Solution"
                isLast={true}
              />
            </div>
          </Card>

          {/* Next Steps */}
          <Card className="flex-1">
            <h3 className="font-bold text-white uppercase text-sm mb-4">
              NEXT STEPS
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1 h-5 bg-cyan-400 rounded-full mr-3 mt-0.5"></span>
                <p className="text-sm text-slate-300">
                  Average response time:{" "}
                  <span className="font-bold text-white">&lt;24 hours.</span>
                </p>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-5 bg-cyan-400 rounded-full mr-3 mt-0.5"></span>
                <p className="text-sm text-slate-300">
                  Always open to discuss hybrid projects.
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
