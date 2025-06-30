"use client";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useRef } from "react";
import SliderCard from "../cards/SliderCard";
import react from "../../public/assets/react.png"
import node from "../../public/assets/node.png"
import express from "../../public/assets/express.png"
import mongodb from "../../public/assets/mongodb.png"
import next from "../../public/assets/next.png"
import html from "../../public/assets/html.png"
import css from "../../public/assets/css.png"
import jwt from "../../public/assets/jwt.png"
import firebase from "../../public/assets/firebase.png"
import tailwind from "../../public/assets/tailwind.png"
import js from "../../public/assets/js.png"
import npm from "../../public/assets/npm.png"

const cards = [
  {
    title: "HTML",
    description: "Markup language for creating web page structure and content.",
    image: html,
  },
  {
    title: "CSS",
    description: "Stylesheet language used to design the appearance of HTML content.",
    image: css,
  },
  {
    title: "JavaScript",
    description: "Programming language used to make web pages interactive.",
    image: js,
  },
  {
    title: "React",
    description: "JavaScript library for building user interfaces using components.",
    image: react,
  },
  {
    title: "Node.js",
    description: "JavaScript runtime environment for running JS on the server.",
    image: node,
  },
  {
    title: "Express.js",
    description: "Minimal and flexible Node.js web application framework.",
    image: express,
  },
  {
    title: "MongoDB",
    description: "NoSQL database program using JSON-like documents.",
    image: mongodb,
  },
  {
    title: "Next.js",
    description: "React framework for production with SSR, routing, and more.",
    image: next,
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapidly building custom designs.",
    image: tailwind,
  },
  {
    title: "JWT",
    description: "A compact token format used for secure authentication and information exchange.",
    image: jwt,
  },
  {
    title: "Firebase",
    description: "Platform by Google offering backend services like auth, DB, storage, etc.",
    image: firebase,
  },
  {
    title: "NPM",
    description: "Node package manager to install and manage JavaScript packages.",
    image: npm,
  },
];

const Slider = ({fontReg, fontBold}) => {
  const sliderRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -500, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-black py-10 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className=" text-black">.</h2>
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
        className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide py-14"
      >
        {cards.map((card, idx) => <SliderCard fontReg={fontReg} fontBold={fontBold} key={idx} data={card}/>)}
      </div>
    </div>
  );
};

export default Slider;
