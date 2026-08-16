"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import img1 from "../../../public/images/arrow1.png";
import img2 from "../../../public/images/arrow2.png";

type ProcessStep = {
  id: string;
  stepNumber: string;
  tabTitle: string;
  description: string;
  image: string;
};

const processSteps: ProcessStep[] = [
  {
    id: "01",
    stepNumber: "01",
    tabTitle: "Identifying The Problem",
    description:
      "The first step of building your custom AI solutions begins with identifying the problems or opportunities that the system can solve. Our team runs a thorough analysis to examine the pain points of the project and create a business case. Analyzing the current practices and data sets is necessary to identify areas for implementing automation and development.",
    image: "/images/Ai-devimg.jpg",
  },
  {
    id: "02",
    stepNumber: "02",
    tabTitle: "Preparing The Data",
    description:
      "Data preparation involves gathering, cleaning, and structuring data to make it usable for model training. Our AI experts filter out inconsistencies, handle missing values, and prepare standard datasets to ensure peak accuracy and high model reliability.",
    image: "/images/Ai-devimg.jpg",
  },
  {
    id: "03",
    stepNumber: "03",
    tabTitle: "The Suited AI Model",
    description:
      "We carefully evaluate and select the best artificial intelligence algorithms and machine learning frameworks tailored to your business needs, dataset complexity, and computational requirements.",
    image: "/images/Ai-devimg.jpg",
  },
  {
    id: "04",
    stepNumber: "04",
    tabTitle: "Training The Model",
    description:
      "Through iterative training sessions and hyperparameters optimization, our machine learning engineers tune the model to reach optimal prediction accuracy, performance, and operational efficiency.",
    image: "/images/Ai-devimg.jpg",
  },
  {
    id: "05",
    stepNumber: "05",
    tabTitle: "Identifying The Problem2",
    description:
      "The first step of building your custom AI solutions begins with identifying the problems or opportunities that the system can solve. Our team runs a thorough analysis to examine the pain points of the project and create a business case. Analyzing the current practices and data sets is necessary to identify areas for implementing automation and development.",
    image: "/images/Ai-devimg.jpg",
  },
  {
    id: "06",
    stepNumber: "06",
    tabTitle: "Identifying The Problem3",
    description:
      "The first step of building your custom AI solutions begins with identifying the problems or opportunities that the system can solve. Our team runs a thorough analysis to examine the pain points of the project and create a business case. Analyzing the current practices and data sets is necessary to identify areas for implementing automation and development.",
    image: "/images/Ai-devimg.jpg",
  },
  {
    id: "07",
    stepNumber: "07",
    tabTitle: "Identifying The Problem4",
    description:
      "The first step of building your custom AI solutions begins with identifying the problems or opportunities that the system can solve. Our team runs a thorough analysis to examine the pain points of the project and create a business case. Analyzing the current practices and data sets is necessary to identify areas for implementing automation and development.",
    image: "/images/Ai-devimg.jpg",
  },
];

const ProcessSlider = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;

    if (activeTab === 0) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (activeTab === processSteps.length - 1) {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      return;
    }

    const activeBtn = container.children[activeTab] as HTMLElement;
    if (activeBtn) {
      const containerLeft = container.scrollLeft;
      const containerRight = containerLeft + container.clientWidth;
      const btnLeft = activeBtn.offsetLeft;
      const btnRight = btnLeft + activeBtn.offsetWidth;

      if (btnLeft < containerLeft) {
        container.scrollTo({
          left: Math.max(0, btnLeft - 24),
          behavior: "smooth",
        });
      } else if (btnRight > containerRight) {
        container.scrollTo({
          left: btnRight - container.clientWidth + 24,
          behavior: "smooth",
        });
      }
    }
  }, [activeTab]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % processSteps.length);
  };

  const currentStep = processSteps[activeTab];

  return (
    <div>
      <div className="mt-12   pb-4">
        <div className="flex items-center justify-end mb-6">
          <div className="flex items-center gap-4 text-gray-300">
            <button
              type="button"
              onClick={handlePrev}
              className=" cursor-pointer w-[45px] h-[45px] rounded-full  flex items-center justify-center hover:opacity-50 transition"
              aria-label="Previous step"
            >
              <Image src={img1} alt="img" width={45} height={45} />
            </button>
            <span className=" text-lg  md:text-xl font-medium tracking-wide">
              {activeTab + 1}/{processSteps.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className=" cursor-pointer w-[45px] h-[45px] rounded-full flex items-center justify-center  hover:opacity-50 transition"
              aria-label="Next step"
            >
              <Image src={img2} alt="img" width={45} height={45} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto gap-8 lg:gap-20 xl:gap-46   scroll-smooth horizontal-scroller select-none cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-t border-gray-700/60 pt-4"
        >
          {processSteps.map((step, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={step.id}
                onClick={() => setActiveTab(index)}
                className="process-btns relative cursor-pointer  text-sm md:text-base 2xl:text-xl  whitespace-nowrap font-medium text-white transition-all duration-300"
              >
                {isActive && (
                  <span className="absolute -top-[17px] left-0 right-0 h-[2px] bg-white transition-all duration-300" />
                )}
                {step.tabTitle}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1  gap-6 xl:gap-8 items-start md:grid-cols-[6fr_6fr] lg:grid-cols-[6fr_6fr] xl:grid-cols-[4.5fr_7.5fr]">
        <div className=" bg-white text-gray-900 rounded-2xl px-[38px] py-[30px] shadow-xl transition-all duration-300">
          <span className="text-xl font-medium text-black block mb-3.75">
            {currentStep.stepNumber}
          </span>
          <p className="text-black text-sm md:text-base leading-relaxed">
            {currentStep.description}
          </p>
        </div>

        <div className=" relative h-[320px] md:h-[420px] w-full rounded-[8px] overflow-hidden shadow-2xl">
          <Image
            src={currentStep.image}
            alt={currentStep.tabTitle}
            fill
            className="object-cover transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessSlider;
