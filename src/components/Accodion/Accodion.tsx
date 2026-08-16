"use client";

import { useState } from "react";

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
    <div className="flex flex-col gap-6">
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-xl bg-[#f7f7f7]"
          >
            {/* Header */}
            <button
              type="button"
              onClick={() => handleToggle(index)}
              className="flex w-full items-center justify-between px-10 py-8 text-left"
            >
              <span className="text-[22px] font-medium text-[#151827]">
                {item.title}
              </span>

              <span
                className={`text-2xl transition-transform duration-300 ${
                  isActive ? "rotate-180" : "rotate-0"
                }`}
              >
               ⌄
              </span>
            </button>

            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isActive ? "max-h-max" : "max-h-0"
              }`}
            >
              <div className="px-10 pb-8">
                <p className="text-[17px] leading-[1.65] text-[#151827]">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;