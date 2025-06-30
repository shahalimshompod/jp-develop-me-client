import React from "react";
import heroImg from "@/public/assets/heroImage.png";
import Navbar from "./Navbar";
import Button from "../buttons/Button";
import { FaFacebook } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";
import WhyChooseMe from "./WhyChooseMe";

const Hero = () => {
  return (
    <div
      className="px-3 md:px-6 lg:px-12 bg-no-repeat bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      {/* Navbar Section */}
      <div className="mb-10 md:mb-20">
        <Navbar />
      </div>

      {/* Main Hero Content */}
      <div className="px-3 md:px-6 lg:px-12 mb-20 md:mb-32">
        {/* Headline Section */}
        <div className="mb-10 md:mb-16 px-2 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-black leading-tight md:leading-relaxed">
            Trusted{" "}
            <span className="px-2 md:px-4 bg-black text-white rounded-lg md:rounded-xl inline-block my-2">
              Partner
            </span>{" "}
            for <br className="hidden sm:block" /> Your Website{" "}
            <span className="px-2 md:px-4 bg-black text-white rounded-lg md:rounded-xl inline-block my-2">
              Develop
            </span>
          </h1>
        </div>

        {/* Bottom Section - Social & CTA */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          {/* Social Media Section (rotated on desktop) */}
          <div className="md:-rotate-90 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
            <h3 className="text-xl md:text-2xl mb-0 md:mb-8">@williamrey</h3>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="border-b border-black w-6 md:w-10"></div>
              <FaFacebook size={24} className="md:size-6" />
              <BiLogoInstagramAlt size={24} className="md:size-6" />
              <FaTwitterSquare size={24} className="md:size-6" />
            </div>
          </div>

          {/* Description & CTA Button */}
          <div className="md:w-1/2 lg:w-5/12">
            <p className="text-base md:text-lg font-medium mb-6 md:mb-10">
              Building the world's best marketing websites for over a decade.
              Your trusted partner for strategy, design, and dev.
            </p>
            <Button name={"call"}>Schedule a Call</Button>
          </div>
        </div>
      </div>

      {/* WhyChooseMe Component Section */}
      <WhyChooseMe />
    </div>
  );
};

export default Hero;