const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-16 rounded-t-[40px]">
      <div className=" mx-auto w-full flex flex-col lg:flex-row items-start justify-between">
        {/* Top Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="text-lime-400 text-2xl font-extrabold tracking-widest mb-6 md:mb-0">
            DEVLOP.ME
          </div>
        </div>

        {/* Footer Grid */}
        <div className="flex flex-col items-start">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              As you <span className="text-white font-normal">can</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-start gap-10">
              {/* Say hello */}
              <div className="space-y-2">
                <p className="text-gray-400 font-medium">Say hello</p>
                <p className="uppercase">HELLO@DEVLOP.ME.COM</p>
                <p className="uppercase">MAHBUBUL@ME.COM</p>
              </div>

              {/* Call */}
              <div className="space-y-2">
                <p className="text-gray-400 font-medium">Call</p>
                <p>+784549 4981 00</p>
                <p>+8845 0100 211</p>
              </div>
            </div>

            {/* Menu */}
            <div className="space-y-2">
              <p className="text-gray-400 font-medium">Menu</p>
              <ul className="space-y-1">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>BLOG</li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-2">
              <p className="text-gray-400 font-medium">Social</p>
              <ul className="space-y-1">
                <li>TWITTER</li>
                <li>INSTAGRAM</li>
                <li>FACEBOOK</li>
                <li>BEHANCE</li>
                <li>DRIBBBLE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <span className="font-bold text-white">BESNIK</span>
        <span>© devlop.me 2022</span>
        <span>PRIVACY - TERMS</span>
      </div>
    </footer>
  );
};

export default Footer;
