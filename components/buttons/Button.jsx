"use client";
import React from 'react';

const Button = ({children, name}) => {
  console.log(name);
  return (
    <button onClick={() => console.log("button clicked")} className="group relative flex items-center px-6 py-3 border border-black rounded-full overflow-hidden min-w-[220px] transition-colors duration-500 bg-white hover:bg-black cursor-pointer">
      {/* Text */}
      <span className="text-black font-semibold text-lg transition-all duration-500 ml-10 group-hover:translate-x-[-1.5rem] group-hover:text-white">
        {children}
      </span>

      {/* Circle */}
      <span className="absolute left-0 flex h-10 w-10 items-center justify-center border border-black rounded-full bg-white text-black transition-all duration-500 group-hover:left-[calc(100%-3rem)]">
        {/* Icon jodi thake ekhane */}
      </span>
    </button>
  );
};

export default Button;
