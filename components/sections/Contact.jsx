"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaArrowDown,
} from "react-icons/fa";
import Button from "../buttons/Button";
import SectionHeader from "../sectionHeaders/SectionHeader";

const Contact = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white via-[#59FFCD]/20 to-[#CCFF02] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row max-w-6xl w-full items-center justify-between gap-8 md:gap-12 lg:gap-16">
        {/* Left Side - Content */}
        <div className="text-black space-y-4 md:space-y-6 w-full lg:max-w-xl">
          <SectionHeader name={"contact"}>Contact</SectionHeader>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Interested in{" "}
            <span className="bg-black text-white px-2 rounded-md inline-block my-1 sm:my-0">
              work
            </span>{" "}
            together?
          </h1>

          <p className="text-sm sm:text-base text-gray-800">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </p>

          <div className="pt-2">
            <Button name={'call'}>Schedule a Call</Button>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="bg-black text-white rounded-xl md:rounded-2xl p-4 sm:p-6 w-full max-w-md space-y-3 md:space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full bg-transparent border-b focus:border-[#CCFF02] py-2 px-1 placeholder-gray-400 outline-none text-sm md:text-base"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="w-full bg-transparent border-b focus:border-[#CCFF02] py-2 px-1 placeholder-gray-400 outline-none text-sm md:text-base"
            required
          />
          <textarea
            name="message"
            placeholder="Describe your project"
            className="w-full bg-transparent border-b focus:border-[#CCFF02] py-2 px-1 placeholder-gray-400 outline-none text-sm md:text-base min-h-[100px]"
            rows="3"
            required
          />

          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mt-4">
            <Button name={"send"} className="w-full sm:w-auto">
              Send
            </Button>
            <Button name={"contact me"} className="w-full sm:w-auto">
              Contact Me
            </Button>
          </div>

          <div className="pt-4 md:pt-6 flex flex-wrap items-center gap-3 md:gap-4 text-gray-400 text-sm md:text-base">
            <span>@williamrey</span>
            <span className="h-4 w-px bg-gray-500 hidden sm:block"></span>
            <div className="flex gap-3 md:gap-4">
              <FaFacebookF className="hover:text-[#CCFF02] transition cursor-pointer" />
              <FaInstagram className="hover:text-[#CCFF02] transition cursor-pointer" />
              <FaTwitter className="hover:text-[#CCFF02] transition cursor-pointer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;