"use client";

import React from "react";
import TimeLine from "../ui/TimeLine";
import Image from "next/image";

const paraghrapText = [
  {
    title: "Llamada inicial",
    textContent: "Conoce tus necesidades y objetivos.",
  },

  {
    title: "Lista de funcionalidades",
    textContent: "Definimos lo que tu prototipo debe incluir..",
  },

  {
    title: "Moodboard visual",
    textContent: "Inspiración y estilo para tu proyecto.",
  },

  {
    title: "Diseño del proceso",
    textContent: "Organizamos la experiencia paso a paso.",
  },

  {
    title: "Prototipo interactivo",
    textContent: "Tu idea toma forma y se puede probar.",
  },
];

const Solutions = () => {
  return (
    <div className="w-full h-screen pt-16 ">
      <div
        className="w-full flex justify-center gap-16 items-center"
        id="solutions"
      >
        <Image
          src={"/section.png"}
          alt="Device mockup"
          width={400}
          height={400}
          className="pt-16"
        />
        <div className="w-[50%] h-full pr-16 text-justify pl-16 font-sans">
          <h2 className="leading-10 font-bold text-3xl">
            Convierte tu idea en un prototipo:
          </h2>
          <p className="leading-10 text-cyan-700 font-bold text-3xl">
            ¡solo 5 pasos sencillos!
          </p>

          <p className="leading-7 text-xl font-serif pt-2">
            Sin discusiones innecesarias ni retrasos en el proyecto, Nuestro
            flujo de trabajo de prototipado está optimizado:
          </p>
        </div>
      </div>

      <TimeLine paraghrapText={paraghrapText} />
    </div>
  );
};

export default Solutions;
