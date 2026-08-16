import Slider from "./Slider";

const slides = [
  {
    title: "AI development company in India",
    description:
      "One of the leading AI development companies in India with remarkable expertise in artificial intelligence solutions. Our forte in AI technologies spans diverse verticals like machine learning (ML)....",
    buttonText: "Reach us",

  },
  {
    title: "AI development company in India 2",
    description:
      "One of the leading AI development companies in India with remarkable expertise in artificial intelligence solutions. Our forte in AI technologies spans diverse verticals like machine ",
    buttonText: "Reach us",

  },
  {
    title: "AI development company in India 3",
    description:
      "One of the leading AI development companies in India with remarkable expertise in artificial intelligence solutions. Our forte in AI technologies spans diverse verticals like machine learning (ML)....",
    buttonText: "Reach us",

  },

];

const BannerSlider = () => {
  return (
    <Slider slides={slides} />
  );
};

export default BannerSlider;