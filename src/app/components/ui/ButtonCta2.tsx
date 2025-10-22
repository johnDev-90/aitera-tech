import React from "react";
import { ButtonProps_Type } from "@/app/types/types";

const ButtonCta2 = ({ text }: ButtonProps_Type) => {
  return (
    <div className="flex text-base gap-2 w-full pt-10">
      <button className="text-2xl w-50  bg-cyan-600 p-4 rounded-full text-white font-bold shadow-md shadow-black hover:bg-cyan-500 transition-all cursor-pointer">
        {text}
      </button>
    </div>
  );
};

export default ButtonCta2;
