import Button from "../ReusableComponents/Buttons/Button";
import SectionIntro from "../ReusableComponents/Sections/SectionIntro";

const ScheduleSection = () => {
  return (
    <div className="py-[54px] md:py-16 xl:py-25 bg-[#C9D6D6] text-black">
      <div className="container-custom">
        <div className="w-full flex flex-wrap justify-between">


          <div className="digital-text 2xl:w-[600px]">
            <h2 className="font-semibold xl:text-5xl mb-4 leading-[60px]">
              Let’s talk about how digital initiatives can transform your
              business
            </h2>
            <p className="max-w-[540px]">
              We’ll happily assist in exploring what will work best for you.
              Like, really best.
            </p>
          </div>

          <div className="w-[calc(100%_-_700px)]">
            <form>
              <h4 className="text-3xl font-medium mb-5">Schedule Meeting</h4>

              <div className="form-row mb-8">
                <input className="text-lg outline-0 px-6 bg-white border border-black rounded-[8px] h-[72px] w-full text-black placeholder:text-black" type="text" placeholder="Your Name" />
              </div>

              <div className="form-row mb-8">
                <input className="text-lg outline-0 px-6 bg-white border border-black rounded-[8px] h-[72px] w-full text-black placeholder:text-black" type="text" placeholder="Your Name" />
              </div>

              <div className="form-row mb-8">
                <textarea className="text-lg outline-0 px-6 py-6 bg-white border border-black rounded-[8px]  w-full text-black placeholder:text-black" rows={4} placeholder="Your Message" />
              </div>

              <Button text="Submit" varient="primary" type="submit" className="cursor-pointer px-10" />
            </form>
          </div>




        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
