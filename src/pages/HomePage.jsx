import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { ProjectGalleryItem } from "../components/ProjectGalleryItem";

import {
  Hero,
  IconExcel as Excel,
  IconPowerBi as PowerBI,
  IconReactJs as ReactJs,
  IconSQL as SQL,
  IconNodeJs as NodeJs,
  IconMongoDb as MongoDb,
  IconExpressJs as ExpressJs,
  ProjectLiveBingoCreateRoom as CreateRoom,
  ProjectLiveBingoHostPage as HostPage,
  ProjectLiveBingoJoinRoom as JoinRoom,
  ProjectLiveBingoMainPage as MainPage,
  ProjectLiveBingoPlayerRoom as PlayerRoom,
} from "../assets";

// Custom SVG Gauge
const CustomGauge = ({ name, value, color }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setCurrentValue(value), 200);
    return () => clearTimeout(timeout);
  }, [value]);

  const radius = 40;
  const pathLength = Math.PI * radius;
  const strokeDashoffset = pathLength - (currentValue / 100) * pathLength;
  const needleRotation = (currentValue / 100) * 180;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-8 h-8 md:w-14 md:h-14 mb-2">
        <svg
          viewBox="0 0 100 55"
          className="w-full h-full overflow-visible drop-shadow-md"
        >
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="#334155"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          <g
            transform={`translate(50, 50) rotate(${needleRotation - 90})`}
            className="transition-transform duration-1000 ease-out"
          >
            <path d="M -2.5 0 L 0 -32 L 2.5 0 Z" fill={color} />
            <circle cx="0" cy="0" r="4.5" fill={color} />
          </g>
        </svg>
      </div>
      <span className="text-sm text-white leading-tight">{value}%</span>
    </div>
  );
};

export default function HomePage() {
  const skillsData = [
    {
      name: "MERN Stack",
      value: 90,
      color: "#3b82f6",
      icon: ReactJs,
    },
    {
      name: "SQL",
      value: 85,
      color: "#38bdf8",
      icon: SQL,
    },
    {
      name: "Excel/Power Query",
      value: 80,
      color: "#14b8a6",
      icon: Excel,
    },
    {
      name: "Power BI/Tableau",
      value: 80,
      color: "#06b6d4",
      icon: PowerBI,
    },
  ];

  const featuredProjectIcons = [
    { src: MongoDb, name: "MongoDB" },
    { src: ExpressJs, name: "Express.js" },
    { src: ReactJs, name: "React" },
    { src: NodeJs, name: "Node.js" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Card className="flex flex-col md:flex-row items-center justify-between">
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
        <img className="w-60 h-40" src={Hero} alt="Laptop and Mobile Device" />
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 flex flex-col">
          <h3 className="font-bold text-white mb-1">
            Featured Project: ProShop
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            MERN Stack E-Commerce Platform with Dedicated Admin Dashboard
          </p>
          <div className="bg-slate-800 h-48 rounded-lg mb-4 w-full flex items-center justify-center border border-slate-700">
            [Dashboard Image]
          </div>
          <div className="flex space-x-2 mb-4 justify-center">
            {featuredProjectIcons.map((iconData, idx) => (
              <div
                key={idx}
                className="w-8 h-8 p-1 rounded-full bg-slate-700 flex items-center justify-center"
              >
                <img
                  src={iconData.src}
                  alt={iconData.name}
                  title={iconData.name}
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-400 mt-auto">
            A MERN stack e-commerce app that offers a smooth shopping experience
            for customers and a secure, easy-to-use management dashboard for
            admins.
          </p>
        </Card>

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

        <div className="col-span-1 flex flex-col space-y-6">
          <Card>
            <h3 className="font-bold text-white mb-4">Skills Spectrum</h3>
            <div className="grid grid-cols-4 gap-2 text-center mb-4">
              {skillsData.map((skill, i) => (
                <CustomGauge
                  key={`gauge-${i}`}
                  name={skill.name}
                  value={skill.value}
                  color={skill.color}
                />
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              {skillsData.map((skill, i) => (
                <div key={`icon-${i}`} className="flex flex-col items-center">
                  <div className="w-8 h-8 p-1 rounded-full bg-slate-700 flex items-center justify-center">
                    <img src={skill.icon} alt={skill.name} title={skill.name} />
                  </div>

                  <span className="text-[10px] text-slate-400 leading-tight max-w-[60px]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="flex-1">
            <h3 className="font-bold text-white mb-4">
              Project Gallery (Latest)
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ProjectGalleryItem
                title="Live Bingo"
                images={[MainPage, CreateRoom, JoinRoom, HostPage, PlayerRoom]}
                projectUrl="https://live-bingo-v2.netlify.app/"
              />
              <ProjectGalleryItem
                title="HR Data Reporting"
                images={[]}
                projectUrl="#"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
