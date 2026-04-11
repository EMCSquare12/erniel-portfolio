import React from "react";
import { Card } from "../components/ui/Card";
import { CustomGauge } from "../components/ui/CustomGauge";
import { ProjectGalleryItem } from "../components/ProjectGalleryItem";
import { homeSkillsData } from "../data/skillsData";
import { techIcons } from "../data/projectsData";
import { FaExternalLinkAlt } from "react-icons/fa";

import {
  Hero,
  ProjectLiveBingoCreateRoom as CreateRoom,
  ProjectLiveBingoHostPage as HostPage,
  ProjectLiveBingoJoinRoom as JoinRoom,
  ProjectLiveBingoMainPage as MainPage,
  ProjectLiveBingoPlayerRoom as PlayerRoom,
  ProjectProshop_1 as ProShopHome,
  IconGithub as GitHub,
} from "../assets";

export default function HomePage() {
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
          <div className="bg-slate-800 h-48 rounded-lg mb-4 w-full flex overflow-hidden items-center justify-center border border-slate-700">
            <img
              className="block w-full h-full object-cover transition-transform duration-500"
              src={ProShopHome}
              alt="ProShop"
            />
          </div>
          <div className="flex justify-between items-center mb-4 shrink-0">
            {/* Left Side: MERN Tech Stack Icons */}
            <div className="flex space-x-2">
              {techIcons.map((tech, idx) => (
                <div
                  key={idx}
                  className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center p-1"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    title={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Right Side: GitHub and External Link Icons */}
            <div className="flex space-x-2">
              <a
                href="https://github.com/EMCSquare12/e-commerce-project.git"
                target="_blank"
                rel="noreferrer"
                title="GitHub Repository"
              >
                <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center p-1 hover:bg-slate-700 hover:border-slate-500 transition-colors cursor-pointer text-white">
                  <img
                    src={GitHub}
                    alt="GitHub Repository"
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
              <a
                href="https://pro-shop-ecommerce.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="External Link"
              >
                <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center p-1 hover:bg-slate-700 hover:border-slate-500 transition-colors cursor-pointer text-white">
                  <FaExternalLinkAlt size={12} />
                </div>
              </a>
            </div>
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
              {homeSkillsData.map((skill, i) => (
                <CustomGauge
                  key={`gauge-${i}`}
                  name={skill.name}
                  value={skill.value}
                  color={skill.color}
                />
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              {homeSkillsData.map((skill, i) => (
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
