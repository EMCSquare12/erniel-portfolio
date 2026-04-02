import React from "react";

export default function HomePage() {
  // Reusable Card Component for consistency
  const Card = ({ children, className = "" }) => (
    <div
      className={`bg-[#1c2128] border border-slate-700/50 rounded-2xl p-6 shadow-xl ${className}`}
    >
      {children}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* 1. HERO BANNER */}
      <Card className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#1c2128] to-[#111827]">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-2">
            Erniel Caalim{" "}
            <span className="text-slate-400 font-light">
              | Web Developer & Data Analyst
            </span>
          </h2>
          <p className="text-slate-400 mb-6">
            Building intelligent applications and extracting actionable insights
            from complex data.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors">
              VIEW PROJECT PORTFOLIO
            </button>
            <button className="px-6 py-2 bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 text-sm font-semibold rounded-lg transition-colors">
              EXPLORE DATA VISUALIZATIONS
            </button>
          </div>
        </div>

        {/* Placeholder for the laptop graphic on the right */}
        <div className="mt-6 md:mt-0 w-64 h-40 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500">
          [Hero Graphic]
        </div>
      </Card>

      {/* 2. THREE-COLUMN DASHBOARD GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Featured Project) */}
        <Card className="col-span-1 flex flex-col">
          <h3 className="font-bold text-white mb-1">
            Featured Project: SaaS Analytics Dashboard
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            MERN Stack app with embedded Power BI visualization
          </p>

          <div className="bg-slate-800 h-48 rounded-lg mb-4 w-full flex items-center justify-center border border-slate-700">
            [Dashboard Image]
          </div>

          {/* Tech Stack Badges */}
          <div className="flex space-x-2 mb-4 justify-center">
            <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
              ⚛️
            </span>
            <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
              JS
            </span>
            <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
              📊
            </span>
          </div>

          <p className="text-sm text-slate-400 mt-auto">
            Full MERN app integrating dynamic SQL backend with custom React
            frontend visualizing user growth via Power BI.
          </p>
        </Card>

        {/* Middle Column (Data Project & Hybrid Approach) */}
        <div className="col-span-1 flex flex-col space-y-6">
          <Card className="flex-1">
            <h3 className="font-bold text-white mb-1">
              Data Project: Market Trends Analysis
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              SQL, Power BI, Tableau
            </p>
            <div className="bg-slate-800 h-32 rounded-lg mb-4 flex items-center justify-center border border-slate-700">
              [Map Visualization Image]
            </div>
            <p className="text-sm text-slate-400">
              Comprehensive EDA and predictive modeling of global market trends,
              cleaning 500k+ rows with Power Query/SQL.
            </p>
          </Card>

          <Card>
            <h3 className="font-bold text-white mb-2">The Hybrid Approach</h3>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg">
                &lt;/&gt;
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Combining frontend development (left: code) and analysis (right)
                to create Data-Driven Web Solutions.
              </p>
            </div>
          </Card>
        </div>

        {/* Right Column (Skills & Project Gallery) */}
        <div className="col-span-1 flex flex-col space-y-6">
          <Card>
            <h3 className="font-bold text-white mb-4">Skills Spectrum</h3>
            <div className="grid grid-cols-4 gap-2 text-center">
              {/* Dummy Gauges */}
              {[
                "MERN Stack",
                "SQL",
                "Excel/Power Query",
                "Power BI/Tableau",
              ].map((skill, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-4 border-slate-700 border-t-blue-500 mb-2"></div>
                  <span className="text-[10px] text-slate-400">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="flex-1">
            <h3 className="font-bold text-white mb-4">
              Project Gallery (Latest)
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="bg-slate-800 h-24 rounded-lg mb-2 border border-slate-700"></div>
                <p className="text-xs text-center text-slate-400">
                  E-Commerce App
                </p>
              </div>
              <div>
                <div className="bg-slate-800 h-24 rounded-lg mb-2 border border-slate-700"></div>
                <p className="text-xs text-center text-slate-400">
                  HR Data Reporting
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
