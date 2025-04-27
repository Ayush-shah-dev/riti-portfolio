import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">
              Riti<span className="text-accent">.</span>Shah
            </h3>
            <p className="text-neutral-200 mb-4">
              Social media manager and content marketer with expertise in
              developing strategic digital marketing campaigns.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/serenity.mehendi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Instagram - Serenity Mehendi"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-200 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-200 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-neutral-200 hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-200 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-200 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-3 text-accent" />
                <span className="text-neutral-200">+91-6351103106</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-3 text-accent" />
                <span className="text-neutral-200">shahhriti30@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-accent" />
                <span className="text-neutral-200">
                  15, Satyanarayan Society, Ramnagar, Sabarmati, Ahmedabad, Gujarat-380005
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-700">
          <p className="text-neutral-300 text-center text-sm">
            © {currentYear} Riti Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;