import Image from "next/image";
import SectionIntro from "../ReusableComponents/Sections/SectionIntro";
import image1 from "../../../public/images/Ai-sevices.svg";
import AccordionServices from "../Accodion/AccodionServices";
import Button from "../ReusableComponents/Buttons/Button";

const AiServices = () => {
  return (
    <section className="py-[54px] md:py-[75px] xl:py-25">
      <div className="container-custom">
        <SectionIntro
          introTitle="Our Artificial Intelligence Services"
          introText="As one of India's leading AI development companies, SysAlly offers the following services to businesses."
          textclass="max-w-[647px] mx-auto"
        />

        <div className="w-full flex flex-wrap  justify-between my-8 sm:my-10 md:my-14">
          {/* Left Illustration Graphic */}
          <div className=" flex  items-center xl:w-[calc(100%_-690px)] md:w-[45%]  w-[80%] mx-auto md:mx-0 mb-5 md:mb-0">
            <div className="relative w-full ">
              <Image
                src={image1}
                alt="AI Services Graphic"
                width={600}
                height={600}
                className="w-full h-auto object-contain mx-auto"
                priority
              />
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="xl:w-[557px] md:w-[54%]">
            <AccordionServices />
          </div>
        </div>

        {/* View All Services Button */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <Button
  text="View all services"
  link="/"
  varient="primary"
  className="md:px-6 md:py-3 font-medium py-2.5 px-4 md:text-sm xl:text-base text-sm min-[320px]:max-[401px]:text-[12px]"
/>
        </div>
      </div>
    </section>
  );
};

export default AiServices;

