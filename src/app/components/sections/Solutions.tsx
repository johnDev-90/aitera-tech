"use client";

import React from "react";
import TimeLine from "../ui/TimeLine";
import Image from "next/image";
import { paraghrapText } from "../data/SolutionsData";

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
          width={300}
          height={300}
          className="pt-16"
        />
        <div className="w-[50%] h-full pr-16 text-justify pl-16 font-light">
          <h2 className="leading-10 font-semibold text-3xl">
            Convierte tu idea en un prototipo:
          </h2>
          <p className="leading-10 text-cyan-700 font-semibold text-3xl">
            ¡solo 5 pasos sencillos!
          </p>

          <p className="leading-7 text-xl pt-2 font-light">
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
