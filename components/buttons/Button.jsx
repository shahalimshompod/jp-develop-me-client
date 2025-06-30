"use client";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import localFont from "next/font/local";

// using local fonts
  const fontReg = localFont({
    src: "../../public/fonts/SportingGrotesque-Regular.otf",
  });

const Button = ({ children, name }) => {
  

  return (
    <button
      className={`group relative flex items-center px-6 py-3 border rounded-full overflow-hidden transition-colors duration-500 bg-transparent hover:bg-black cursor-pointer ${
        name === "send" || name === "contact me"
          ? "border-white"
          : "border-black"
      }`}
    >
      {/* Text */}
      <span
        className={`font-semibold text-lg transition-all duration-500 ml-10 group-hover:translate-x-[-1.5rem] group-hover:text-white ${fontReg.className} ${
          name === "send" || name === "contact me" ? "text-white" : "text-black"
        }`}
      >
        {children}
      </span>

      {/* Circle */}
      <span
        className={`absolute left-0 flex h-10 w-10 items-center justify-center border rounded-full transition-all duration-500 group-hover:left-[calc(100%-3rem)] ${
          name === "send" || name === "contact me"
            ? "text-white border-white bg-white"
            : "text-black border-black bg-transparent"
        }`}
      >
        {/* Icons (I used one button components thats why I used these icons dynamically) */}
        {name === "start-project" ? (
          <GoArrowRight className="text-black group-hover:text-white transition-colors duration-500" />
        ) : name === "call" ? (
          <FaPhone
            className={
              name === "send" || name === "contact me"
                ? "text-black"
                : "text-black group-hover:text-white transition-colors duration-500"
            }
          />
        ) : name === "contact me" ? (
          <IoMdMail className="text-black" />
        ) : (
          name === "send" && <IoIosSend className="text-black" />
        )}
      </span>
    </button>
  );
};

export default Button;
