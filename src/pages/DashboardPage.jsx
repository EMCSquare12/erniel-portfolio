import React from "react";

export default function DashboardPage() {
  // Reusable Dark Card Component
  const Card = ({ children, className = "" }) => (
    <div
      className={`bg-[#1c2128] border border-slate-700/50 rounded-2xl p-6 shadow-xl ${className}`}
    >
      {children}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      {/* HEADER */}
      <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
        ANALYTICS COMMAND CENTER{" "}
        <span className="text-slate-400 font-light normal-case">
          | Multi-Source Insights
        </span>
      </h2>

      {/* MAIN GRID: 2/3 Left Column, 1/3 Right Column */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SECTION: Live Data Performance (Spans 2 columns) */}
        <Card className="lg:col-span-2 flex flex-col p-0 overflow-hidden">
          {/* Top Header & Horizontal Tabs */}
          <div className="p-4 border-b border-slate-700 bg-[#161b22] flex justify-between items-end">
            <h3 className="font-bold text-white uppercase text-sm mb-2">
              Live Data Performance
            </h3>
            <div className="flex space-x-1">
              <button className="px-4 py-2 bg-slate-700 text-white text-xs rounded-t-lg">
                Global Sales
              </button>
              <button className="px-4 py-2 text-slate-400 text-xs hover:text-white">
                User Acquisition
              </button>
              <button className="px-4 py-2 text-slate-400 text-xs hover:text-white">
                Inventory Status
              </button>
              <button className="px-4 py-2 text-slate-400 text-xs hover:text-white">
                Web Traffic
              </button>
            </div>
            <div className="flex space-x-2 pb-2">
              <span className="text-blue-400 text-lg">⚛️</span>
              <span className="text-yellow-400 text-lg">📊</span>
            </div>
          </div>

          {/* Main Content: Vertical Tabs + White Dashboard Area */}
          <div className="flex flex-1 bg-[#1c2128]">
            {/* Vertical Tabs */}
            <div className="w-32 flex flex-col space-y-4 py-6 px-2 border-r border-slate-700">
              <div className="flex flex-col items-center text-blue-400 bg-blue-500/10 p-2 rounded cursor-pointer">
                <span className="text-xl mb-1">🌍</span>
                <span className="text-[10px] text-center">Global Sales</span>
              </div>
              <div className="flex flex-col items-center text-slate-400 hover:text-white p-2 rounded cursor-pointer">
                <span className="text-xl mb-1">👤</span>
                <span className="text-[10px] text-center">
                  User Acquisition
                </span>
              </div>
              <div className="flex flex-col items-center text-slate-400 hover:text-white p-2 rounded cursor-pointer">
                <span className="text-xl mb-1">📦</span>
                <span className="text-[10px] text-center">
                  Inventory Status
                </span>
              </div>
              <div className="flex flex-col items-center text-slate-400 hover:text-white p-2 rounded cursor-pointer">
                <span className="text-xl mb-1">💻</span>
                <span className="text-[10px] text-center">Web Traffic</span>
              </div>
            </div>

            {/* Inner Dashboard (White Background) */}
            <div className="flex-1 bg-white m-4 rounded-xl p-4 shadow-inner relative text-slate-800 flex flex-col">
              {/* Inner Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-lg">GLOBAL SALES</h4>
                  <p className="text-xs text-slate-500">
                    Interactive geographic, global transactions
                  </p>
                </div>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold border border-green-200">
                    EX
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold border border-blue-200">
                    SQL
                  </span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold border border-yellow-200">
                    📊
                  </span>
                </div>
              </div>

              {/* Inner Charts Grid */}
              <div className="grid grid-cols-2 gap-4 flex-1">
                {/* Map Area */}
                <div className="bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center p-4 relative">
                  <span className="text-slate-400 text-sm">
                    [Geographic Heatmap]
                  </span>
                  <span className="absolute -bottom-4 left-4 bg-[#1c2128] text-white text-[10px] px-3 py-1 rounded-full shadow-lg">
                    Cleaned via Power Query
                  </span>
                </div>

                {/* Top Categories Area */}
                <div className="bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center relative">
                  <span className="text-slate-400 text-sm">[Bar Chart]</span>
                  <span className="absolute -bottom-4 right-4 bg-[#1c2128] text-white text-[10px] px-3 py-1 rounded-full shadow-lg">
                    Aggregated from SQL DB
                  </span>
                </div>

                {/* Bottom Bar Chart Area */}
                <div className="bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center h-40 relative mt-4">
                  <span className="text-slate-400 text-sm">[Bar Chart]</span>
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#1c2128] text-white text-[10px] px-3 py-1 rounded-full shadow-lg">
                    Visualized in Tableau
                  </span>
                </div>

                {/* Line Chart Area */}
                <div className="bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center h-40 relative mt-4">
                  <span className="text-slate-400 text-sm">
                    [Line Chart Trend]
                  </span>
                  <span className="absolute -bottom-4 right-4 bg-yellow-600/90 text-white text-[10px] px-3 py-1 rounded-full shadow-lg">
                    Forecast by Power BI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* RIGHT SECTION: 3 Vertical Cards */}
        <div className="col-span-1 flex flex-col space-y-6">
          {/* Card 1: Real-Time Service Monitor */}
          <Card>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-white uppercase text-sm">
                Real-Time Service Monitor
              </h3>
              <div className="flex space-x-1 text-sm">
                <span>⚛️</span>
                <span>🟢</span>
                <span>🍃</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-slate-400 mb-2">Server up-time</p>
                <div className="flex space-x-2">
                  <div className="w-12 h-12 rounded-full border-4 border-slate-700 border-t-teal-400 flex items-center justify-center text-xs text-white">
                    90%
                  </div>
                  <div className="w-12 h-12 rounded-full border-4 border-slate-700 border-t-teal-400 flex items-center justify-center text-xs text-white">
                    80%
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-2">
                  API response times
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-white">13ms</span>
                  <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-teal-400"></div>
                </div>
                <p className="text-[10px] text-slate-400 mt-2 text-right">
                  11:04 Live clock
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-400 mb-1">Active Users</p>
                <div className="h-16 bg-slate-800 rounded border border-slate-700 flex items-end px-1 pb-1">
                  {/* Fake sparkline using borders/divs */}
                  <div className="w-full h-8 border-t border-blue-500"></div>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">Server Health</p>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-400">Status</span>
                    <div className="w-12 h-1.5 bg-teal-500 rounded"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-400">Server</span>
                    <div className="w-10 h-1.5 bg-teal-500 rounded"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-400">Routes</span>
                    <div className="w-12 h-1.5 bg-teal-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-700/50">
              <p className="text-xs text-teal-400">
                Website: Online | API: Stable
              </p>
              <p className="text-xs text-teal-400">New Order: +1500 USD</p>
            </div>
          </Card>

          {/* Card 2: Insight Stream & Filters */}
          <Card>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-white uppercase text-sm">
                Insight Stream & Filters
              </h3>
              <span className="text-yellow-400">📊</span>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Dynamic key performance indicators
            </p>

            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="bg-slate-800/50 p-2 rounded border border-slate-700 text-center">
                <p className="text-[10px] text-slate-400">Total Revenue</p>
                <p className="text-sm font-bold text-white">$3,225.6M</p>
                <p className="text-[10px] text-teal-400">↑ 51 USD</p>
              </div>
              <div className="bg-slate-800/50 p-2 rounded border border-slate-700 text-center">
                <p className="text-[10px] text-slate-400">Avg Order Value</p>
                <p className="text-sm font-bold text-white">$25.2K</p>
                <p className="text-[10px] text-teal-400">↑ $2 USD</p>
              </div>
              <div className="bg-slate-800/50 p-2 rounded border border-slate-700 text-center">
                <p className="text-[10px] text-slate-400">Conversion Rate</p>
                <p className="text-sm font-bold text-white">16.2%</p>
                <p className="text-[10px] text-teal-400">↑ 3.98%</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-slate-400 block mb-1">
                  Region
                </label>
                <select className="w-full bg-slate-800 border border-slate-700 text-white text-xs p-1.5 rounded outline-none">
                  <option>Region</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] text-slate-400 block mb-1">
                  Category
                </label>
                <select className="w-full bg-slate-800 border border-slate-700 text-white text-xs p-1.5 rounded outline-none">
                  <option>Category</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] text-slate-400 block mb-1">
                  E.g. 2024
                </label>
                <select className="w-full bg-slate-800 border border-slate-700 text-white text-xs p-1.5 rounded outline-none">
                  <option>E.g. 2024</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] text-slate-400 block mb-1">
                  Month
                </label>
                <select className="w-full bg-slate-800 border border-slate-700 text-white text-xs p-1.5 rounded outline-none">
                  <option>Month: Oct</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Card 3: Data Flow */}
          <Card className="relative">
            {/* Floating notification badge */}
            <div className="absolute -top-4 right-4 bg-[#21262d] border border-slate-600 rounded-lg p-2 shadow-xl z-10">
              <p className="text-[10px] text-slate-300 flex items-center">
                <span className="text-teal-400 mr-1">✓</span> Data Update
                Successful:{" "}
                <span className="text-slate-500 ml-1">2 mins ago</span>
              </p>
              <p className="text-[10px] text-teal-400 flex items-center mt-1">
                <span className="w-1 h-1 rounded-full bg-teal-400 mr-1"></span>{" "}
                New Order: +1500 USD
              </p>
            </div>

            <h3 className="font-bold text-white uppercase text-sm mb-4 mt-2">
              Data Flow
            </h3>

            {/* Flowchart container */}
            <div className="flex items-center justify-between text-[10px] text-center text-slate-400">
              <div>
                <div className="w-8 h-8 mx-auto bg-green-900/30 text-green-500 rounded flex items-center justify-center border border-green-800 mb-1">
                  EX
                </div>
                <span>Excel</span>
              </div>
              <span>&rarr;</span>
              <div>
                <div className="w-8 h-8 mx-auto bg-green-900/30 text-green-500 rounded flex items-center justify-center border border-green-800 mb-1">
                  PQ
                </div>
                <span>
                  Power
                  <br />
                  Query
                </span>
              </div>
              <span>&rarr;</span>
              <div>
                <div className="w-8 h-8 mx-auto bg-blue-900/30 text-blue-500 rounded flex items-center justify-center border border-blue-800 mb-1">
                  SQL
                </div>
                <span>
                  SQL
                  <br />
                  Database
                </span>
              </div>
              <span>&rarr;</span>
              <div>
                <div className="w-8 h-8 mx-auto bg-yellow-900/30 text-yellow-500 rounded flex items-center justify-center border border-yellow-800 mb-1">
                  📊
                </div>
                <span>
                  Tableau/
                  <br />
                  Power BI
                </span>
              </div>
              <span>&rarr;</span>
              <div>
                <div className="w-8 h-8 mx-auto bg-slate-800 rounded flex items-center justify-center border border-slate-700 mb-1">
                  ☁️
                </div>
                <span>
                  Embedded
                  <br />
                  API
                </span>
              </div>
              <span>&rarr;</span>
              <div>
                <div className="w-8 h-8 mx-auto bg-slate-800 rounded flex items-center justify-center border border-slate-700 mb-1">
                  💻
                </div>
                <span className="text-white">
                  Live
                  <br />
                  Dashboard
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
