import React, { useState } from "react";
import {
  IconReactJs as ReactJs,
  IconNodeJs as NodeJs,
  IconMongoDb as MongoDb,
  IconExpressJs as ExpressJs,
} from "../assets";

import { Card } from "../components/Card";
import { ProjectCard } from "../components/ProjectCard";
import { FaCompressArrowsAlt } from "react-icons/fa";

const icons = [MongoDb, ExpressJs, ReactJs, NodeJs];

const proShopDetails = [
  {
    title: "Frontend Technical Highlights",
    descriptions: [
      "Responsive Mobile-First Design: Implemented fluid layouts.",
      "Global State & Data Fetching: Managed complex application states using Redux.",
      "Real-Time Updates: Integrated Socket.IO to provide users with instant notifications.",
    ],
  },
  {
    title: "Backend Technical Highlights",
    descriptions: [
      "Database Architecture: Leveraged MongoDB with Mongoose ODM.",
      "Secure Authentication: Implemented JSON Web Tokens (JWT).",
      "Role-Based Access Control: Developed a robust Authorization system.",
    ],
  },
];

const modernTechDetails = [
  {
    title: "Modern Tech Marketplace",
    descriptions: [
      "A high-performance e-commerce platform for consumer electronics, combining advanced inventory management with a secure, user-centric shopping experience.",
    ],
  },
];

// Reusable local component for Data Science to respect state
const DataScienceCard = ({ id, expandedCard, setExpandedCard }) => {
  const isExpanded = expandedCard === id;
  const isSidebar = expandedCard !== null && expandedCard !== id;
  const isDefault = expandedCard === null;

  if (isSidebar) {
    return (
      <Card
        onClick={() => setExpandedCard(id)}
        className="flex flex-col justify-center items-center cursor-pointer hover:border-emerald-500/50 transition-colors h-full min-h-0 w-full p-4"
      >
        <h3 className="font-bold text-white text-center text-xs line-clamp-2">
          Customer Segmentation
        </h3>
        <span className="text-[10px] text-emerald-400 mt-2 bg-emerald-400/10 px-2 py-1 rounded-full font-semibold">
          View
        </span>
      </Card>
    );
  }

  return (
    <Card
      className={`flex flex-col h-full relative overflow-hidden p-5 w-full`}
    >
      {isExpanded && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpandedCard(null);
          }}
          className="absolute top-4 right-4 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-white z-20 flex items-center gap-2 text-xs font-bold border border-slate-500"
        >
          <FaCompressArrowsAlt /> Shrink
        </button>
      )}
      <h3 className="font-bold text-white mb-2 uppercase text-sm pr-20 shrink-0">
        Data Science Project: Segmentation
      </h3>
      <div
        className={`grid grid-cols-2 gap-4 shrink-0 transition-all duration-300 ${isExpanded ? "flex-1 mb-4" : "flex-1 min-h-[80px] mb-3"}`}
      >
        <div className="bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 text-xs p-2">
          [Map Dashboard]
        </div>
        <div className="bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 text-xs p-2">
          [Bar Chart Dashboard]
        </div>
      </div>
      <div className="flex flex-col shrink-0">
        <h4 className="font-bold text-white text-xs mb-1">Tableau dashboard</h4>
        <p className="text-[10px] text-slate-400 flex items-center justify-between">
          <span className="line-clamp-2">
            MERN-based data capture -&gt; SQL analysis -&gt; Tableau
            visualization.
          </span>
        </p>
        {isDefault && (
          <button
            onClick={() => setExpandedCard(id)}
            className="text-emerald-400 text-[10px] mt-2 hover:text-emerald-300 font-bold uppercase self-start bg-emerald-400/10 px-3 py-1.5 rounded"
          >
            See More &rarr;
          </button>
        )}
      </div>
    </Card>
  );
};

// Reusable local component for Gallery to respect state
const GalleryCard = ({ id, expandedCard, setExpandedCard }) => {
  const isExpanded = expandedCard === id;
  const isSidebar = expandedCard !== null && expandedCard !== id;
  const isDefault = expandedCard === null;

  if (isSidebar) {
    return (
      <Card
        onClick={() => setExpandedCard(id)}
        className="flex flex-col justify-center items-center cursor-pointer hover:border-emerald-500/50 transition-colors h-full min-h-0 w-full p-4"
      >
        <h3 className="font-bold text-white text-center text-xs line-clamp-2">
          Project Gallery (All)
        </h3>
        <span className="text-[10px] text-emerald-400 mt-2 bg-emerald-400/10 px-2 py-1 rounded-full font-semibold">
          View
        </span>
      </Card>
    );
  }

  const items = [
    { title: "E-Commerce App", tech: "React/Node", label: "App" },
    { title: "HR Data Reporting", tech: "Excel/SQL", label: "Report" },
    { title: "Supply Dashboard", tech: "Power BI", label: "Dashboard" },
    { title: "Web Scraper", tech: "Python", label: "Scraper" },
  ];

  return (
    <Card className="flex flex-col h-full relative overflow-hidden p-5 w-full">
      {isExpanded && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpandedCard(null);
          }}
          className="absolute top-4 right-4 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-white z-20 flex items-center gap-2 text-xs font-bold border border-slate-500"
        >
          <FaCompressArrowsAlt /> Shrink
        </button>
      )}
      <h3 className="font-bold text-white mb-3 uppercase text-sm pr-20 shrink-0">
        Project Gallery (All)
      </h3>
      <div
        className={`grid grid-cols-2 gap-3 overflow-y-auto [&::-webkit-scrollbar]:hidden ${isExpanded ? "flex-1" : "flex-1 min-h-[100px]"}`}
      >
        {items.map((it, i) => (
          <div key={i} className="flex flex-col">
            <div
              className={`bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 text-xs mb-1 ${isExpanded ? "flex-1 min-h-[100px]" : "h-12"}`}
            >
              [{it.label}]
            </div>
            <p className="text-[10px] text-white line-clamp-1">{it.title}</p>
            <p className="text-[9px] text-slate-400">({it.tech})</p>
          </div>
        ))}
      </div>
      {isDefault && (
        <button
          onClick={() => setExpandedCard(id)}
          className="text-emerald-400 text-[10px] mt-2 hover:text-emerald-300 font-bold uppercase self-start bg-emerald-400/10 px-3 py-1.5 rounded shrink-0"
        >
          See More &rarr;
        </button>
      )}
    </Card>
  );
};

export default function ProjectsPage() {
  const [expandedCard, setExpandedCard] = useState(null);

  // Helper to render the currenty expanded focus card
  const renderExpanded = () => {
    switch (expandedCard) {
      case "proshop":
        return (
          <ProjectCard
            id="proshop"
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
            title="Featured Project: ProShop"
            details={proShopDetails}
            icons={icons}
          />
        );
      case "datascience":
        return (
          <DataScienceCard
            id="datascience"
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />
        );
      case "moderntech":
        return (
          <ProjectCard
            id="moderntech"
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
            title="Modern Tech Marketplace"
            details={modernTechDetails}
            icons={icons}
          />
        );
      case "gallery":
        return (
          <GalleryCard
            id="gallery"
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />
        );
      default:
        return null;
    }
  };

  return (
    // We restrict the height relative to viewport to prevent outer scroll
    <div className="max-w-7xl mx-auto flex flex-col space-y-4 pb-2 h-screen lg:h-screen">
      {/* HEADER */}
      <h2 className="text-2xl font-bold text-white tracking-wide uppercase shrink-0">
        FEATURED PORTFOLIO{" "}
        <span className="text-slate-400 font-light normal-case">
          | MERN Stack & Data Analytics
        </span>
      </h2>

      {/* DYNAMIC LAYOUT AREA */}
      <div className="flex-1 min-h-0 w-full overflow-hidden">
        {expandedCard === null ? (
          // --- DEFAULT STATE ---
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-0 w-full">
            {/* Left Col */}
            <div className="col-span-1 h-full min-h-0">
              <ProjectCard
                id="proshop"
                expandedCard={expandedCard}
                setExpandedCard={setExpandedCard}
                title="Featured Project: ProShop"
                details={proShopDetails}
                icons={icons}
              />
            </div>

            {/* Right Cols */}
            <div className="col-span-1 lg:col-span-2 grid grid-rows-2 gap-6 h-full min-h-0">
              <div className="row-span-1 h-full min-h-0">
                <DataScienceCard
                  id="datascience"
                  expandedCard={expandedCard}
                  setExpandedCard={setExpandedCard}
                />
              </div>
              <div className="row-span-1 grid grid-cols-1 lg:grid-cols-2 gap-6 h-full min-h-0">
                <div className="col-span-1 h-full min-h-0">
                  <ProjectCard
                    id="moderntech"
                    expandedCard={expandedCard}
                    setExpandedCard={setExpandedCard}
                    title="Modern Tech Marketplace"
                    details={modernTechDetails}
                    icons={icons}
                  />
                </div>
                <div className="col-span-1 h-full min-h-0">
                  <GalleryCard
                    id="gallery"
                    expandedCard={expandedCard}
                    setExpandedCard={setExpandedCard}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // --- EXPANDED (SEE MORE) STATE --- (Matches screenshot)
          <div className="flex flex-col lg:flex-row gap-6 h-full min-h-0 w-full">
            {/* Big Expanded Card (Left Side) */}
            <div className="lg:w-3/4 h-full min-h-0 flex flex-col">
              {renderExpanded()}
            </div>

            {/* Stacked Sidebars (Right Side) */}
            <div className="lg:w-1/4 h-full min-h-0 flex flex-col gap-4 overflow-y-auto [&::-webkit-scrollbar]:hidden pr-1 pb-2">
              {expandedCard !== "proshop" && (
                <ProjectCard
                  id="proshop"
                  expandedCard={expandedCard}
                  setExpandedCard={setExpandedCard}
                  title="ProShop"
                  details={proShopDetails}
                />
              )}
              {expandedCard !== "datascience" && (
                <DataScienceCard
                  id="datascience"
                  expandedCard={expandedCard}
                  setExpandedCard={setExpandedCard}
                />
              )}
              {expandedCard !== "moderntech" && (
                <ProjectCard
                  id="moderntech"
                  expandedCard={expandedCard}
                  setExpandedCard={setExpandedCard}
                  title="Marketplace"
                  details={modernTechDetails}
                />
              )}
              {expandedCard !== "gallery" && (
                <GalleryCard
                  id="gallery"
                  expandedCard={expandedCard}
                  setExpandedCard={setExpandedCard}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
