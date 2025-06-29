import React from "react";
import Button from "../buttons/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-7 bg-[#00000003] rounded-b-4xl">
      <div>
        {/* Navbar Logo */}
        <h1 className="text-4xl font-bold">DEVELOP.ME</h1>
      </div>

      <div className="flex items-center gap-10">
        <div>
          {/* list of routes */}
          <ul className="list-none flex gap-6">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Navbar button */}
        <div>
          <Button name={"start-project"}>Start Project</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
