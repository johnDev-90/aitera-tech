import React from "react";

const AboutUs = () => {
  return (
    <div id="nosotros" className="w-full h-full pt-16 md:p-16">
      <p className="text-2xl text-center p-0 w-full md:text-3xl font-light  text-cyan-900 ">
        Construimos soluciones digitales que impulsan tu crecimiento
      </p>

      <p className="pt-6 text-[20px] text-center font-light md:text-2xl text-blue-700">
        Innovación, diseño y tecnología al servicio de tu negocio.
      </p>

      <div className="pt-8 lg:grid lg:grid-cols-2 lg:pt-16 ">
        <div className="p-4 rounded-br-3xl bg-white">
          <p className="text-2xl text-purple-800">🧠 Quiénes somos</p>

          <p className="pt-4 text-lg font-light text-justify">
            En <span className="font-semibold text-cyan-600">Aitera Tech</span>,
            creemos que la tecnología debe ser una aliada, no una barrera.
            Creamos soluciones digitales diseñadas para simplificar procesos,
            mejorar la productividad y llevar a las empresas hacia su siguiente
            nivel.
          </p>

          <p className="text-lg font-light pt-2">
            Nos apasiona transformar ideas en plataformas funcionales,
            atractivas y con propósito.
          </p>
        </div>

        <div className="p-4 ">
          <p className="text-2xl text-purple-800">💡 Nuestra misión</p>

          <p className="pt-4 text-lg font-light">
            Desarrollar herramientas tecnológicas accesibles, seguras y
            escalables que ayuden a nuestros clientes a crecer.
          </p>

          <p className="text-lg font-light pt-2">
            Cada proyecto lo abordamos con visión estratégica, atención al
            detalle y un enfoque humano que pone tus objetivos al centro de
            todo.
          </p>
        </div>

        <div className="p-4 ">
          <p className="text-2xl text-purple-800">⚙️ Cómo trabajamos</p>

          <p className="pt-4 text-lg font-light">
            Nos gusta construir relaciones a largo plazo basadas en confianza y
            resultados. Trabajamos contigo paso a paso, desde la idea hasta la
            implementación, asegurándonos de que la solución final realmente
            potencie tu negocio.
          </p>

          <p className="text-lg font-light pt-2">
            Usamos metodologías ágiles, comunicación constante y las mejores
            prácticas del desarrollo moderno.
          </p>
        </div>

        <div className="p-4 ">
          <p className="text-2xl text-purple-800">
            🌍 Nuestra visión y valores
          </p>

          <p className="pt-4 text-lg font-light">
            Queremos ser un referente regional en soluciones digitales
            innovadoras. Creemos en la transparencia, la eficiencia y la
            excelencia técnica como pilares de cada proyecto.
          </p>

          <p className="text-lg font-light pt-2">
            Nuestro compromiso es ayudarte a crecer en el mundo digital con
            tecnología que funcione y diseño que inspire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
