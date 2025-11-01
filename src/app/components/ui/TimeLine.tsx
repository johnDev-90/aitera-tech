import React from "react";
import { ParagrhapTypes } from "@/app/types/types";

type PropsType = {
  paraghrapText: ParagrhapTypes;
};

const TimeLine = ({ paraghrapText }: PropsType) => {
  return (
    <div className="w-full p-4 flex justify-center items-center  lg:flex">
      <ol className="mt-16 w-full lg:mt-0 lg:items-center lg:w-full lg:p-16  lg:flex">
        {paraghrapText &&
          paraghrapText.map((p, index) => (
            <li key={index} className="relative mb-6 sm:mb-8">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10   p-2 md:w-12 md:h-12 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-400  sm:ring-8  shrink-0">
                  <span className="text-white font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <div className=" sm:flex  lg:flex lg:w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="pt-2 w-full md:w-full">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="font-light lg:text-lg leading-none pt-2">
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
