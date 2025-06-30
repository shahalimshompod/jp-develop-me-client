import React from "react";
import SectionHeader from "../sectionHeaders/SectionHeader";
import Slider from "../sliders/Slider";

const WhyChooseMe = ({fontReg, fontBold}) => {
  return (
    <div className="bg-black rounded-3xl pt-12 md:pt-20 lg:pt-28 px-6 sm:px-8 md:px-12 lg:px-14">
      {/* Section Header */}
      <SectionHeader name={"why choose me"}>Why Choose Me</SectionHeader>

      {/* Content Section */}
      <div className="my-8 md:my-12 flex flex-col lg:flex-row justify-between gap-8 md:gap-12">
        {/* Heading */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white lg:w-1/2 ${fontBold.className}`}>
          My Extensive List of Skills
        </h1>

        {/* Description with border */}
        <div className="border-b border-white lg:w-1/2 xl:w-1/3 pt-4 pb-6 md:pb-8">
          <p className={`text-white text-base sm:text-lg md:text-xl text-start md:text-end ${fontReg.className}`}>
            Building the world's best marketing websites. Your trusted partner for
            strategy, design, and development.
          </p>
        </div>
      </div>

      {/* Slider Component */}
      <div className="pb-12 md:pb-16 lg:pb-20">
        <Slider fontReg={fontReg} fontBold={fontBold} />
      </div>
    </div>
  );
};

export default WhyChooseMe;