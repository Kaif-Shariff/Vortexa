import React, { useState } from "react";
import Btn from "./btn";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import SideMenu from "./sidemenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {isMenuOpen && <SideMenu />}
      <nav className="fixed top-0 w-full flex justify-around items-center bg-white shadow-md h-16 z-10">
        <img src="assets/logo.png" alt="Logo" className="w-30 h-10" />
        <ul className="hidden uppercase lg:flex">
          <li className="mx-4 hover:text-[#34AFF4] cursor-pointer">
            {" "}
            <a href="/">Home</a>
          </li>
          <li className="mx-4 hover:text-[#34AFF4] cursor-pointer">
            {" "}
            <a href="#services">Services</a>
          </li>
          <li className="mx-4 hover:text-[#34AFF4] cursor-pointer">
            {" "}
            <a href="#about">About</a>
          </li>
          <li className="mx-4 hover:text-[#34AFF4] cursor-pointer">
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <Btn
          txt="Get Started"
          styles="border-2 rounded-md text-xs md:text-base xl:text-md py-2 px-6 hidden lg:block"
        />
        <button
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <GrClose /> : <GiHamburgerMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
