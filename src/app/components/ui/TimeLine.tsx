import React from "react";
import { ParagrhapTypes } from "@/app/types/types";

type PropsType = {
  paraghrapText: ParagrhapTypes;
};

const TimeLine = ({ paraghrapText }: PropsType) => {
  return (
    <div className="p-4 flex justify-center w-full items-center">
      <ol className="items-center w-full p-16  sm:flex">
        {paraghrapText &&
          paraghrapText.map((p, index) => (
            <li key={index} className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center  p-2 w-7 h-7 bg-blue-100 rounded-full ring-0 ring-white dark:bg-cyan-700 sm:ring-8  shrink-0">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="pt-2">
                <h3 className="text-base font-serif font-bold">{p.title}</h3>
                <p className="font-serif text-base leading-none pt-2">
                  {p.textContent}
                </p>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default TimeLine;
