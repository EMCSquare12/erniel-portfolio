import React, { useState } from "react";
import {
  IconReactJs as ReactJs,
  IconNodeJs as NodeJs,
  IconMongoDb as MongoDb,
  IconExpressJs as ExpressJs,
} from "../assets";

import { Card } from "../components/Card";
import { FaCompressArrowsAlt, FaExpandArrowsAlt } from "react-icons/fa";

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

// --- Added for Data Science detailed view when expanded ---
const dataScienceDetails = [
  {
    title: "Technical Highlights & Methodologies",
    descriptions: [
      "Data Preparation: Cleaned and prepared large datasets for analysis using Python and Pandas.",
      "Feature Engineering: Created meaningful feature representations for customer segmentation.",
      "Clustering Algorithms: Applied K-Means clustering techniques to identify distinct customer groups.",
      "Segmentation Analysis: Interpreted cluster profiles to derive actionable insights for targeting.",
    ],
  },
  {
    title: "Tableau dashboard & Visualizations",
    descriptions: [
      "Interactive Visuals: Developed intuitive dashboards and charts to explore segment trends.",
      "Data Storytelling: Built visual narratives to communicate complex data patterns to stakeholders.",
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

const galleryItems = [
  { title: "E-Commerce App", tech: "React/Node", label: "App" },
  { title: "HR Data Reporting", tech: "Excel/SQL", label: "Report" },
  { title: "Supply Dashboard", tech: "Power BI", label: "Dashboard" },
  { title: "Web Scraper", tech: "Python", label: "Scraper" },
];

// --- LOCAL HELPER COMPONENTS ---

const SidebarCard = ({ id, title, setExpandedCard }) => (
  <Card
    onClick={() => setExpandedCard(id)}
    className="flex flex-col justify-center items-center cursor-pointer hover:border-emerald-500/50 transition-colors h-full min-h-[100px] flex-1 w-full p-4"
  >
    <h3 className="font-bold text-white text-center text-xs line-clamp-2">
      {title}
    </h3>
    <span className="text-[10px] text-emerald-400 mt-2 bg-emerald-400/10 px-2 py-1 rounded-full font-semibold flex items-center gap-1">
      <FaExpandArrowsAlt /> Expand
    </span>
  </Card>
);

const ShrinkButton = ({ setExpandedCard }) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      setExpandedCard(null);
    }}
    className="absolute top-4 right-4 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-white z-20 flex items-center gap-2 text-xs font-bold border border-slate-500 shadow-lg transition-colors"
    title="Shrink"
  >
    <FaCompressArrowsAlt /> Shrink
  </button>
);

const ExpandButton = ({ id, setExpandedCard }) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      setExpandedCard(id);
    }}
    className="absolute top-4 right-4 p-2 text-emerald-400 hover:text-white hover:bg-emerald-500/20 bg-emerald-400/10 rounded-lg z-20 transition-colors shadow-sm border border-emerald-500/20"
    title="Expand"
  >
    <FaExpandArrowsAlt size={14} />
  </button>
);

export default function ProjectsPage() {
  const [expandedCard, setExpandedCard] = useState(null);

  // --- RENDER FUNCTIONS FOR EACH CARD ---

  const renderProShop = (mode) => {
    if (mode === "sidebar")
      return (
        <SidebarCard
          id="proshop"
          title="Featured Project: ProShop"
          setExpandedCard={setExpandedCard}
        />
      );
    const isExp = mode === "expanded";

    return (
      <Card className="flex flex-col h-full relative overflow-hidden w-full">
        {/* FIXED HEADER PORTION */}
        {isExp && <ShrinkButton setExpandedCard={setExpandedCard} />}
        {!isExp && <ExpandButton id="proshop" setExpandedCard={setExpandedCard} />}

        <h3 className="font-bold text-white mb-3 uppercase text-sm shrink-0 truncate pr-24">
          Featured Project: ProShop
        </h3>

        {/* SCROLLABLE CONTENT PORTION */}
        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-2 pb-2">
          {/* Dynamic Image height based on state */}
          <div
            className={`bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 border border-slate-700 shrink-0 w-full mb-4 overflow-hidden ${
              isExp
                ? "aspect-video max-h-[45vh]"
                : "h-[140px] xl:h-[160px] 2xl:h-[180px]"
            }`}
          >
            <span className="text-xs">[Main Dashboard Image]</span>
          </div>

          <div className="flex space-x-2 mb-4 justify-center shrink-0">
            {icons.map((Icon, idx) => (
              <div
                key={idx}
                className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center p-1.5"
              >
                <img
                  src={Icon}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col shrink-0">
            <h4 className="font-bold text-white text-[11px] mb-2 uppercase tracking-wider shrink-0">
              Project Description
            </h4>
            <div className="space-y-3">
              {proShopDetails.map((detail, idx) => (
                <div key={idx}>
                  <h5 className="text-emerald-400 text-[11px] font-semibold mb-1 flex items-center gap-1.5">
                    ✓ {detail.title}
                  </h5>
                  {isExp ? (
                    <ul className="text-[10px] text-slate-400 pl-4 list-disc space-y-1">
                      {detail.descriptions.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[10px] text-slate-400 line-clamp-4 pl-4">
                      {detail.descriptions[0]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    );
  };

  const renderDataScience = (mode) => {
    if (mode === "sidebar")
      return (
        <SidebarCard
          id="datascience"
          title="Customer Segmentation"
          setExpandedCard={setExpandedCard}
        />
      );
    const isExp = mode === "expanded";

    return (
      <Card className="flex flex-col h-full relative overflow-hidden w-full">
        {/* FIXED HEADER PORTION */}
        {isExp && <ShrinkButton setExpandedCard={setExpandedCard} />}
        {!isExp && <ExpandButton id="datascience" setExpandedCard={setExpandedCard} />}

        <h3 className="font-bold text-white mb-3 uppercase text-sm shrink-0 truncate pr-24">
          Data Science Project: Segmentation
        </h3>

        {/* --- Updated logic for expanded view, mirroring the visual layout structure of image_e475b7.png --- */}
        {isExp ? (
          // NEW EXPANDED CONTENT (Single column layout like other projects)
          <div className="flex flex-col flex-1 min-h-0 w-full overflow-y-auto custom-scrollbar pr-2 pb-2">
            {/* 1. Main Visual Visual (Placeholder) at top */}
            <div className="bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 border border-slate-700 shrink-0 w-full mb-4 overflow-hidden aspect-video max-h-[45vh]">
              <span className="text-xs">[Map Dashboard Visual - Segmentation]</span>
            </div>

            {/* 2. Horizontal centered tech icons */}
            <div className="flex space-x-2 mb-4 justify-center shrink-0">
              {/* Using generic 'icons' or placeholders as defined globally. Modify as needed for Data Science specific logos. */}
              {icons.map((Icon, idx) => (
                <div key={idx} className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center p-1.5">
                  <img src={Icon} alt="icon" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>

            {/* 3. Detailed Project Description list */}
            <div className="flex flex-col shrink-0">
              <h4 className="font-bold text-white text-[11px] mb-2 uppercase tracking-wider shrink-0">
                Project Description
              </h4>
              <div className="space-y-3">
                {dataScienceDetails.map((detail, idx) => (
                  <div key={idx}>
                    <h5 className="text-emerald-400 text-[11px] font-semibold mb-1 flex items-center gap-1.5">
                      ✓ {detail.title}
                    </h5>
                    <ul className="text-[10px] text-slate-400 pl-4 list-disc space-y-1">
                      {detail.descriptions.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // RETAIN THE DEFAULT COMPACT VIEW (Two columns)
          <div className="grid grid-cols-2 gap-4 flex-1 min-h-0 h-[140px] xl:h-[160px] 2xl:h-[180px] shrink-0 w-full overflow-hidden">
            {/* Left: Map Dashboard (Placeholder) */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 text-xs p-2 h-full w-full overflow-hidden">
              [Map Dashboard]
            </div>

            {/* Right: Text Details (compact) */}
            <div className="flex flex-col justify-center overflow-hidden">
              <h4 className="font-bold text-white text-[11px] mb-1 uppercase tracking-wider">
                Tableau dashboard
              </h4>
              <p className="text-[10px] text-slate-400 mt-1 line-clamp-3">
                {"MERN-based data capture -> SQL analysis -> Tableau visualization."}
              </p>
            </div>
          </div>
        )}

      </Card>
    );
  };

  const renderModernTech = (mode) => {
    if (mode === "sidebar")
      return (
        <SidebarCard
          id="moderntech"
          title="Marketplace"
          setExpandedCard={setExpandedCard}
        />
      );
    const isExp = mode === "expanded";

    return (
      <Card className="flex flex-col h-full relative overflow-hidden w-full">
        {/* FIXED HEADER PORTION */}
        {isExp && <ShrinkButton setExpandedCard={setExpandedCard} />}
        {!isExp && <ExpandButton id="moderntech" setExpandedCard={setExpandedCard} />}

        <h3 className="font-bold text-white mb-3 uppercase text-sm shrink-0 truncate pr-24">
          Modern Tech Marketplace
        </h3>

        {/* SCROLLABLE CONTENT PORTION */}
        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-2 pb-2">
          <div
            className={`bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 border border-slate-700 shrink-0 w-full mb-4 overflow-hidden ${
              isExp
                ? "aspect-video max-h-[45vh]"
                : "h-[100px] xl:h-[120px] 2xl:h-[140px]"
            }`}
          >
            <span className="text-xs">[Main Dashboard Image]</span>
          </div>

          <div className="flex space-x-2 mb-4 justify-center shrink-0">
            {icons.map((Icon, idx) => (
              <div
                key={idx}
                className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center p-1.5"
              >
                <img
                  src={Icon}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col shrink-0">
            <h4 className="font-bold text-white text-[11px] mb-2 uppercase tracking-wider shrink-0">
              Project Description
            </h4>
            <div className="space-y-3">
              {modernTechDetails.map((detail, idx) => (
                <div key={idx}>
                  <h5 className="text-emerald-400 text-[11px] font-semibold mb-1 flex items-center gap-1.5">
                    ✓ {detail.title}
                  </h5>
                  {isExp ? (
                    <ul className="text-[10px] text-slate-400 pl-4 list-disc space-y-1">
                      {detail.descriptions.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[10px] text-slate-400 line-clamp-2 pl-4">
                      {detail.descriptions[0]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    );
  };

  const renderGallery = (mode) => {
    if (mode === "sidebar")
      return (
        <SidebarCard
          id="gallery"
          title="Project Gallery"
          setExpandedCard={setExpandedCard}
        />
      );
    const isExp = mode === "expanded";

    return (
      <Card className="flex flex-col h-full relative overflow-hidden w-full">
        {isExp && <ShrinkButton setExpandedCard={setExpandedCard} />}
        {!isExp && <ExpandButton id="gallery" setExpandedCard={setExpandedCard} />}

        <h3 className="font-bold text-white mb-3 uppercase text-sm shrink-0 truncate pr-24">
          Project Gallery (All)
        </h3>

        <div className="grid grid-cols-2 gap-3 overflow-y-auto flex-1 min-h-0 custom-scrollbar pr-2 pb-2">
          {galleryItems.map((it, i) => (
            <div key={i} className="flex flex-col h-full min-h-0">
              <div
                className={`bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 text-xs mb-2 w-full overflow-hidden ${
                  isExp ? "aspect-video" : "flex-1 min-h-[50px]"
                }`}
              >
                [{it.label}]
              </div>
              <p className="text-[10px] text-white line-clamp-1">{it.title}</p>
              <p className="text-[9px] text-slate-400">({it.tech})</p>
            </div>
          ))}
        </div>
      </Card>
    );
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col space-y-4 pb-2 h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)]">
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
          // --- DEFAULT GRID STATE ---
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 h-full min-h-0 w-full">
            {/* ProShop: 1st Col, Spans 2 Rows */}
            <div className="lg:col-span-1 lg:row-span-2 h-full min-h-0">
              {renderProShop("default")}
            </div>

            {/* Data Science: 2nd Col, Spans 2 Cols, 1st Row */}
            <div className="lg:col-start-2 lg:col-span-2 lg:row-start-1 h-full min-h-0">
              {renderDataScience("default")}
            </div>

            {/* Modern Tech: 2nd Col, 2nd Row */}
            <div className="lg:col-start-2 lg:col-span-1 lg:row-start-2 h-full min-h-0">
              {renderModernTech("default")}
            </div>

            {/* Gallery: 3rd Col, 2nd Row */}
            <div className="lg:col-start-3 lg:col-span-1 lg:row-start-2 h-full min-h-0">
              {renderGallery("default")}
            </div>
          </div>
        ) : (
          // --- EXPANDED (SEE MORE) STATE ---
          <div className="flex flex-col lg:flex-row gap-6 h-full min-h-0 w-full">
            {/* Big Expanded Card (Left Side - Non Fixed) */}
            <div className="lg:flex-[3] w-full h-full min-h-0 flex flex-col">
              {expandedCard === "proshop" && renderProShop("expanded")}
              {expandedCard === "datascience" && renderDataScience("expanded")}
              {expandedCard === "moderntech" && renderModernTech("expanded")}
              {expandedCard === "gallery" && renderGallery("expanded")}
            </div>

            {/* Stacked Sidebars (Right Side - Scrollable & Non Fixed) */}
            <div className="lg:flex-[1] w-full h-full min-h-0 flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-1 pb-2">
              {expandedCard !== "proshop" && renderProShop("sidebar")}
              {expandedCard !== "datascience" && renderDataScience("sidebar")}
              {expandedCard !== "moderntech" && renderModernTech("sidebar")}
              {expandedCard !== "gallery" && renderGallery("sidebar")}
              {expandedCard !== "gallery" && renderGallery("sidebar")}
              {expandedCard !== "gallery" && renderGallery("sidebar")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}