"use client";
import React, { useState } from "react";
import Button from "../buttons/Button";
import localFont from "next/font/local";

// using local fonts
  const fontReg = localFont({
    src: "../../public/fonts/SportingGrotesque-Regular.otf",
  });


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 md:p-7 bg-[#00000003] rounded-b-4xl">
      {/* Logo */}
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">DEVLOP.ME</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        <div>
          <ul className={`list-none flex gap-6 ${fontReg.className}`}>
            <li className="hover:text-gray-600 cursor-pointer transition-colors">Home</li>
            <li className="hover:text-gray-600 cursor-pointer transition-colors">About</li>
            <li className="hover:text-gray-600 cursor-pointer transition-colors">Portfolio</li>
            <li className="hover:text-gray-600 cursor-pointer transition-colors">Blogs</li>
          </ul>
        </div>
        <div>
          <Button name={"start-project"}>Start Project</Button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu}
          className="p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-50 p-4">
          <ul className={`list-none flex flex-col gap-4 ${fontReg.className}`}>
            <li className="hover:text-gray-600 cursor-pointer transition-colors py-2">Home</li>
            <li className="hover:text-gray-600 cursor-pointer transition-colors py-2">About</li>
            <li className="hover:text-gray-600 cursor-pointer transition-colors py-2">Portfolio</li>
            <li className="hover:text-gray-600 cursor-pointer transition-colors py-2">Blogs</li>
            <li className="py-2">
              <Button name={"Start Project"}>Start Project</Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;