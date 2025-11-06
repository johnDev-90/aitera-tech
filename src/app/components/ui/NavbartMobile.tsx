import React from "react";
import Image from "next/image";

type NavarProps = {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
};

const NavbartMobile = ({ setToggle, toggle }: NavarProps) => {
  return (
    <nav
      className={` ${toggle ? "translate-x-0" : "-translate-x-full"} md:hidden fixed top-0 left-0 z-50 h-screen w-[80%] max-w-xs bg-gray-900 text-white opacity-90 transition-transform duration-500 ease-in-out `}
    >
      <div className="w-full flex  justify-end p-4">
        <span
          onClick={() => setToggle(false)}
          className="font-bold text-3xl p-2 shadow cursor-pointer"
        >
          X
        </span>
      </div>

      <div className=" w-full h-[35rem] text-xl p-8 flex flex-col justify-evenly gap-6 font-semibold">
        <a
          onClick={() => setToggle(false)}
          href="#home"
          className="hover:text-cyan-700"
        >
          Inicio
        </a>
        <a
          onClick={() => setToggle(false)}
          href="#solutions"
          className="hover:text-cyan-700"
        >
          Soluciones
        </a>

        <a
          onClick={() => setToggle(false)}
          href="#services"
          className="hover:text-cyan-700"
        >
          Servicios
        </a>
        <a
          onClick={() => setToggle(false)}
          href="#nosotros"
          className="hover:text-cyan-700"
        >
          Nosotros
        </a>
        <a
          onClick={() => setToggle(false)}
          href="#contact"
          className="hover:text-cyan-700"
        >
          Contactanos
        </a>
      </div>
    </nav>
  );
};

export default NavbartMobile;
