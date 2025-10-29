import ServicesCard from "../ui/ServicesCard";
import { cardContent } from "../data/serviceCardData";

const Services = () => {
  return (
    <section id="services" className="w-full h-full pt-16 p-8">
      <div className="text-center p-8 text-lg font-light">
        <h2 className="text-cyan-700 font-semibold text-2xl">
          Nuestros Servicios
        </h2>
        <p className="pt-2">Soluciones Integrales para tu Presencia Digital</p>
        <p className="pt-4">
          Ofrecemos servicios completos de desarrollo web y aplicaciones
          personalizadas para impulsar <br></br> tu negocio.
        </p>
      </div>
      <div className="grid grid-cols-2 w-[80%] h-full gap-8 mx-auto">
        {cardContent &&
          cardContent.map((item, index) => (
            <ServicesCard key={index} item={item} />
          ))}
      </div>
    </section>
  );
};

export default Services;
