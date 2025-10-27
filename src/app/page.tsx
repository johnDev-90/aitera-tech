"use client";
import ContactUs from "./components/sections/ContactUs";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Solutions from "./components/sections/Solutions";
import Services from "./components/sections/Services";
import Footer from "./components/ui/Footer";

export default function Home() {
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
        <Services />

        <ContactUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
