import React from "react";
import DBimg from "/public/DB.webp";
import Image from "next/image";
import ButtonCta2 from "../ui/ButtonCta2";

const Hero = () => {
  return (
    <section
      className="w-full h-screen grid grid-cols-2 font-sans p-12"
      id="home"
    >
      <div className="w-full h-full text-6xl flex flex-col justify-center p-8">
        <h1 className="font-semibold pb-3">
          Soluciones Digitales{" "}
          <span className="text-blue-500">Inteligentes</span>
        </h1>

        <div className="w-full pt-4">
          <p className="text-3xl leading-10 font-serif">
            ¿Listo para hacer crecer tu negocio? Desarrollamos plataformas y
            aplicaciones digitales que te ayudan a generar ingresos y escalar de
            forma sostenible.
          </p>
        </div>

        <ButtonCta2 text={"Cotiza Gratis"} />
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <Image
          src="/heroBG.avif"
          alt="Device mockup"
          width={400}
          height={700}
          priority
          className="bg-cover w-full rounded-3xl shadow-md shadow-cyan-700"
        />
      </div>
    </section>
  );
};

export default Hero;
