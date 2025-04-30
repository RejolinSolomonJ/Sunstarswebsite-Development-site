import React, { useState } from 'react';
import { Bell, ChevronRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="newsletter" className="py-16 bg-yellow-500">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 mb-6">
                <Bell className="h-6 w-6 text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-800">Get Notified</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to be the first to know when our new website launches,
                and to receive special offers on building materials.
              </p>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                  <p className="font-medium">Thank you for subscribing!</p>
                  <p>We'll keep you updated on our launch and special offers.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-600 transition duration-300 flex items-center justify-center gap-1"
                  >
                    Subscribe
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </form>
              )}
              
              <p className="text-sm text-gray-500">
                We respect your privacy and will never share your information.
              </p>
            </div>
            
            <div className="hidden md:block md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-100 opacity-50 rounded-lg transform rotate-3"></div>
                <img
                  src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Construction materials"
                  className="relative z-10 rounded-lg shadow-lg object-cover h-64 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;