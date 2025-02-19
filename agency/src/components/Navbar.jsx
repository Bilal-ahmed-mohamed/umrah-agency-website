import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp';
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  return (
      
    <nav className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
           <img className='w-20 h-14 flex items-center justify-center bg-gray-200 rounded-full' src={logo} alt="" />
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <Link to='/'>
              <a className="text-black-500 transition hover:text-stone-400" href="#"> Home </a>
            </Link>

            <Link to='/About'>
              <a className="text-black-500 transition hover:text-stone-400" href="#"> About </a>
            </Link>

            <Link to='/umrah'>
              <a className="text-black-500 transition hover:text-stone-400" href="#"> Umrah </a>
            </Link>

            <li>
              <a className="text-black-500 transition hover:text-stone-400" href="#"> Packages </a>
            </li>

            <li>
              <a className="text-black-500 transition hover:text-stone-400" href="#"> Contact </a>
            </li>

            
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
    
        <div className="block">
          <h3>    call us today <br /> 
           0712345678</h3>
        </div>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Navbar