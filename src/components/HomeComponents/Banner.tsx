import Image from "next/image";
import img1 from "../../../public/images/heroimg.png";
import BannerSlider from "../Slider/BannerSlider";

const Banner = () => {
  return (
    <div className="banner-outer relative w-full

        min-[320px]:max-[401px]:aspect-[16/19]
         min-[401px]:max-[480px]:aspect-[16/15]

    md:aspect-[16/10]
    aspect-[16/10]

      overflow-hidden bg-black flex items-center">

      <Image
        src={img1}
        alt="Hero Background"
        priority
        className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none

         min-[320px]:max-[401px]:object-right-top
         min-[401px]:max-[480px]:object-right-top

        "
      />


      <div className="relative z-10 w-full h-full flex items-center">
        <BannerSlider />
      </div>

    </div>
  );
};

export default Banner;
