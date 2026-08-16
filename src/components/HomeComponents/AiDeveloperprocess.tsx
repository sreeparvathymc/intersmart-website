"use client";

import SectionIntro from "../ReusableComponents/Sections/SectionIntro";
import ProcessSlider from "../Slider/ProcessSlider";

const AiDeveloperprocess = () => {
  return (
    <div className="bg-[#182434] text-white py-[54px] md:py-[75px] xl:py-25">
      <div className="container-custom">
        <SectionIntro
          introTitle="Our AI Development Process"
          introText="Developing an AI solution according to your needs involves a structured approach to assure its success and effectiveness. Our expert AI developers ensure the project's success by following a systematic process in building your artificial intelligence solution."
          textclass="max-w-[660px]"
        />

        <ProcessSlider />
      </div>
    </div>
  );
};

export default AiDeveloperprocess;