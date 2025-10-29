import ServiceIcon1 from "../ui/svgIcons/ServiceIcon1";
import WebAppIcon from "../ui/svgIcons/webAppIcon";
import IntegrationsIcon from "../ui/svgIcons/IntegrationsIcon";
import OthersIcon from "../ui/svgIcons/OthersIcon";
import { CardsContentTypes } from "@/app/types/types";

export const cardContent: CardsContentTypes[] = [
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
