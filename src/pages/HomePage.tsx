import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillBar from '../components/SkillBar';
import serenityImage from './serenity.jpg'; // Adjust the path as needed
import cobrewImage from './cobrew.png'; // Adjust the path as needed
import omImage from './om logo.png'; // Adjust the path as needed


const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
                Social Media Manager & Content Creator
              </h1>
              <p className="text-secondary text-lg mb-8">
                Hello, I'm Riti Shah. I create engaging social media strategies and content
                that connects brands with their audience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  View My Work
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full bg-accent/10 z-0"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Riti Shah"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-heading text-center">My Skills</h2>
          <div className="max-w-3xl mx-auto">
            <SkillBar label="Research" percentage={93} />
            <SkillBar label="Digital Analytics" percentage={88} />
            <SkillBar label="Communication" percentage={95} />
            <SkillBar label="Strategic Planning" percentage={83} />
            <SkillBar label="Social Media Management" percentage={90} />
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-8">
            <h2 className="section-heading">Featured Work</h2>
            <Link 
              to="/portfolio" 
              className="flex items-center text-accent hover:text-accent-dark transition-colors"
            >
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Serenity Mehendi */}
            <div className="project-card bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={serenityImage}
                  alt="Serenity Mehendi" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-serif font-semibold mb-2">Serenity Mehendi</h3>
                    <a 
                      href="https://www.instagram.com/serenity.mehendi/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm"
                    >
                      <Instagram size={14} className="mr-1" /> @serenity.mehendi
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Co-Brew */}
            <div className="project-card bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={cobrewImage} 
                  alt="Co-Brew" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-serif font-semibold mb-2">Co-Brew</h3>
                    <a 
                      href="https://www.instagram.com/cobrew2025/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm"
                    >
                      <Instagram size={14} className="mr-1" /> @cobrew2025
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* OM Traders Shrinkfilms */}
            <div className="project-card bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={omImage} 
                  alt="OM Traders Shrinkfilms" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-serif font-semibold mb-2">OM Traders</h3>
                    <a 
                      href="https://www.instagram.com/omtraders_shrinkfilms/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm"
                    >
                      <Instagram size={14} className="mr-1" /> @omtraders_shrinkfilms
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-heading text-center">Services I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="text-xl font-serif font-semibold mb-4">Social Media Management</h3>
              <p className="text-secondary">
                Complete management of your social media presence across platforms, including
                content creation, scheduling, and community engagement.
              </p>
            </div>
            
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="text-xl font-serif font-semibold mb-4">Content Creation</h3>
              <p className="text-secondary">
                Engaging, high-quality content tailored to your brand voice and audience, including
                graphics, captions, and stories.
              </p>
            </div>
            
            <div className="p-6 bg-neutral-50 rounded-lg">
              <h3 className="text-xl font-serif font-semibold mb-4">Strategy Development</h3>
              <p className="text-secondary">
                Comprehensive social media strategies designed to grow your audience, increase
                engagement, and achieve your business objectives.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to transform your social media presence?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's work together to create a compelling social media strategy that connects with your audience
            and drives results for your business.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-accent font-medium rounded-md transition-all hover:bg-primary hover:text-white">
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;