import React from "react";
import { ButtonProps_Type } from "@/app/types/types";

const ButtonCta1 = ({ text }: ButtonProps_Type) => {
  return (
    <button className="bg-cyan-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-700 transition">
      {text}
    </button>
  );
};

export default ButtonCta1;
