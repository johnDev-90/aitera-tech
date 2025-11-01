"use client";

import { useState } from "react";
import ContactUs from "./components/sections/ContactUs";
import Navbar from "./components/Navbar";
import NavbartMobile from "./components/ui/NavbartMobile";
import Hero from "./components/sections/Hero";
import Solutions from "./components/sections/Solutions";
import Services from "./components/sections/Services";
import Footer from "./components/ui/Footer";

export default function Home() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="bg-[#ffffff] w-full max-w-full mx-auto px-6">
      <header>
        <Navbar setToggle={setToggle} toggle={toggle} />
        <NavbartMobile setToggle={setToggle} toggle={toggle} />
      </header>
      <main className="pt-4">
        <Hero />

        <Solutions />

        <Services />

        <ContactUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
