import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-6 text-text-primary border-b-[1px] border-gray-600 items-center">
      <div>
        <a href="/" className="font-semibold text-2xl">
          Ali Raza | Portfolio
        </a>
      </div>
      <nav className="flex gap-6 font-light text-sm">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;
