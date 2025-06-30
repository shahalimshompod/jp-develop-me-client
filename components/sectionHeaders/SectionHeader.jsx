import React from "react";
import { BsArrowDown } from "react-icons/bs";

const SectionHeader = ({ children, name }) => {
    console.log(name)
  return (
    <div className="flex items-center">
        <div className={`border-2 ${name === "contact" || name === "about" ? "border-black" : "border-white"} px-3 py-3 text-white rounded-full`}><BsArrowDown color={name === "contact" || name === "about" ? "black" : "white"} /></div>
        <span className={`border-2 ${name === "contact" || name === "about" ? "border-black text-black" : "border-white text-white"} py-2  rounded-full px-4`}>
          {children}
        </span> 
    </div>
  );
};

export default SectionHeader;
