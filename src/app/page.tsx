import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
      <div className="bg-[#ffffff] w-full">
         <header>
           <Navbar />
         </header>
         <main className="pt-4">
          <Hero />

         </main>
         <footer>

         </footer>
       </div>
  );
}
