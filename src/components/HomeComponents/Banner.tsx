import Image from "next/image";
import img1 from "../../../public/images/heroimg.png";

import BannerSlider from "../Slider/BannerSlider";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src={img1}
        alt="Hero"
        className="w-full h-auto"
      />




      <div className="absolute top-0 left-0 z-10 w-full h-full">
         <BannerSlider />
      </div>






    </div>
  );
};

export default Banner;