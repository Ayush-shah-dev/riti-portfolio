import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import serenityImage from './serenity.jpg'; // Adjust the path as needed
import cobrewImage from './cobrew.png'; // Adjust the path as needed
import omImage from './om logo.png'; // Adjust the path as needed


const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
          Get in Touch
        </h1>
        <p className="text-secondary text-center max-w-3xl mx-auto mb-16">
          Have a project in mind or a question about my services? I'd love to hear from you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-semibold mb-6">Send me a message</h2>
            
            {isSubmitted ? (
              <div className="bg-success/10 border border-success text-success rounded-md p-4 mb-6">
                <p className="font-medium">Your message has been sent successfully!</p>
                <p className="text-sm mt-1">I'll get back to you soon.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select a subject</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="Strategy Development">Strategy Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-6">Contact Information</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="mt-1 mr-4 text-accent" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-secondary">+91-6351103106</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="mt-1 mr-4 text-accent" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-secondary">shahhriti30@gmail.com</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <MapPin className="mt-1 mr-4 text-accent" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-secondary">
                      15, Satyanarayan Society, Ramnagar, Sabarmati, Ahmedabad, Gujarat-380005
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-serif font-semibold mb-6">Find me on Instagram</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="https://www.instagram.com/serenity.mehendi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-neutral-200 rounded-md hover:border-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-neutral-100 rounded-full overflow-hidden mr-4">
                    <img
                      src= {serenityImage}
                      alt="Serenity Mehendi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Serenity Mehendi</h3>
                    <p className="text-sm text-accent">@serenity.mehendi</p>
                  </div>
                </a>
                
                <a
                  href="https://www.instagram.com/cobrew2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-neutral-200 rounded-md hover:border-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-neutral-100 rounded-full overflow-hidden mr-4">
                    <img
                      src={cobrewImage}
                      alt="Co-Brew"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Co-Brew</h3>
                    <p className="text-sm text-accent">@cobrew2025</p>
                  </div>
                </a>
                
                <a
                  href="https://www.instagram.com/omtraders_shrinkfilms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-neutral-200 rounded-md hover:border-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-neutral-100 rounded-full overflow-hidden mr-4">
                    <img
                      src={omImage}
                      alt="OM Traders Shrinkfilms"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">OM Traders Shrinkfilms</h3>
                    <p className="text-sm text-accent">@omtraders_shrinkfilms</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;