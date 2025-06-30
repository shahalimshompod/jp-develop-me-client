import React from "react";
import { BsArrowDown } from "react-icons/bs";
import localFont from "next/font/local";

// using local fonts
  const fontReg = localFont({
    src: "../../public/fonts/SportingGrotesque-Regular.otf",
  });


const SectionHeader = ({ children, name }) => {
  return (
    <div className="flex items-center">
        <div className={`border-2 ${name === "contact" || name === "about" ? "border-black" : "border-white"} px-3 py-3 text-white rounded-full`}><BsArrowDown color={name === "contact" || name === "about" ? "black" : "white"} /></div>
        <span className={`border-2 ${fontReg.className} ${name === "contact" || name === "about" ? "border-black text-black" : "border-white text-white"} py-2  rounded-full px-4`}>
          {children}
        </span> 
    </div>
  );
};

export default SectionHeader;
