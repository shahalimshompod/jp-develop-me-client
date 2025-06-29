"use client";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useRef } from "react";

const cards = [
  {
    title: "HTML & CSS",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    title: "Javascript",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    title: "Webflow",
    description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
];

const TechSlider = () => {
  const sliderRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-black py-16 px-8 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Technologies</h2>
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-14"
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="min-w-[300px] bg-[#1a1a1a] text-white rounded-3xl p-6 flex-shrink-0 hover:rotate-[-2deg] transition-transform duration-300"
          >
            <div className="mb-4">
              <img
                src="/icons/react-icon.svg"
                alt="icon"
                className="h-10 w-10 mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{card.title}</h3>
            <p className="text-sm text-gray-300 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
