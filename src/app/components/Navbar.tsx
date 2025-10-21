import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
 <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 font-sans">
    <span className="text-3xl font-bold cursor-pointer">Logo</span>

    <div className="flex gap-6 font-semibold">
      <a href="#home" className="hover:text-cyan-700">Home</a>
      <a href="#solutions" className="hover:text-cyan-700">Solutions</a>
      <a href="#about" className="hover:text-cyan-700">About Us</a>
      <a href="#contactus" className="hover:text-cyan-700">Contact Us</a>
    </div>

    <button className="bg-cyan-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-700 transition">
      Let’s Talk
    </button>
  </div>
</nav>
  )
}

export default Navbar
