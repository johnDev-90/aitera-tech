import React from "react";
import Link from "next/link";
// import IconesFooter from "./IconesFooter";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-around items-center pt-20 md:p-8 md:mt-0 md:flex md:flex-col md:justify-center md:gap-8 h-70 bg-gray-50  ">
      {/* <div className="w-full hidden md:flex justify-center gap-16">
        <Link
          className="hover:text-cyan-700 font-semibold transition-all"
          href={"#inicio"}
        >
          Inicio
        </Link>
        <Link
          className="hover:text-cyan-700 font-semibold transition-all"
          href={"#soluciones"}
        >
          Soluciones
        </Link>
        <Link
          className="hover:text-cyan-700 font-semibold transition-all"
          href={"#servicios"}
        >
          Servicios
        </Link>
        <Link
          className="hover:text-cyan-700 font-semibold transition-all"
          href={"#nosotros"}
        >
          Nosotros
        </Link>
     
      </div>

      <IconesFooter /> */}

      <div className="w-full flex  justify-center">
        <p className="">© 2024 Aitera Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
