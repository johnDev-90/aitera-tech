import React from "react";
import { ButtonProps_Type } from "@/app/types/types";
import Link from "next/link";

const ButtonCta1 = ({ text }: ButtonProps_Type) => {
  return (
    <Link href={"#contact"}>
      <button className="hidden md:flex cursor-pointer bg-cyan-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-700 transition">
        {text}
      </button>
    </Link>
  );
};

export default ButtonCta1;
