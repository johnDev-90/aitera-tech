import React from "react";
import Image from "next/image";
import ButtonCta2 from "../ui/ButtonCta2";

const Hero = () => {
  return (
    <section
      data-aos="fade-up"
      className="w-full h-full mt-40 lg:grid grid-cols-2 font-sans lg:mt-16 lg:w-full lg:h-full lg:text-6xl flex flex-col justify-center lg:p-12"
      id="home"
    >
      <div className="w-full h-full text-3xl md:text-5xl lg:text-6xl md:flex md:flex-col md:justify-center md:p-8">
        <h1 className="font-semibold pb-3 text-center md:text-left">
          Soluciones Digitales{" "}
          <span className="text-blue-500">Inteligentes</span>
        </h1>

        <div className="w-full pt-4">
          <p className="text-2xl text-center  md:text-3xl md:text-left">
            ¿Listo para hacer crecer tu negocio?
          </p>
          <p className=" text-center text-xl mt-5   md:text-2xl md:text-left font-serif md:pt-4">
            Desarrollamos plataformas y aplicaciones digitales que te ayudan a
            generar ingresos y escalar de forma sostenible.
          </p>
        </div>

        <ButtonCta2 text={"Cotiza Gratis"} />
      </div>

      <div className="hidden md:w-full md:h-full md:hidden md:justify-center md:items-center lg:flex ">
        <Image
          src="/heroBG2.jpg"
          alt="Device mockup"
          width={400}
          height={700}
          priority
          className=" md:bg-cover w-full rounded-3xl shadow-cyan-700 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
