"use client";
import React, { FunctionComponent } from "react";
import ServicesCard from "../ui/ServicesCard";
import { useState } from "react";
import ServiceIcon1 from "../ui/svgIcons/ServiceIcon1";
import WebAppIcon from "../ui/svgIcons/webAppIcon";
import IntegrationsIcon from "../ui/svgIcons/IntegrationsIcon";
import OthersIcon from "../ui/svgIcons/OthersIcon";
import { ComponentType } from "react";

export type CardsContentTypes = {
  logo: ComponentType<any>;
  CardTitle: string;
  slogan: string;
  list: string[];
};

const cardContent: CardsContentTypes[] = [
  {
    logo: ServiceIcon1,
    CardTitle: "Sitios Web",
    slogan:
      "Creamos, rediseñamos y optimizamos sitios web atractivos, funcionales y responsive. Mejoramos la experiencia del usuario y aumentamos el SEO.",
    list: [
      "Creación desde cero",
      "Rediseño de sitios existentes",
      "Optimización de velocidad y SEO",
      "Diseño responsive",
    ],
  },

  {
    logo: WebAppIcon,
    CardTitle: "Web Apps Personalizadas",
    slogan:
      "Desarrollamos aplicaciones web adaptadas a las necesidades específicas de tu empresa para optimizar procesos y mejorar la interacción con clientes.",
    list: [
      "Apps internas de gestión",
      "Apps para clientes finales",
      "Funcionalidades a medida",
      "Soluciones escalables",
    ],
  },

  {
    logo: IntegrationsIcon,
    CardTitle: "Integraciones",
    slogan:
      "Integramos diferentes herramientas y sistemas a tus plataformas existentes para que todo funcione de manera eficiente y sin complicaciones.",
    list: [
      "Facturación electrónica",
      "Conexión a Shopify",
      "APIs externas",
      "Sincronización de sistemas",
    ],
  },

  {
    logo: OthersIcon,
    CardTitle: "Servicios Adicionales",
    slogan:
      "Servicios complementarios para llevar tu proyecto al siguiente nivel y asegurar su éxito en el mercado.",
    list: [
      "Diseño gráfico y UX/UI",
      "Optimización de marketing",
      "Estrategias de conversión",
      "Consultoría digital",
    ],
  },
];

const Services = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const text = `
            
        Creamos, rediseñamos y optimizamos sitios web para que sean atractivos, 
        funcionales y responsive. Nuestro equipo de expertos en UI/UX y marketing 
        evaluará tu sitio y te mostrará la mejor manera de optimizarlo para mejorar la experiencia del usuario y aumentar el SEO
    
    
    `;

  const shortText = text.slice(0, 100) + "...";

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
