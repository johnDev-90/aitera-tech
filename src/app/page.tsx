"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Solutions from "./components/sections/Solutions";

import { useState } from "react";

export default function Home() {
  const [scrolling, setScruling] = useState<boolean>();

  return (
    <div className="bg-[#ffffff] w-full">
      <header>
        <Navbar />
      </header>
      <main className="pt-4">
        <Hero />
        <Solutions />
        <div className="h-screen w-full bg-amber-200"></div>
        <div className="h-screen w-full bg-amber-300"></div>
        <div className="h-screen w-full bg-amber-400"></div>
      </main>
      <footer></footer>
    </div>
  );
}
