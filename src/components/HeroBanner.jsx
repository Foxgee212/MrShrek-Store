import React, { useState, useEffect } from "react";
import { useHero } from "../context/HeroContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

function HeroBanner() {
  const { heroes } = useHero();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-slide every 5s (unless paused)
  useEffect(() => {
    if (heroes.length > 1 && !paused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % heroes.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [heroes, paused]);

  if (heroes.length === 0) {
    return (
      <div className="relative bg-gray-200 h-64 md:h-[500px] flex items-center justify-center rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-600">
          No Hero Banner Added
        </h2>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-64 md:h-[500px] overflow-hidden rounded-xl shadow-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {heroes.map((hero, idx) => (
        <div
          key={hero.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={hero.image}
            alt={hero.title}
            className="w-full h-full object-scale-down"
          />

          {/* Overlay with content */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg animate-fadeIn">
              {hero.title}
            </h2>
            {hero.subtitle && (
              <p className="text-lg md:text-2xl text-gray-200 mt-3 max-w-2xl animate-fadeIn delay-200">
                {hero.subtitle}
              </p>
            )}
            {hero.ctaText && (
              <a
                href={hero.ctaLink || "#"}
                className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 animate-fadeIn delay-500"
              >
                {hero.ctaText}
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {heroes.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + heroes.length) % heroes.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white transition"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % heroes.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white transition"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      {/* Indicators (dots) */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {heroes.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              current === idx ? "bg-yellow-500" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBanner;
