import React from 'react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background with construction pattern and glow effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-transparent"></div>
        
        {/* Red glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-1 max-w-5xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-500 mb-6 drop-shadow-[0_0_15px_rgba(255,51,51,0.3)]">
          Sun Stars Enterprises
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl">
          We're building something great. Our website is under construction, but we're still here to supply all your
          <span className="text-primary-500 font-semibold"> sand, cement, and building materials</span> needs.
        </p>
        
        <div className="mb-12">
          <CountdownTimer />
        </div>
        
        <div className="space-y-6 text-center">
          <div className="text-gray-300">
            <p className="text-lg">Contact us:</p>
            <p className="text-xl font-semibold text-primary-500 drop-shadow-[0_0_8px_rgba(255,51,51,0.3)]">+91 80154 51615</p>
            <p className="text-xl font-semibold text-primary-500 drop-shadow-[0_0_8px_rgba(255,51,51,0.3)]">sunstarsearthmovers@gmail.com</p>
          </div>
          
          <a 
            href="mailto:sunstarsearthmovers@gmail.com" 
            className="inline-block px-8 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:shadow-primary-500/50"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;