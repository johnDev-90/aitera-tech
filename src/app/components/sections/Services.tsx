import ServicesCard from "../ui/ServicesCard";
import { cardContent } from "../data/serviceCardData";

const Services = () => {
  return (
    <section
      id="services"
      className="pt-200 sm:pt-140 w-full h-full md:pt-80 lg:pt-16 lg:p-8"
    >
      <div className="md:p-8 text-lg font-light">
        <h2 className="text-cyan-700 text-center font-semibold text-2xl md:text-3xl">
          Nuestros Servicios
        </h2>
        <p className="pt-2 md:text-xl md:text-center">
          Soluciones Integrales para tu Presencia Digital
        </p>
        <p className="pt-4 md:text-xl md:text-center">
          Ofrecemos servicios completos de desarrollo web y aplicaciones
          personalizadas para impulsar <br></br> tu negocio.
        </p>
      </div>
      <div className="flex flex-col gap-8 mt-8  lg:grid lg:grid-cols-2 lg:w-[80%] h-full lg:gap-8 lg:mx-auto">
        {cardContent &&
          cardContent.map((item, index) => (
            <ServicesCard key={index} item={item} />
          ))}
      </div>
    </section>
  );
};

export default Services;
