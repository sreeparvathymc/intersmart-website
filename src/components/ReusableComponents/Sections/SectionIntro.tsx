type IntroProps = {
  introTitle?: string;
  introText?: string;
  textclass?: string;
};

const SectionIntro = ({ introTitle, introText, textclass = "" }: IntroProps) => {
  return (
    <div className="intro-sec text-center">
      {introTitle && (
        <h2 className="text-2xl  md:text-3xl lg:text-4xl font-medium mb-3 sm:mb-4">
          {introTitle}
        </h2>
      )}

      {introText && (
        <p className={`${textclass} text-center text-sm sm:text-base font-normal mx-auto leading-relaxed sm:leading-[28px] mb-6 text-gray-600`}>
          {introText}
        </p>
      )}

      <div className="bg-[#0393B0] w-[80px] sm:w-[100px] h-[3px] rounded-full mb-8 sm:mb-12 mx-auto"></div>
    </div>
  );
};

export default SectionIntro;
