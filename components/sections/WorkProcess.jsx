import React from "react";
import WorkProcessCard from "../cards/WorkProcessCard";
import SectionHeader from "../sectionHeaders/SectionHeader";

const WorkProcess = ({fontReg, fontBold}) => {
  const steps = [
    {
      title: "Discovery",
      description:
        "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    },
    {
      title: "Strategy",
      description:
        "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth oxide reviews we're here to set the stage for success.",
    },
    {
      title: "Design",
      description:
        "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page will be designed, reviewed, and given your stamp of approval.",
    },
    {
      title: "Build",
      description:
        "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    },
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-14 py-12 md:py-16 lg:py-20 bg-[#141414] rounded-2xl lg:rounded-3xl">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8 md:mb-10 gap-6 lg:gap-12 xl:gap-44">

        {/* section header */}
        <SectionHeader name={"work process"}>Work Process</SectionHeader>

        {/* section heading */}
        <h1 className={`font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${fontBold.className}`}>
          My Work Process
        </h1>
      </div>

      {/* Process Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {steps.map((step, index) => (
          <WorkProcessCard fontReg={fontReg} fontBold={fontBold} data={step} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;