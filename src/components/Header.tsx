import React from 'react';
import { HardHat } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-white/90 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HardHat size={32} className="text-yellow-500" />
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-yellow-500">Sun Stars</span> Enterprises
          </h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <a href="#about" className="text-gray-700 hover:text-yellow-500 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-700 hover:text-yellow-500 transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-yellow-500 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;