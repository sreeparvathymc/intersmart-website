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
    <section className="relative h-[800px] w-full overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-[700px]">
                  <h1 className="mb-6 text-5xl font-semibold text-white">
                    {slide.title}
                  </h1>

                  <p className="mb-8 max-w-[600px] text-lg leading-7 text-white">
                    {slide.description}
                  </p>

                  <button className="rounded-full bg-white px-8 py-4 text-black transition hover:bg-black hover:text-white">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              activeIndex === index
                ? "w-6 bg-white"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;