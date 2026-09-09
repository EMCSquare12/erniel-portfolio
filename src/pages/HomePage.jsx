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
      {/* HERO CARD */}
      <Card className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Erniel Caalim{" "}
            <span className="block sm:inline text-slate-400 font-light text-base sm:text-xl">
              | Web Developer & Data Analyst
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mb-4 md:mb-6">
            Building intelligent applications and extracting actionable insights
            from complex data.
          </p>
        </div>
        <img
          className="w-48 sm:w-60 h-32 sm:h-40 object-contain shrink-0"
          src={Hero}
          alt="Laptop and Mobile Device"
        />
      </Card>

      {/* THREE COLUMN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* COLUMN 1 */}
        <Card className="col-span-1 flex flex-col">
          <h3 className="font-bold text-white mb-1">
            Featured Project: ProShop
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-4">
            MERN Stack E-Commerce Platform with Dedicated Admin Dashboard
          </p>
          <div className="group/proshop bg-slate-800 h-40 sm:h-48 rounded-lg mb-4 w-full flex overflow-hidden items-center justify-center border border-slate-700 cursor-pointer">
            <img
              className="block w-full h-full object-cover transition-transform duration-500 group-hover/proshop:scale-110"
              src={ProShopHome}
              alt="ProShop"
            />
          </div>
          <div className="flex justify-between items-center mb-4 shrink-0">
            <div className="flex space-x-1.5 sm:space-x-2">
              {techIcons.map((tech, idx) => (
                <div
                  key={idx}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center p-1"
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
          <p className="text-xs sm:text-sm text-slate-400 mt-auto">
            A MERN stack e-commerce app that offers a smooth shopping experience
            for customers and a secure, easy-to-use management dashboard for
            admins.
          </p>
        </Card>

        {/* COLUMN 2 */}
        <div className="col-span-1 flex flex-col space-y-6">
          <Card className="flex-1">
            <h3 className="font-bold text-white mb-1">
              Data Project: Market Trends Analysis
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-4">
              SQL, Power BI, Tableau
            </p>
            <div className="bg-slate-800 h-28 sm:h-32 rounded-lg mb-4 flex items-center justify-center border border-slate-700 text-xs text-slate-400">
              [Map Visualization Image]
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Comprehensive EDA and predictive modeling of global market trends,
              cleaning 500k+ rows with Power Query/SQL.
            </p>
          </Card>
          <Card>
            <h3 className="font-bold text-white mb-2">The Hybrid Approach</h3>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="p-2.5 sm:p-3 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-mono shrink-0">
                &lt;/&gt;
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Combining frontend development and analysis to create
                Data-Driven Web Solutions.
              </p>
            </div>
          </Card>
        </div>

        {/* COLUMN 3 */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col space-y-6">
          {/* SINGLE ROW SKILLS SPECTRUM CARD */}
          <Card>
            <h3 className="font-bold text-white mb-4">Skills Spectrum</h3>
            <div className="grid grid-cols-4 gap-1.5 sm:gap-3 text-center">
              {homeSkillsData.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-between space-y-2"
                >
                  <CustomGauge
                    name={skill.name}
                    value={skill.value}
                    color={skill.color}
                  />
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 p-1 rounded-full bg-slate-700 flex items-center justify-center mb-1">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        title={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 leading-tight max-w-[65px] sm:max-w-[80px]">
                      {skill.name}
                    </span>
                  </div>
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
