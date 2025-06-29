import React from "react";

const ChooseMeHeader = ({ children, name }) => {
    console.log(name)
  return (
    <div>
        <span className={`border-2 border-white ${name === "contact" && "border-black"} px-3 py-2 text-white rounded-full`}>M</span>
        <span className={`border-2 border-white ${name === "contact" && "border-black"} py-2 text-white rounded-full px-4`}>
          {children}
        </span>
    </div>
  );
};

export default ChooseMeHeader;
