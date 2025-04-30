import React from 'react';
import { Truck, Package, HardHat, Building } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    {
      icon: <Package className="h-10 w-10 text-yellow-500" />,
      title: 'Building Materials',
      description: 'Premium quality cement, sand, and other construction essentials.'
    },
    {
      icon: <Truck className="h-10 w-10 text-yellow-500" />,
      title: 'Fast Delivery',
      description: 'On-time delivery to your construction site, anywhere in the region.'
    },
    {
      icon: <HardHat className="h-10 w-10 text-yellow-500" />,
      title: 'Expert Consultation',
      description: 'Professional advice on material selection for your specific project needs.'
    },
    {
      icon: <Building className="h-10 w-10 text-yellow-500" />,
      title: 'Bulk Supply',
      description: 'Special rates for large-scale construction projects and regular orders.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Sun Stars Enterprises</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading supplier of high-quality building materials, dedicated to supporting construction projects of all sizes with reliable products and exceptional service.
          </p>
        </div>
        
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;