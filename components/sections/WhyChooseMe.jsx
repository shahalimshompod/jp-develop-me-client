import React from "react";
import ChooseMeHeader from "../sectionHeaders/ChooseMeHeader";
import Slider from "../sliders/Slider";

const WhyChooseMe = () => {
  return (
    <div className="bg-black rounded-3xl py-28 px-14">
      <ChooseMeHeader name={"why choose me"}>Why Choose Me</ChooseMeHeader>

      <div className="my-12 flex justify-between">
        <h1 className="text-6xl text-white w-1/4">
          My Extensive List of Skills
        </h1>
        <div className="border-b border-white w-1/3">
          <p className="text-end text-white text-xl">
            Building the worlds best marketing Your trusted partner for
            strategy, design, and dev.
          </p>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default WhyChooseMe;
