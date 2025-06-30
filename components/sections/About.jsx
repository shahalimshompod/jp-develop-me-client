"use client";
import React from "react";
import SectionHeader from "../sectionHeaders/SectionHeader";

const About = ({ fontReg, fontBold }) => {
  return (
    <section className="relative bg-gradient-to-b from-cyan-white via-[#CCFF02] to-white px-6 md:px-12 py-24 rounded-2xl mb-12">
      {/* About Button */}
      <div className="flex flex-col items-end mb-5">
        <SectionHeader name={"about"}>About</SectionHeader>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Heading text */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-black text-black leading-relaxed ${fontBold.className}`}
        >
          I’ve been{" "}
          <span className="bg-black text-white px-3 rounded-lg">
            Developing
          </span>{" "}
          <br />
          Websites since{" "}
          <span className="bg-black text-white px-3 rounded-lg">2013</span>
        </h1>

        {/* Sub Text */}
        <p
          className={`mt-8 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto ${fontReg.className}`}
        >
          We start every new client interaction with an in-depth discovery call
          where we get to know each other and recommend the best course of
          action.
        </p>
      </div>

      {/* Previously Worked On */}
      <div
        className={`mt-20 lg:mt-32 flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap ${fontReg.className}`}
      >
        <div
          className={`text-left font-semibold text-black text-xl ${fontBold.className}`}
        >
          <p>PREVIOUSLY</p>
          <p>WORKED ON</p>
        </div>

        {/* company badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <span className=" xl:px-16 py-5 rounded-full border border-black text-lg rotate-[10deg] text-center hover:bg-black hover:ease-in-out duration-300 hover:text-white text-black cursor-pointer">
            awwwards.
          </span>
          <span className="xl:absolute right-[380px] bottom-[150px]  xl:px-16 py-5 rounded-full border border-black text-lg text-center text-black hover:text-white hover:bg-black hover:ease-in-out duration-300 cursor-pointer rotate-[-20deg] xl:rotate-none">
            Facebook
          </span>
          <span className="xl:absolute right-[115px] bottom-[95px] xl:px-16 py-5 rounded-full border border-black text-lg text-center rotate-[20deg] text-black hover:text-white hover:bg-black hover:ease-in-out duration-300 cursor-pointer">
            CSSDesignAwards
          </span>
          <span className="xl:absolute right-[800px] bottom-[1px] xl:px-16 py-5 rounded-full border border-black text-lg text-center text-black hover:text-white hover:bg-black hover:ease-in-out duration-300 cursor-pointer rotate-[28deg]">
            CSS WINNER
          </span>
          <span className="xl:absolute right-[505px] bottom-[50px] xl:px-16 py-5 rounded-full border border-black text-lg text-center rotate-[-20deg] text-black hover:text-white hover:bg-black hover:ease-in-out duration-300 cursor-pointer">
            /thoughtworks
          </span>
          <span className="xl:absolute right-[300px] bottom-[51px] xl:px-16 py-5 rounded-full border border-black text-lg text-center text-black hover:text-white hover:bg-black hover:ease-in-out duration-300 cursor-pointer">
            AUTODESK
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
