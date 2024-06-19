/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import { Logo } from "../utils";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="common-padding py-2">
      <nav className="flex items-center">
        <div className="flex flex-1 items-center gap-10">
          <img src={Logo} alt="Logo" className="h-8" />

          <ul className="flex gap-12">
            {navLinks.map((item) => (
              <li
                key={item}
                className="cursor-pointer transition-all hover:text-blue-hover"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button className="gray-btn flex items-center gap-4">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
          What&apos;s new
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
