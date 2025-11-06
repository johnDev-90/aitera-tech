import React from "react";
import Image from "next/image";
import ButtonCta1 from "./ui/ButtonCta1";

type NavarProps = {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
};

const Navbar = ({ setToggle }: NavarProps) => {
  return (
    <nav className=" w-full fixed top-0 left-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="flex flex-row max-w-7xl mx-auto items-center justify-between h-20 px-6 font-sans">
        <Image
          src="/logo.png"
          alt="logo"
          width={70}
          height={70}
          priority
          className="object-contain cursor-pointer"
        />

        <div
          onClick={() => setToggle(true)}
          className="w-full md:hidden flex justify-end p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-15 border border-gray-300 rounded-md shadow p-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div className="hidden md:flex gap-6 font-semibold">
          <a href="#home" className="hover:text-cyan-700">
            Inicio
          </a>
          <a href="#solutions" className="hover:text-cyan-700">
            Soluciones
          </a>

          <a href="#services" className="hover:text-cyan-700">
            Servicios
          </a>
          <a href="#nosotros" className="hover:text-cyan-700">
            Nosotros
          </a>
          <a href="#contact" className="hover:text-cyan-700">
            Contactanos
          </a>
        </div>

        <ButtonCta1 text={"Hablemos"} />
      </div>
    </nav>
  );
};

export default Navbar;
