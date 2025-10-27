import React from "react";
import Image from "next/image";
import ButtonCta1 from "./ui/ButtonCta1";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 font-sans">
        <Image
          src="/logo.png"
          alt="logo"
          width={70}
          height={70}
          priority
          className="object-contain cursor-pointer"
        />

        <div className="flex gap-6 font-semibold">
          <a href="#home" className="hover:text-cyan-700">
            Home
          </a>
          <a href="#solutions" className="hover:text-cyan-700">
            Solutions
          </a>

          <a href="#services" className="hover:text-cyan-700">
            Servicios
          </a>
          <a href="#about" className="hover:text-cyan-700">
            About Us
          </a>
          <a href="#contact" className="hover:text-cyan-700">
            Contact Us
          </a>
        </div>

        <ButtonCta1 text={"Hablemos"} />
      </div>
    </nav>
  );
};

export default Navbar;
