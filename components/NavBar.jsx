// components/NavBar.jsx
import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">SocialOptimizr</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/">
                <a className="py-4 px-2 text-green-500 font-semibold hover:text-green-400 transition duration-300">Home</a>
              </Link>
              <Link href="/about">
                <a className="py-4 px-2 text-green-500 font-semibold hover:text-green-400 transition duration-300">About</a>
              </Link>
              <Link href="/contact">
                <a className="py-4 px-2 text-green-500 font-semibold hover:text-green-400 transition duration-300">Contact</a>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden mobile-menu">
        <ul className="">
          <li><a href="/" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Home</a></li>
          <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
          <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
          <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
