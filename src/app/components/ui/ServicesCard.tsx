import React from "react";
import ServiceIcon1 from "./svgIcons/ServiceIcon1";

import { CardsContentTypes } from "../sections/Services";

type PropsType = {
  item: CardsContentTypes;
};

const ServicesCard = ({ item }: PropsType) => {
  const Logo = item.logo;
  return (
    <div className="w-full rounded-2xl p-4 border border-gray-300 transition-all hover:shadow hover:shadow-cyan-700">
      <Logo className="size-15 bg-blue-500 p-2 text-white rounded-xl" />

      <div className="w-full pt-2 font-light">
        <h3 className="text-xl">{item.CardTitle}</h3>
        <p className="pt-4 leading-5 w-full">{item.slogan}</p>

        {item.list.map((li, i) => (
          <li key={i}>{li}</li>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
