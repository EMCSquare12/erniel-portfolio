import React, { useState } from "react";
import {
  IconReactJs as ReactJs,
  IconNodeJs as NodeJs,
  IconMongoDb as MongoDb,
  IconExpressJs as ExpressJs,
} from "../assets";

import { Card } from "../components/Card";
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
    className="flex flex-col justify-center items-center cursor-pointer hover:border-emerald-500/50 transition-colors h-full min-h-0 w-full p-4"
  >
    <h3 className="font-bold text-white text-center text-xs line-clamp-2">
      {title}
    </h3>
    <span className="text-[10px] text-emerald-400 mt-2 bg-emerald-400/10 px-2 py-1 rounded-full font-semibold">
      View
    </span>
  </Card>
);

const ShrinkButton = ({ setExpandedCard }) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      setExpandedCard(null);
    }}
    className="absolute top-4 right-4 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-white z-20 flex items-center gap-2 text-xs font-bold border border-slate-500 shadow-lg"
  >
    <FaCompressArrowsAlt /> Shrink
  </button>
);

const SeeMoreButton = ({ id, setExpandedCard }) => (
  <button
    onClick={() => setExpandedCard(id)}
    className="absolute bottom-5 left-5 text-emerald-400 text-[10px] hover:text-emerald-300 font-bold uppercase bg-emerald-400/10 px-3 py-1.5 rounded z-10"
  >
    See More &rarr;
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
      <Card
        className={`flex flex-col h-full relative overflow-hidden p-5 w-full ${!isExp ? "pb-16" : ""}`}
      >
        {isExp && <ShrinkButton setExpandedCard={setExpandedCard} />}
        <h3 className="font-bold text-white mb-2 uppercase text-sm shrink-0">
          Featured Project: ProShop
        </h3>

        {/* Enforced 160px height for main image */}
        <div className="bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 border border-slate-700 shrink-0 w-full mb-3 h-[160px] min-h-[160px]">
          <span className="text-xs">[Main Dashboard Image]</span>
        </div>

        <div className="flex space-x-2 mb-3 justify-center shrink-0">
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

        <div className="flex flex-col flex-1 min-h-0">
          <h4 className="font-bold text-white text-[11px] mb-1 uppercase tracking-wider shrink-0">
            Project Description
          </h4>
          <div className="overflow-y-auto flex-1 pr-2 space-y-3 [&::-webkit-scrollbar]:hidden">
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

        {!isExp && (
          <SeeMoreButton id="proshop" setExpandedCard={setExpandedCard} />
        )}
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
      <Card
        className={`flex flex-col h-full relative overflow-hidden p-5 w-full ${!isExp ? "pb-16" : ""}`}
      >
        {isExp && <ShrinkButton setExpandedCard={setExpandedCard} />}
        <h3 className="font-bold text-white mb-2 uppercase text-sm pr-20 shrink-0">
          Data Science Project: Segmentation
        </h3>

        {/* Enforced 160px height matching ProShop */}
        <div className="grid grid-cols-2 gap-4 shrink-0 w-full mb-3 h-[160px] min-h-[160px]">
          <div className="bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 text-xs p-2 h-full">
            [Map Dashboard]
          </div>
          <div className="bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 text-xs p-2 h-full">
            [Bar Chart Dashboard]
          </div>
        </div>

        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto [&::-webkit-scrollbar]:hidden pr-2">
          <h4 className="font-bold text-white text-xs mb-1 shrink-0">
            Tableau dashboard
          </h4>
          <p className="text-[10px] text-slate-400">
            MERN-based data capture -&gt; SQL analysis -&gt; Tableau
            visualization.
          </p>
        </div>

        {!isExp && (
          <SeeMoreButton id="datascience" setExpandedCard={setExpandedCard} />
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
      <Card
        className={`flex flex-col h-full relative overflow-hidden p-5 w-full ${!isExp ? "pb-16" : ""}`}
      >
        {isExp && <ShrinkButton setExpandedCard={setExpandedCard} />}
        <h3 className="font-bold text-white mb-2 uppercase text-sm pr-20 shrink-0">
          Modern Tech Marketplace
        </h3>

        {/* Enforced 160px height */}
        <div className="bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 border border-slate-700 shrink-0 w-full mb-3 h-[160px] min-h-[160px]">
          <span className="text-xs">[Main Dashboard Image]</span>
        </div>

        <div className="flex space-x-2 mb-3 justify-center shrink-0">
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

        <div className="flex flex-col flex-1 min-h-0">
          <h4 className="font-bold text-white text-[11px] mb-1 uppercase tracking-wider shrink-0">
            Project Description
          </h4>
          <div className="overflow-y-auto flex-1 pr-2 space-y-3 [&::-webkit-scrollbar]:hidden">
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

        {!isExp && (
          <SeeMoreButton id="moderntech" setExpandedCard={setExpandedCard} />
        )}
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
      <Card
        className={`flex flex-col h-full relative overflow-hidden p-5 w-full ${!isExp ? "pb-16" : ""}`}
      >
        {isExp && <ShrinkButton setExpandedCard={setExpandedCard} />}
        <h3 className="font-bold text-white mb-3 uppercase text-sm pr-20 shrink-0">
          Project Gallery (All)
        </h3>

        <div className="grid grid-cols-2 gap-3 overflow-y-auto flex-1 min-h-0 [&::-webkit-scrollbar]:hidden pr-2">
          {galleryItems.map((it, i) => (
            <div key={i} className="flex flex-col h-full min-h-0">
              <div
                className={`bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 text-xs mb-1 ${isExp ? "h-[160px] min-h-[160px]" : "h-16"}`}
              >
                [{it.label}]
              </div>
              <p className="text-[10px] text-white line-clamp-1">{it.title}</p>
              <p className="text-[9px] text-slate-400">({it.tech})</p>
            </div>
          ))}
        </div>

        {!isExp && (
          <SeeMoreButton id="gallery" setExpandedCard={setExpandedCard} />
        )}
      </Card>
    );
  };

  return (
    // Restricts the height to 100vh minus the padding/header space. NO outer scrollbar.
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
          // --- DEFAULT GRID STATE --- (Based on Sketch)
          // 3 Columns, 2 Rows
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 h-full min-h-0 w-full">
            {/* ProShop: Span 2 Rows, Col 1 */}
            <div className="lg:col-span-1 lg:row-span-2 h-full min-h-0">
              {renderProShop("default")}
            </div>

            {/* Data Science: Span 2 Cols, Row 1 */}
            <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 h-full min-h-0">
              {renderDataScience("default")}
            </div>

            {/* Modern Tech: Col 2, Row 2 */}
            <div className="lg:col-span-1 lg:col-start-2 lg:row-start-2 h-full min-h-0">
              {renderModernTech("default")}
            </div>

            {/* Gallery: Col 3, Row 2 */}
            <div className="lg:col-span-1 lg:col-start-3 lg:row-start-2 h-full min-h-0">
              {renderGallery("default")}
            </div>
          </div>
        ) : (
          // --- EXPANDED (SEE MORE) STATE ---
          <div className="flex flex-col lg:flex-row gap-6 h-full min-h-0 w-full">
            {/* Big Expanded Card (Left Side) */}
            <div className="lg:w-3/4 h-full min-h-0 flex flex-col">
              {expandedCard === "proshop" && renderProShop("expanded")}
              {expandedCard === "datascience" && renderDataScience("expanded")}
              {expandedCard === "moderntech" && renderModernTech("expanded")}
              {expandedCard === "gallery" && renderGallery("expanded")}
            </div>

            {/* Stacked Sidebars (Right Side) */}
            <div className="lg:w-1/4 h-full min-h-0 flex flex-col gap-4 overflow-y-auto [&::-webkit-scrollbar]:hidden pr-1 pb-2">
              {expandedCard !== "proshop" && renderProShop("sidebar")}
              {expandedCard !== "datascience" && renderDataScience("sidebar")}
              {expandedCard !== "moderntech" && renderModernTech("sidebar")}
              {expandedCard !== "gallery" && renderGallery("sidebar")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
