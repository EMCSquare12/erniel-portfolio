import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export const ProjectGalleryItem = ({ title, images, projectUrl }) => {
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

  return (
    <div className="relative group cursor-pointer">
      {/* Main Thumbnail */}
      {images && images.length > 0 ? (
        <img
          src={images[0]}
          alt={title}
          className="bg-slate-800 h-24 w-full rounded-lg mb-2 border border-slate-700 shrink-0 object-cover group-hover:ring-2 group-hover:ring-blue-500 transition-all"
        />
      ) : (
        <div className="bg-slate-800 h-24 w-full rounded-lg mb-2 border border-slate-700 flex items-center justify-center group-hover:ring-2 group-hover:ring-blue-500 transition-all">
          <span className="text-slate-500 text-xs">No Image</span>
        </div>
      )}
      <p className="text-xs text-center text-slate-400 group-hover:text-white transition-colors">
        {title}
      </p>

      {/* Tooltip Popup */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 md:w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-100">
        <div className="bg-[#1c2128] border border-slate-600 rounded-xl p-2 shadow-2xl relative">
          {/* Image Slider */}
          <div className="h-40 overflow-hidden rounded-lg relative group/slider">
            {images && images.length > 0 ? (
              <img
                src={images[currentIndex]}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-xs text-slate-500">
                No Image
              </div>
            )}

            {/* Web Link Overlay */}
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute top-2 right-2 p-2 bg-black/70 backdrop-blur-sm rounded-lg text-white hover:bg-blue-500 hover:scale-110 transition-all z-10 flex items-center gap-2"
                title="Open to Web"
              >
                <FaExternalLinkAlt size={12} />
              </a>
            )}

            {/* Slider Controls (Shows if more than 1 image) */}
            {images && images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-1 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover/slider:opacity-100 hover:bg-blue-500 transition-all"
                >
                  <FaChevronLeft size={12} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover/slider:opacity-100 hover:bg-blue-500 transition-all"
                >
                  <FaChevronRight size={12} />
                </button>
              </>
            )}
          </div>
          {/* Pointer Arrow */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1c2128] border-b border-r border-slate-600 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};
