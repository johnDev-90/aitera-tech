"use client";
import ContactUs from "./components/sections/ContactUs";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Solutions from "./components/sections/Solutions";
import Footer from "./components/ui/Footer";

import { useState } from "react";

export default function Home() {
  const [scrolling, setScruling] = useState<boolean>();

  return (
    <div className="bg-[#ffffff] w-full max-w-full mx-auto px-6">
      <header>
        <Navbar />
      </header>
      <main className="pt-4">
        <Hero />

        <div className="pt-16 pb-16">
          <Solutions />
        </div>

        <ContactUs />
      </main>
      <footer></footer>
    </div>
  );
}
