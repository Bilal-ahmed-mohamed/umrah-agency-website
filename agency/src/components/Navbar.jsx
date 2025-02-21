import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img className="w-20 h-14 bg-gray-200 rounded-full" src={logo} alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li><Link to="/" className="text-black-500 transition hover:text-stone-400">Home</Link></li>
                <li><Link to="/about" className="text-black-500 transition hover:text-stone-400">About</Link></li>
                <li><Link to="/umrah" className="text-black-500 transition hover:text-stone-400">Umrah</Link></li>
                <li><Link to="/packages" className="text-black-500 transition hover:text-stone-400">Packages</Link></li>
                <li><Link to="/contact" className="text-black-500 transition hover:text-stone-400">Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* Call Us Section */}
          <div className="hidden md:flex items-center gap-4">
            <h3 className="text-black-500 text-sm">
              Call us today <br />
              <span className="font-bold">0712345678</span>
            </h3>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700">
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} transition duration-300`}>
          <ul className="flex flex-col items-center gap-4 py-4 text-sm bg-white shadow-md">
            <li><Link to="/" className="text-black-500 transition hover:text-stone-400">Home</Link></li>
            <li><Link to="/about" className="text-black-500 transition hover:text-stone-400">About</Link></li>
            <li><Link to="/umrah" className="text-black-500 transition hover:text-stone-400">Umrah</Link></li>
            <li><Link to="/packages" className="text-black-500 transition hover:text-stone-400">Packages</Link></li>
            <li><Link to="/contact" className="text-black-500 transition hover:text-stone-400">Contact</Link></li>
            <li className="text-center text-black-500 text-sm">
              Call us today: <br />
              <span className="font-bold">0712345678</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
