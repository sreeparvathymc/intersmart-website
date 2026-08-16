import Slider from "./Slider";

const slides = [
  {
    title: "AI development company in India",
    description:
      "One of the leading AI development companies in India with remarkable expertise in artificial intelligence solutions. Our forte in AI technologies spans diverse verticals like machine learning (ML)....",
    buttonText: "Reach us",
    bgImage: "/images/banner-1.jpg",
  },
  {
    title: "Build powerful AI solutions",
    description:
      "We help businesses build intelligent and scalable AI solutions using modern technologies and innovative approaches.",
    buttonText: "Explore services",
    bgImage: "/images/banner-2.jpg",
  },
  {
    title: "Transform your business with AI",
    description:
      "From machine learning to custom AI solutions, we create technology that helps businesses grow and improve.",
    buttonText: "Contact us",
    bgImage: "/images/banner-3.jpg",
  },
];

const BannerSlider = () => {
  return (
    <Slider slides={slides} />
  );
};

export default BannerSlider;