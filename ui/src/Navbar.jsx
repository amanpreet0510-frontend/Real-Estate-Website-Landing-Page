import React, { useState } from "react";
import "./App.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="navbar w-full bg-gradient-to-t from-[#222222] to-[#474747]">
    <div className="container">
      <div className="flex justify-between pt-[48px] ps-[50px] md:ps-[50px] pe-[50px] xl:ps-[1px] xl:pe-[1px] bg-gradient-to-t from-[#222222] to-[#474747]">
        <div className="">
          <h2 className="font-[500] text-[18px] text-[#FFFFFF]">General</h2>
          <h1 className="font-[700] text-[24px] text-[#0A72AD]">Project</h1>
        </div>
        
        {/* Mobile hamburger menu button */}
        <button 
          className="md:hidden text-white "
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop navigation - hidden on mobile */}
        <div className="hidden md:flex">
          <ul className="flex text-[#C4C4C4] font-[500] text-[14px] gap-[20px] lg:gap-[50px] lg:text-[14px] xl:gap-[65px] xl:text-[18px]">
            <li>Home</li>
            <li>Services</li>
            <li>Find a Team</li>
            <li>About Us</li>
            <li>Articles</li>
            <li>Portofolio</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#333333] border-t border-[#555555]">
          <ul className="flex flex-col text-[#C4C4C4] font-[500] text-[16px] py-4">
            <li className="px-[50px] py-3 hover:bg-[#444444] hover:text-white transition-colors">Home</li>
            <li className="px-[50px] py-3 hover:bg-[#444444] hover:text-white transition-colors">Services</li>
            <li className="px-[50px] py-3 hover:bg-[#444444] hover:text-white transition-colors">Find a Team</li>
            <li className="px-[50px] py-3 hover:bg-[#444444] hover:text-white transition-colors">About Us</li>
            <li className="px-[50px] py-3 hover:bg-[#444444] hover:text-white transition-colors">Articles</li>
            <li className="px-[50px] py-3 hover:bg-[#444444] hover:text-white transition-colors">Portofolio</li>
            <li className="px-[50px] py-3 hover:bg-[#444444] hover:text-white transition-colors">Contact us</li>
          </ul>
        </div>
      )}
      </div>
      </div>
    </>
  );
};

export default Navbar;