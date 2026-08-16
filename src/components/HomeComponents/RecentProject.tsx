import Image from "next/image";

import image1 from "../../../public/images/recent-p1.png";
import image2 from "../../../public/images/recent-p2.png";
import Button from "../ReusableComponents/Buttons/Button";
import SectionIntro from "../ReusableComponents/Sections/SectionIntro";

const RecentProject = () => {
  return (
    <div className="py-[54px] md:py-[75px] xl:py-25 text-black">


      <div className="container-custom">
        <SectionIntro
          introTitle="Our Recent AI Projects"
          introText="As one of India's leading AI development companies, SysAlly offers the following services to businesses."
         textclass="max-w-[650px]"
        />
      </div>




      <div className="recent-grid grid gap-2 md:gap-6 grid-cols-2 2xl:pl-[15%] md:w-[94%] 2xl:w-full mx-auto 2xl:mx-0 mb-9 min-[320px]:max-[767px]:px-5">
        <div className="recentimg-cover overflow-hidden rounded-[8px] ">
          <Image
            src={image1}
            alt="recentprojectimg1"
            width={500}
            height={300}
            className="object-cover  overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        <div className="recentimg-cover overflow-hidden rounded-[8px] ">
          <Image
            src={image2}
            alt="recentprojectimg2"
            width={500}
            height={300}
            className="object-cover  overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      <div>
        <Button className="mx-auto block w-fit md:py-3 md:px-6 py-2.5 px-5 md:text-base text-sm min-[320px]:max-[400px]:text-[12px]   " text="View all projects"  varient="primary" link="#"

         />
      </div>
    </div>
  );
};

export default RecentProject;
