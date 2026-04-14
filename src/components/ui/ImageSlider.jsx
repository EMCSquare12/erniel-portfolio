import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ImageSlider = ({ images, isExp, customClass }) => {
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
    `relative bg-slate-800 rounded-lg border border-slate-700 shrink-0 w-full mb-4 overflow-hidden group/slider ${isExp ? "aspect-video max-h-[45vh]" : "h-[140px] xl:h-[160px] 2xl:h-[180px]"}`;

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
        className="block w-full h-full object-cover transition-transform duration-500 group-hover/slider:scale-105"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover/slider:opacity-100 hover:bg-emerald-500 transition-all z-10"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 text-white rounded-full opacity-0 group-hover/slider:opacity-100 hover:bg-emerald-500 transition-all z-10"
          >
            <FaChevronRight size={12} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? "bg-emerald-400 w-3" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
