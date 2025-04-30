import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', { email, message });
    setSubmitted(true);
    setEmail('');
    setMessage('');
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our website is under construction, but our business is fully operational.
            Reach out to us for all your building material needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">info@sunstarsenterprises.com</p>
                    <p className="text-gray-600">sales@sunstarsenterprises.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">123 Construction Avenue</p>
                    <p className="text-gray-600">Building District, CA 90210</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-800 mb-3">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                  <p className="font-medium">Thank you for reaching out!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Tell us about your requirements"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-600 transition duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;