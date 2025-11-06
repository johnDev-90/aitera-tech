import React from "react";
import { CardsContentTypes } from "@/app/types/types";

type PropsType = {
  item: CardsContentTypes;
};

const ServicesCard = ({ item }: PropsType) => {
  const Logo = item.logo;
  return (
    <div
      data-aos="flip-left"
      className="w-full rounded-2xl p-4 border border-gray-300 transition-all hover:shadow hover:shadow-cyan-700"
    >
      <Logo className="size-15 bg-blue-500 p-2 text-white rounded-xl" />

      <div className="w-full pt-2 font-light">
        <h3 className="text-xl font-semibold text-cyan-800">
          {item.CardTitle}
        </h3>
        <p className="pt-4 leading-5 w-full">{item.slogan}</p>

        <ul className="list-disc marker:text-blue-700 pl-6 pt-4">
          {item.list.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesCard;
