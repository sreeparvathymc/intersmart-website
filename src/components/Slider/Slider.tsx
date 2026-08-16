"use client";

import { useEffect, useState } from "react";

type Slide = {
  title: string;
  description: string;
  buttonText: string;
  bgImage: string;
};

type SliderProps = {
  slides: Slide[];
};

const Slider = ({ slides }: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Slide Background Image overlay */}
            {slide.bgImage && (
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                }}
              />
            )}

            {/* Slide Content */}
            <div className="relative z-10 flex h-full items-center pt-16 sm:pt-20 md:pt-24 pb-12">
              <div className="container-custom mx-auto px-4 sm:px-6 md:px-8">
                <div className="max-w-[700px]">
                  <h1 className="mb-3 sm:mb-5 lg:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    {slide.title}
                  </h1>

                  <p className="mb-6 sm:mb-8 max-w-[600px] text-xs sm:text-base md:text-lg leading-relaxed text-gray-200">
                    {slide.description}
                  </p>

                  <button className="rounded-full bg-white px-5 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-base font-semibold text-black transition hover:bg-gray-200 shadow-md">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index
                ? "w-6 sm:w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;