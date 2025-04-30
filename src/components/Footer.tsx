import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, HardHat } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <HardHat size={28} className="text-yellow-500" />
            <h2 className="text-xl font-bold text-white">
              <span className="text-yellow-500">Sun Stars</span> Enterprises
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-500 transition duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-yellow-500 transition duration-300">About Us</a></li>
                <li><a href="#services" className="hover:text-yellow-500 transition duration-300">Services</a></li>
                <li><a href="#contact" className="hover:text-yellow-500 transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li className="hover:text-yellow-500 transition duration-300">Building Materials</li>
                <li className="hover:text-yellow-500 transition duration-300">Material Delivery</li>
                <li className="hover:text-yellow-500 transition duration-300">Consultation</li>
                <li className="hover:text-yellow-500 transition duration-300">Bulk Orders</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li>123 Construction Avenue</li>
                <li>Building District, CA 90210</li>
                <li>info@sunstarsenterprises.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sun Stars Enterprises. All rights reserved.</p>
          <p className="mt-2">
            <span className="inline-block bg-yellow-500 h-1 w-10 rounded-full mx-auto"></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;