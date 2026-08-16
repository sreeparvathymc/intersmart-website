import Link from "next/link";
import Image from "next/image";

const services = [
  { name: "Hyperparameter model tuning" },
  { name: "PoC of AI Solutions" },
  { name: "AI Model Optimization" },
  { name: "AI Consultation" },
];

const pages = [
  { name: "Services", href: "/" },
  { name: "Technology", href: "/" },
  { name: "Portfolio", href: "/" },
  { name: "Virtual team", href: "/" },
  { name: "Contact us", href: "/" },
];

const socialMediaLinks = [
  { name: "facebook", href: "/", icon: "/icons/ss-facebook.png" },
  { name: "instagram", href: "/", icon: "/icons/ss-instagram.png" },
  { name: "linkedin", href: "/", icon: "/icons/ss-linkedin.png" },
  { name: "twitter", href: "/", icon: "/icons/ss-twitter.png" },
];

const privacy = [
  { name: "Privacy Policy", href: "/" },
  { name: "GDPR Policy", href: "/" },
  { name: "Terms of Service", href: "/" },
];

const Footer = () => {
  return (
    <footer className=" py-[54px] md:py-16 xl:py-25  bg-darkblue text-white">
      <div className="container-custom">
        <div className="flex flex-wrap">
          <div className=" w-full md:w-[calc(100%-218px)]  grid grid-cols-1 md:grid-cols-2">
            <div>
              <h3 className=" text-lg md:text-xl lg:text-2xl  font-medium mb-2 md:mb-5 lg:mb-7">
                Services
              </h3>

              <ul className="flex  gap-x-6 gap-y-2 md:gap-x-0 md:gap-y-0 md:flex-col flex-wrap">
                {services.map((service) => (
                  <li
                    className="text-sm md:text-sm lg:text-base font-normal  mb-0 md:mb-4 lg:mb-6 "
                    key={service.name}
                  >
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:pl-10 my-5">
              <h3 className="text-lg md:text-xl lg:text-2xl  font-medium md:mb-5 lg:mb-7 mb-2">
                Pages
              </h3>

              <ul className="flex gap-x-6 gap-y-2 md:gap-x-0 md:gap-y-0 md:flex-col flex-wrap">
                {pages.map((page) => (
                  <li
                    key={page.name}
                    className="text-sm md:text-sm lg:text-base font-normal mb-0  md:mb-4 lg:mb-6"
                  >
                    <Link
                      className="transition-all duration-300 hover:opacity-50"
                      href={page.href}
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[218px]">
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium md:mb-5 lg:mb-7 mb-2">
              Stay connected
            </h3>

            <ul className="flex flex-wrap gap-2 ss-icons">
              {socialMediaLinks.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    className="transition-all duration-[1s] ease-in-out"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={40}
                      height={40}
                      className="transition-transform duration-[1s] ease-in-out hover:rotate-[360deg]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7.5 flex flex-wrap justify-between w-full footer-botm">
          <div className="w-full md:w-fit">
            <p className=" min-[320px]:max-[370px]:text-[13px] text-sm md:text-sm text-center lg:text-base font-normal mb-0  md:mb-4 lg:mb-6">
              © 2023 Intersmart Ltd. All rights reserved.
            </p>
          </div>

          <div className="w-full md:w-fit mt-3 md:mt-0 policy-list">
            <ul className="flex flex-wrap justify-center md:justify-start">
              {privacy.map((priv) => (
                <li
                  className="relative  min-[320px]:max-[3700px]:px-[6px] px-[10px]"
                  key={priv.name}
                >
                  <Link
                    className=" min-[320px]:max-[3700px]:text-[12px]    text-sm  md:text-sm lg:text-base transition-all duration-300 hover:opacity-50 font-normal text-base after:content-[''] after:absolute after:w-px after:h-[15px] after:bg-white after:right-0 after:bottom-[3px]"
                    href={priv.href}
                  >
                    {priv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
