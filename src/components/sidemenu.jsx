import React from "react";

const SideMenu = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-65 z-10 lg:hidden">
      <div className="fixed bg-white h-full w-64 top-16 left-0 shadow-lg">
        <ul className="pt-16">
          <li className="py-4 px-6 hover:bg-gray-200">
            <a href="/">Home</a>
          </li>
          <li className="py-4 px-6 hover:bg-gray-200">
            <a href="#services">Services</a>
          </li>
          <li className="py-4 px-6 hover:bg-gray-200">
            <a href="#about">About</a>
          </li>
          <li className="py-4 px-6 hover:bg-gray-200">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
