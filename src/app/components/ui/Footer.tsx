import React from "react";
import Link from "next/link";
import IconesFooter from "./IconesFooter";

const Footer = () => {
  return (
    <footer className="w-full p-8 flex flex-col justify-center gap-8 h-80 bg-gray-100  ">
      <div className="w-full flex justify-center gap-16">
        <Link className="hover:text-cyan-700 font-semibold transition-all" href={"#"}>About</Link>
        <Link className="hover:text-cyan-700 font-semibold transition-all" href={"#"}>Blogs</Link>
        <Link className="hover:text-cyan-700 font-semibold transition-all" href={"#"}>Jobs</Link>
        <Link className="hover:text-cyan-700 font-semibold transition-all" href={"#"}>Press</Link>
        <Link className="hover:text-cyan-700 font-semibold transition-all" href={"#"}>Accessibility</Link>
      </div>

       <IconesFooter />
     
    
      <div className="w-full flex  justify-center">
        <p className="">© 2024 Aitera Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
