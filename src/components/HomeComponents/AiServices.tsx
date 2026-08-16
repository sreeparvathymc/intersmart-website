import Image from "next/image";
import SectionIntro from "../ReusableComponents/Sections/SectionIntro";
import image1 from "../../../public/images/Ai-sevices.svg";
import AccordionServices from "../Accodion/AccodionServices";
import Button from "../ReusableComponents/Buttons/Button";

const AiServices = () => {
  return (
    <div className="py-[54px] md:py-16 xl:py-25">
      <div className="container-custom">
        <SectionIntro
          introTitle="Our Artificial Intelligence Services"
          introText="As one of India's leading AI development companies, SysAlly offers the following services to businesses."
          textclass="max-w-[647px] mx-auto"
        />

        <div className="w-full flex flex-wrap justify-between items-center">


          <div className="w-[calc(100%_-_600px)">
            <Image src={image1} alt="img" width={200} height={400} />
          </div>

          <div className="w-[500px]">
            <AccordionServices />
          </div>



        </div>




        <div className="flex justify-center flex-wrap">
          <Button text="View all services" link="/" varient="primary" />
        </div>
      </div>
    </div>
  );
};

export default AiServices;
