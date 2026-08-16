

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ReusableComponents/Buttons/Button";

const navItems = [
  { name: "Services", href: "/" },
  { name: "Solutions", href: "/" },
  { name: "Virtual team", href: "/" },
  { name: "Company", href: "/" },
  { name: "About us", href: "/" },
];

/* ==========================================================================
   Desktop Menu Component
   ========================================================================== */
const DesktopHeader = ({
  navItems,
}: {
  navItems: { name: string; href: string }[];
}) => {
  return (
    <div className="hidden md:flex items-center ">
      <nav className="flex items-center xl:mr-2 lg:mr-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-white text-sm lg:text-base font-medium hover:text-gray-300 transition-colors xl:mr-9 lg:mr-5 md:mr-3"
          >
            {item.name}
          </Link>
        ))}
      </nav>



      <Button
      text="Get in touch"
      varient="secondary"
      className="12 font-medium xl:text-base md:text-sm lg:px-6 lg:py-3 md:px-4 md:py-3  "
      link="/"

      />


    </div>
  );
};

/* ==========================================================================
   Mobile Menu Slider Component (Full Width, Slide from Right)
   ========================================================================== */
const MobileMenuDrawer = ({
  isOpen,
  onClose,
  navItems,
}: {
  isOpen: boolean;
  onClose: () => void;
  navItems: { name: string; href: string }[];
}) => {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black text-white w-full h-screen flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
      }`}
    >
      {/* Top Header inside Drawer */}
      <div className="flex items-center justify-between border-b border-gray-800 pb-4">



        <Link href="/" >
          <Image
            src="/images/logo.png"
            alt="Inter Smart Logo"
            width={160}
            height={36}
            className="w-auto  h-7 sm:h-8 md:h-7 lg:h-10 object-contain"
          />
        </Link>




        <button
          onClick={onClose}
          className="text-white p-2 focus:outline-none hover:text-gray-400 transition-colors"
          aria-label="Close menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Nav Links List */}
      <nav className="flex flex-col space-y-6 my-auto py-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className="text-white text-xl font-medium hover:text-gray-300 transition-colors border-b border-gray-900 pb-1"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* CTA at Bottom of Drawer */}
      <div className="pt-4 border-t border-gray-800">

      </div>
    </div>
  );
};

/* ==========================================================================
   Main Header Component
   ========================================================================== */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-black shadow-lg py-5 md:py-8"
            : "bg-transparent py-6 md:py-10"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Inter Smart Logo"
              width={180}
              height={40}
              className="w-auto min-[320px]:max-[400px]:h-5 h-7 sm:h-8 md:h-7 lg:h-10 object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu Section */}
          <DesktopHeader navItems={navItems} />

          {/* Mobile Header Controls (Get in Touch Button + Hamburger Toggle) */}
          <div className="ft md:hidden flex items-center space-x-3">
            <Button
      text="Get in touch"
      varient="secondary"
      className=" font-medium min-[320px]:max-[400px]:text-[12px] min-[320px]:max-[400px]:mr-[5px] text-sm xl:text-base md:text-sm lg:px-6 lg:py-3 md:px-4 md:py-3  py-2.5 px-5"
      link="/"

      />

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white pl-[5px] focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slider Section (Full-width slide from right) */}
      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

export default Header;