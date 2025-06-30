import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import WorkProcess from "@/components/sections/WorkProcess";
import localFont from "next/font/local"

// using local fonts
const fontBold = localFont({
  src: "../public/fonts/SportingGrotesque-Bold.otf"
})

const fontReg = localFont({
  src: "../public/fonts/SportingGrotesque-Regular.otf"
})





export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <Hero fontReg={fontReg} fontBold={fontBold}/>

      {/* about section */}
      <About fontReg={fontReg} fontBold={fontBold}/>

      {/* WorkProcess */}
      <WorkProcess fontReg={fontReg} fontBold={fontBold}/>

      {/* Contact */}
      <Contact fontReg={fontReg} fontBold={fontBold}/>
    </div>
  );
}
