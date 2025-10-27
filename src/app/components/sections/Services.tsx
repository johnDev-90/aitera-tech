import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full h-screen p-16">
      <div className=" flex flex-col justify-center w-full items-center">
        <h2 className="text-5xl font-sans font-semibold p-2 ">
          Nuestros Servicios
        </h2>
        <p className="w-40 border-b-purple-700 border-b-3 "></p>
      </div>

      <div className="mx-auto w-[80%] grid grid-cols-2 h-full gap-16 p-20">
        <div className="w-full h-full  rounded-lg shadow-md shadow-cyan-700 hover:shadow-lg transition-all cursor-pointer p-8">
          <h1>Servicio 1</h1>
        </div>
        <div className="w-full h-full  rounded-lg shadow-md shadow-cyan-700 hover:shadow-lg transition-all cursor-pointer p-8">
          <h1>Servicio 1</h1>
        </div>
        <div className="w-full h-full  rounded-lg shadow-md shadow-cyan-700 hover:shadow-lg transition-all cursor-pointer p-8">
          <h1>Servicio 1</h1>
        </div>
        <div className="w-full h-full  rounded-lg shadow-md shadow-cyan-700 hover:shadow-lg transition-all cursor-pointer p-8">
          <h1>Servicio 1</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
