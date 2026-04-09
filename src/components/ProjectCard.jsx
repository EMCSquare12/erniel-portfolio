import React from "react";
import { Card } from "./Card";
import { FaCompressArrowsAlt } from "react-icons/fa";

export const ProjectCard = ({
  id,
  expandedCard,
  setExpandedCard,
  title,
  details,
  icons,
  className = "",
}) => {
  const isExpanded = expandedCard === id;
  const isSidebar = expandedCard !== null && expandedCard !== id;
  const isDefault = expandedCard === null;

  // VIEW: When shoved to the sidebar
  if (isSidebar) {
    return (
      <Card
        className={`flex flex-col justify-center items-center cursor-pointer border border-transparent hover:border-emerald-500/50 transition-colors h-full min-h-0 w-full p-4 ${className}`}
        onClick={() => setExpandedCard(id)}
      >
        <h3 className="font-bold text-white text-center text-xs line-clamp-2">
          {title}
        </h3>
        <span className="text-[10px] text-emerald-400 mt-2 bg-emerald-400/10 px-2 py-1 rounded-full font-semibold">
          View
        </span>
      </Card>
    );
  }

  // VIEW: Default Grid OR Expanded Focus
  return (
    <Card
      className={`flex flex-col h-full w-full relative overflow-hidden p-5 ${className}`}
    >
      {/* Shrink Button (Only visible in Expanded Mode) */}
      {isExpanded && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpandedCard(null);
          }}
          className="absolute top-4 right-4 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-white z-20 transition-colors flex items-center gap-2 text-xs font-bold shadow-lg border border-slate-500"
        >
          <FaCompressArrowsAlt /> Shrink
        </button>
      )}

      {/* Header */}
      <h3 className="font-bold text-white mb-2 uppercase text-sm pr-24 shrink-0">
        {title}
      </h3>

      {/* Image Placeholder */}
      <div
        className={`bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 border border-slate-700 shrink-0 w-full transition-all duration-300 ${isExpanded ? "h-1/2 mb-4" : "flex-1 min-h-[160px] mb-3"}`}
      >
        <span className="text-xs">[Main Dashboard Image]</span>
      </div>

      {/* Icons */}
      {icons && (
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
      )}

      {/* Description Section */}
      <div
        className={`flex flex-col min-h-0 ${isExpanded ? "flex-1" : "shrink-0 h-[90px]"}`}
      >
        <h4 className="font-bold text-white text-[11px] mb-1 uppercase tracking-wider shrink-0">
          Project Description
        </h4>

        <div
          className={`pr-2 overflow-y-auto flex-1 space-y-3 [&::-webkit-scrollbar]:hidden ${isExpanded ? "" : "overflow-hidden"}`}
        >
          {details?.map((detail, idx) => (
            <div key={idx}>
              <h5 className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1.5 mb-1">
                ✓ {detail.title}
              </h5>
              {isExpanded ? (
                <ul className="text-[10px] text-slate-400 space-y-1 pl-4 list-disc">
                  {detail.descriptions?.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-[10px] text-slate-400 line-clamp-2 pl-4">
                  {detail.descriptions?.[0]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* See More Button (Only visible in Default Mode) */}
        {isDefault && (
          <button
            onClick={() => setExpandedCard(id)}
            className="text-emerald-400 text-[10px] mt-2 hover:text-emerald-300 transition-colors self-start font-bold uppercase shrink-0 bg-emerald-400/10 px-3 py-1.5 rounded"
          >
            See More &rarr;
          </button>
        )}
      </div>
    </Card>
  );
};
