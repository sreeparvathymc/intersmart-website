"use client";

import { useEffect, useState } from "react";
import Button from "../ReusableComponents/Buttons/Button";

type Slide = {
  title: string;
  description: string;


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
    //  h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]
    <section className="relative w-full

      md:aspect-[16/10]
      min-[320px]:max-[401px]:aspect-[16/19]

            min-[401px]:max-[480px]:aspect-[16/15]


      aspect-[16/10]

      overflow-hidden">
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
            {/* {slide.bgImage && (
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                }}
              />
            )} */}



            {/* Slide Content */}
            <div className="relative z-10 flex h-full items-center pt-16 sm:pt-20 md:pt-24 pb-12">
              <div className="container-custom mx-auto px-4 sm:px-6 md:px-8">
                <div className="max-w-[804px]">



                  <h1 className="mb-3 sm:mb-5 lg:mb-6 text-2xl sm:text-4xl md:text-[40px] lg:text-6xl font-bold leading-tight text-white">
                    {slide.title}
                  </h1>

                  <p className="mb-6 sm:mb-8 max-w-[650px] leading-[24px] text-xs  md:text-base leading-relaxed text-gray-200">
                    {slide.description}
                  </p>



                  <Button
                  text=" Reach us"
                  varient="secondary"
                  link="/"
                  className=" py-2.5 md:py-3 px-5 md-px-4 font-medium
                  md:text-sm cursor-pointer xl:text-base text-sm  min-[320px]:max-[401px]:text-[12px]"
                  />



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
            className={`h-2 w-2 rounded-full transition-all ${
              activeIndex === index
                ? " bg-white"
                : " bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
