import Button from "../ReusableComponents/Buttons/Button";
import SectionIntro from "../ReusableComponents/Sections/SectionIntro";

const ScheduleSection = () => {
  return (
    <div className="py-[54px] md:py-[75px] xl:py-25 bg-[#C9D6D6] text-black">
      <div className="container-custom">
        <div className="w-full flex flex-wrap justify-between">


          <div className="digital-text xl:w-[600px]  md:w-[48%] w-full mb-7 md:mb-0">
            <h2 className="font-semibold text-[28px] md:text-[30px] lg:text-[45px] xl:text-[48px]  mb-4 xl:leading-[60px]  lg:leading-[50px] md:leading-[40px]">
              Let’s talk about how digital initiatives can transform your
              business
            </h2>
            <p className="max-w-[540px]">
              We’ll happily assist in exploring what will work best for you.
              Like, really best.
            </p>
          </div>

          <div className="xl:w-[calc(100%_-_700px)]  md:w-[48%] w-full">
            <form>
              <h4 className="text-2xl md:text-2l lg:text-3xl font-medium  mb-5">Schedule Meeting</h4>

              <div className="form-row lg:mb-8 mb-4">
                <input className="lg:text-lg text-base outline-0 px-4 lg:px-6 bg-white border border-black rounded-[8px] h-[55px] md:h-[65px] lg:h-[72px] w-full text-black placeholder:text-black" type="text" placeholder="Your Name" />
              </div>

              <div className="form-row lg:mb-8 mb-4">
                <input className="lg:text-lg text-base outline-0 px-4 lg:px-6 bg-white border border-black rounded-[8px] h-[55px] md:h-[65px] lg:h-[72px] w-full text-black placeholder:text-black" type="text" placeholder="Your Name" />
              </div>

              <div className="form-row lg:mb-8 mb-4">
                <textarea className="lg:text-lg text-base outline-0 px-4 lg:px-6 py-4 md:py-6 bg-white border border-black rounded-[8px]  w-full text-black placeholder:text-black" rows={4} placeholder="Your Message" />
              </div>

              <Button text="Submit" varient="primary" type="submit" className="cursor-pointer
              px-10 py-3
                           py-2.5 md:py-3 md:text-sm  xl:text-base text-sm  min-[320px]:max-[401px]:text-[12px]

              " />
            </form>
          </div>




        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
