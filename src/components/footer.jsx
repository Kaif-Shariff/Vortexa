import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#333232] w-auto flex px-4 h-14 items-center">
      <div id="container">
        <img
          src="assets/copyright.svg"
          alt="Copyright"
          className="mt-2 absolute"
        />
        <p className="text-white font-extralight mx-4">
          Vortexa All rights reserved 2024.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
