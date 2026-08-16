import Image from "next/image";
import img1 from "../../../public/images/heroimg.png";
import BannerSlider from "../Slider/BannerSlider";

const Banner = () => {
  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden bg-black flex items-center">
      {/* Background Hero Image */}
      <Image
        src={img1}
        alt="Hero Background"
        priority
        className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
      />

      {/* Slider Content Overlay */}
      <div className="relative z-10 w-full h-full flex items-center">
        <BannerSlider />
      </div>
    </div>
  );
};

export default Banner;