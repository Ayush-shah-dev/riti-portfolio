import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-serif font-bold text-primary">
            Riti<span className="text-accent">.</span>Shah
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.instagram.com/serenity.mehendi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
            aria-label="Instagram - Serenity Mehendi"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="container-custom pt-20">
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-neutral-100 pb-2">
                <Link
                  to={link.path}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setIsOpen(false);
                  }}
                  className={`block text-lg font-medium transition-colors hover:text-accent ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex space-x-6 border-t border-neutral-100 pt-4">
            <a
              href="https://www.instagram.com/serenity.mehendi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
              aria-label="Instagram - Serenity Mehendi"
            >
              <Instagram size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;