type IntroProps = {
  introTitle?: string;
  introText?: string;
  textclass?: string;
};

const SectionIntro = ({ introTitle, introText,textclass ="" }: IntroProps) => {
  return (
    <div className="intro-sec">

      <h2 className="2xl:text-4xl font-medium mb-4 text-center">{introTitle}</h2>

      <p className={`${textclass} text-center text-base font-normal mx-auto  mb-6`}>{introText}</p>

      <div className="bg-[#0393B0] w-[100px] h-[2px] mb-12 mx-auto"></div>
    </div>
  );
};

export default SectionIntro;