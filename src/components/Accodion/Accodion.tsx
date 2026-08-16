"use client";

import { useState } from "react";
import Image from "next/image";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-xl bg-[#f7f7f7] transition-all duration-300 "
          >
            {/* Header */}
            <button
              type="button"
              onClick={() => handleToggle(index)}
              className="flex w-full items-center justify-between px-5 py-4 sm:px-8 sm:py-6 md:px-6 md:py-5 lg:px-10 lg:py-7 text-left gap-4 cursor-pointer focus:outline-none"
            >
              <span className="text-base sm:text-lg md:text-lg lg:text-[22px] font-medium text-[#151827]">
                {item.title}
              </span>

              {/* Arrow SVG Container */}
              <div
                className={`w-4 h-4 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-in-out ${
                  isActive ? "rotate-0" : "rotate-270"
                }`}
              >
                <Image
                  src="/images/downarrow.svg"
                  alt="toggle arrow"
                  width={15}
                  height={15}
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                />
              </div>
            </button>

            {/* Smooth Grid Rows Height Transition Content */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                isActive
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 sm:px-8 sm:pb-6 lg:px-10 lg:pb-8">
                  <p className="text-xs sm:text-sm md:text-sm  leading-relaxed sm:leading-[1.65] text-black">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

