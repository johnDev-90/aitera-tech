import React from "react";
import { ParagrhapTypes } from "@/app/types/types";

type PropsType = {
  textArray: ParagrhapTypes;
};

const TimeLine = ({ textArray }: PropsType) => {
  return (
    <div className="p-4 flex justify-center w-full items-center">
      <ol className="items-center w-full p-16 sm:flex">
        {textArray &&
          textArray.map((p, index) => (
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <span className="text-white font-bold text-2xl">
                    {index + 1}
                  </span>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-sans font-semibold">{p.title}</h3>
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
