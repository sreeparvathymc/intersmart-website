import Image from "next/image";

import image1 from "../../../public/images/recent-p1.png";
import image2 from "../../../public/images/recent-p2.png";
import Button from "../ReusableComponents/Buttons/Button";
import SectionIntro from "../ReusableComponents/Sections/SectionIntro";

const RecentProject = () => {
  return (
    <div className="py-[54px] md:py-16 xl:py-25 text-black">


      <div className="container-custom">
        <SectionIntro
          introTitle="Our Recent AI Projects"
          introText="As one of India's leading AI development companies, SysAlly offers the following services to businesses."
         textclass="max-w-[650px]"
        />
      </div>




      <div className="recent-grid grid gap-6 grid-cols-2 pl-[15%] w-full mb-9">
        <div className="recentimg-cover">
          <Image
            src={image1}
            alt="recentprojectimg1"
            width={500}
            height={300}
            className="object-cover rounded-xl"
          />
        </div>

        <div className="recentimg-cover">
          <Image
            src={image2}
            alt="recentprojectimg2"
            width={500}
            height={300}
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <div>
        <Button className="mx-auto block w-fit" text="View all projects"  varient="primary" link="#" />
      </div>
    </div>
  );
};

export default RecentProject;
