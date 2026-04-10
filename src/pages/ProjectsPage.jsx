// src/pages/ProjectsPage.jsx
import React, { useState } from "react";
import {
  IconReactJs as ReactJs,
  IconNodeJs as NodeJs,
  IconMongoDb as MongoDb,
  IconExpressJs as ExpressJs,
  IconGithub as Github,
  ProjectLiveBingoMainPage as MainPage,
  ProjectLiveBingoCreateRoom as CreateRoom,
  ProjectLiveBingoHostPage as HostPage,
  ProjectLiveBingoJoinRoom as JoinRoom,
  ProjectLiveBingoPlayerRoom as PlayerRoom,
} from "../assets";
import {
  FaExternalLinkAlt,
  FaCompressArrowsAlt,
  FaExpandArrowsAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Card } from "../components/Card";

const techIcons = [
  { src: MongoDb, name: "MongoDB" },
  { src: ExpressJs, name: "Express.js" },
  { src: ReactJs, name: "React" },
  { src: NodeJs, name: "Node.js" },
];
const mockImages = [MainPage, CreateRoom, JoinRoom, HostPage, PlayerRoom];

const ImageSlider = ({ images, isExp, customClass }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const containerClass =
    customClass ||
    `relative bg-slate-800 rounded-lg border border-slate-700 shrink-0 w-full mb-4 overflow-hidden group/slider ${
      isExp
        ? "aspect-video max-h-[45vh]"
        : "h-[140px] xl:h-[160px] 2xl:h-[180px]"
    }`;

  if (!images || images.length === 0) {
    return (
      <div className={`${containerClass} flex items-center justify-center`}>
        <span className="text-xs text-slate-400">[No Images Available]</span>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="block w-full h-full object-cover transition-transform duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover/slider:opacity-100 hover:bg-emerald-500 transition-all z-10 cursor-pointer"
            title="Previous Image"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover/slider:opacity-100 hover:bg-emerald-500 transition-all z-10 cursor-pointer"
            title="Next Image"
          >
            <FaChevronRight size={12} />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? "bg-emerald-400 w-3" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const proShopDetails = [
  {
    title: "Modern Tech Marketplace",
    descriptions: [
      "A high-performance e-commerce platform for consumer electronics, combining advanced inventory management with a secure, user-centric shopping experience.",
    ],
  },
  {
    title: "Frontend Technical Highlights",
    descriptions: [
      "Responsive Mobile-First Design: Implemented fluid layouts and media queries to ensure a seamless user experience across all devices, prioritizing performance and readability on mobile screens.",
      "Global State & Data Fetching: Managed complex application states and streamlined asynchronous API interactions using Redux, ensuring a predictable and centralized data flow.",
      "Real-Time Updates: Integrated Socket.IO to provide users with instant, live shipping status notifications without requiring page refreshes.",
      "Performance Optimization: Developed a custom Debounce hook to throttle API requests during search and category filtering, significantly reducing server load and improving UI responsiveness.",
      "Seamless Data Loading: Implemented Infinite Scroll for a modern, fluid browsing experience, eliminating the friction of traditional pagination.",
      "Secure Payment Processing: Integrated the Stripe API to handle sensitive transaction data securely, supporting a robust and reliable checkout workflow.",
      "Flexible Authentication: Built a versatile login system offering both traditional email/password accounts and streamlined Google OAuth for a frictionless user onboarding experience.",
    ],
  },
  {
    title: "Backend Technical Highlights",
    descriptions: [
      "Database Management: Leveraged MongoDB and Mongoose to architect a flexible, schema-based NoSQL data model, ensuring efficient data storage and retrieval.",
      "Secure Authentication: Implemented JSON Web Tokens (JWT) for stateless user authentication, providing a secure method for transmitting verified identity between the client and server.",
      "Role-Based Access Control (RBAC): Established strict Authorization protocols to differentiate between standard clients and administrative users, securing sensitive endpoints and managing user permissions. ",
      "RESTful API Development: Engineered a structured and scalable API to facilitate seamless communication between the frontend and the database, following industry-standard design patterns for maintainability.",
    ],
  },
];

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
    // Ensures exact 3-item fit with gap-4 without shrinking if more exist
    className="flex flex-col justify-center items-center cursor-pointer hover:border-emerald-500/50 transition-colors min-h-[100px] h-[120px] lg:h-[calc((100%-2rem)/3)] shrink-0 w-full p-4 group"
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
    className="absolute top-4 right-4 p-2 text-emerald-400 hover:text-white hover:bg-emerald-500/20 bg-emerald-400/10 rounded-lg z-20 transition-all shadow-sm border border-emerald-500/20 opacity-0 group-hover:opacity-100"
    title="Expand"
  >
    <FaExpandArrowsAlt size={14} />
  </button>
);

export default function ProjectsPage() {
  const [expandedCard, setExpandedCard] = useState(null);

  // Show scrollbar only when hovering exactly over the scrollable area
  const hoverScrollbarStyles = `
    .hover-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
    }
    .hover-scrollbar:hover {
      scrollbar-color: #475569 transparent;
    }
    .hover-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .hover-scrollbar::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 8px;
    }
    .hover-scrollbar::-webkit-scrollbar-thumb {
      background-color: transparent;
      border-radius: 8px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }
    .hover-scrollbar:hover::-webkit-scrollbar-thumb {
      background-color: #475569;
    }
    .hover-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: #10b981 !important;
    }
  `;

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
      <Card className="group flex flex-col h-full relative overflow-hidden w-full">
        {isExp && <ShrinkButton setExpandedCard={setExpandedCard} />}
        {!isExp && (
          <ExpandButton id="proshop" setExpandedCard={setExpandedCard} />
        )}

        <h3 className="font-bold text-white mb-3 uppercase text-sm shrink-0 whitespace-nowrap pr-24">
          Featured Project: ProShop
        </h3>

        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto hover-scrollbar pb-2">
          <ImageSlider images={mockImages} isExp={isExp} />

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
              <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center p-1 hover:bg-slate-700 hover:border-slate-500 transition-colors cursor-pointer text-white">
                <img
                  src={Github}
                  alt="GitHub Repository"
                  title="GitHub Repository"
                  className="w-full h-full object-contain"
                />
              </div>
              <div
                className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center p-1 hover:bg-slate-700 hover:border-slate-500 transition-colors cursor-pointer text-white"
                title="External Link"
              >
                <FaExternalLinkAlt size={12} />
              </div>
            </div>
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
      <Card className="group flex flex-col h-full relative overflow-hidden w-full">
        {isExp && <ShrinkButton setExpandedCard={setExpandedCard} />}
        {!isExp && (
          <ExpandButton id="datascience" setExpandedCard={setExpandedCard} />
        )}

        <h3 className="font-bold text-white mb-3 uppercase text-sm shrink-0 truncate pr-24">
          Data Science Project: Segmentation
        </h3>

        {isExp ? (
          <div className="flex flex-col flex-1 min-h-0 w-full overflow-y-auto hover-scrollbar pr-2 pb-2">
            <ImageSlider
              images={mockImages}
              isExp={true}
              customClass="relative bg-slate-800 rounded-lg border border-slate-700 shrink-0 w-full mb-4 overflow-hidden aspect-video max-h-[45vh] group/slider"
            />

            <div className="flex justify-between items-center mb-4 shrink-0">
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

              <div className="flex space-x-2">
                <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center p-1 hover:bg-slate-700 hover:border-slate-500 transition-colors cursor-pointer text-white">
                  <img
                    src={Github}
                    alt="GitHub Repository"
                    title="GitHub Repository"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div
                  className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center p-1 hover:bg-slate-700 hover:border-slate-500 transition-colors cursor-pointer text-white"
                  title="External Link"
                >
                  <FaExternalLinkAlt size={12} />
                </div>
              </div>
            </div>

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
          <div className="grid grid-cols-2 gap-4 flex-1 min-h-0 h-[140px] xl:h-[160px] 2xl:h-[180px] shrink-0 w-full overflow-hidden">
            <ImageSlider
              images={mockImages}
              isExp={isExp}
              customClass="relative bg-slate-800 rounded-lg border border-slate-700 h-full w-full overflow-hidden group/slider"
            />
            <div className="flex flex-col justify-start overflow-y-auto hover-scrollbar pr-2 pb-2">
              <h4 className="font-bold text-white text-[11px] mb-1 uppercase tracking-wider">
                Tableau dashboard
              </h4>
              <p className="text-[10px] text-slate-400 mt-1">
                {
                  "MERN-based data capture -> SQL analysis -> Tableau visualization."
                }
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
      <Card className="group flex flex-col h-full relative overflow-hidden w-full">
        {isExp && <ShrinkButton setExpandedCard={setExpandedCard} />}
        {!isExp && (
          <ExpandButton id="moderntech" setExpandedCard={setExpandedCard} />
        )}

        <h3 className="font-bold text-white mb-3 uppercase text-sm shrink-0 whitespace-nowrap pr-24">
          ProShop - Admin Dashboard
        </h3>

        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto hover-scrollbar pr-2 pb-2">
          <ImageSlider images={mockImages} isExp={isExp} />

          <div className="flex justify-between items-center mb-4 shrink-0">
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

            <div className="flex space-x-2">
              <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center p-1 hover:bg-slate-700 hover:border-slate-500 transition-colors cursor-pointer text-white">
                <img
                  src={Github}
                  alt="GitHub Repository"
                  title="GitHub Repository"
                  className="w-full h-full object-contain"
                />
              </div>
              <div
                className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center p-1 hover:bg-slate-700 hover:border-slate-500 transition-colors cursor-pointer text-white"
                title="External Link"
              >
                <FaExternalLinkAlt size={12} />
              </div>
            </div>
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
      <Card className="group flex flex-col h-full relative overflow-hidden w-full">
        {isExp && <ShrinkButton setExpandedCard={setExpandedCard} />}
        {!isExp && (
          <ExpandButton id="gallery" setExpandedCard={setExpandedCard} />
        )}

        <h3 className="font-bold text-white mb-3 uppercase text-sm shrink-0 whitespace-nowrap pr-24">
          Project Gallery (All)
        </h3>

        <div className="grid grid-cols-2 gap-3 overflow-y-auto flex-1 min-h-0 hover-scrollbar pr-2 pb-2">
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
    <>
      <style dangerouslySetInnerHTML={{ __html: hoverScrollbarStyles }} />

      <div className="max-w-7xl mx-auto flex flex-col space-y-4 pb-2 h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)]">
        <h2 className="text-2xl font-bold text-white tracking-wide uppercase shrink-0">
          FEATURED PORTFOLIO{" "}
          <span className="text-slate-400 font-light normal-case">
            | MERN Stack & Data Analytics
          </span>
        </h2>

        <div className="flex-1 min-h-0 w-full overflow-hidden">
          {expandedCard === null ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 h-full min-h-0 w-full">
              <div className="lg:col-span-1 lg:row-span-2 h-full min-h-0">
                {renderProShop("default")}
              </div>
              <div className="lg:col-start-2 lg:col-span-2 lg:row-start-1 h-full min-h-0">
                {renderDataScience("default")}
              </div>
              <div className="lg:col-start-2 lg:col-span-1 lg:row-start-2 h-full min-h-0">
                {renderModernTech("default")}
              </div>
              <div className="lg:col-start-3 lg:col-span-1 lg:row-start-2 h-full min-h-0">
                {renderGallery("default")}
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6 h-full min-h-0 w-full">
              <div className="lg:flex-[3] w-full h-full min-h-0 flex flex-col">
                {expandedCard === "proshop" && renderProShop("expanded")}
                {expandedCard === "datascience" &&
                  renderDataScience("expanded")}
                {expandedCard === "moderntech" && renderModernTech("expanded")}
                {expandedCard === "gallery" && renderGallery("expanded")}
              </div>

              {/* Using flex column layout with strict heights to allow scroll for extra items */}
              <div className="lg:flex-[1] w-full h-full min-h-0 flex flex-col gap-4 overflow-y-auto hover-scrollbar pr-1 pb-2">
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
    </>
  );
}
