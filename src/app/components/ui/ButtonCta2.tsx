import React from "react";
import { ButtonProps_Type } from "@/app/types/types";

const ButtonCta2 = ({ text }: ButtonProps_Type) => {
  return (
    <div className="pt-10 flex justify-center md:flex md:justify-start gap-2 md:w-full md:pt-10">
      <button className="w-50 text-2xl md:text-xl  bg-cyan-600 p-4 rounded-full text-white font-bold shadow-md md:shadow-black md:hover:bg-cyan-500 md:transition-all md:cursor-pointer">
        {text}
      </button>
    </div>
  );
};

export default ButtonCta2;
