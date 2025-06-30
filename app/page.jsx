import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import WorkProcess from "@/components/sections/WorkProcess";

export default function Home() {
  return (
    <div>
      <Hero/>
      {/* <WhyChooseMe/> */}
      <About/>
      <WorkProcess/>
      <Contact/>
    </div>
  );
}
