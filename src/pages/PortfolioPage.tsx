import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Serenity Mehendi',
    description: 'Social media management for Serenity Mehendi, building brand awareness and client outreach.',
    image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg',
    instagramUrl: 'https://www.instagram.com/serenity.mehendi/',
    instagramHandle: '@serenity.mehendi',
    highlights: [
      'Increased followers by 45% over 6 months',
      'Improved engagement rate to 8.3%',
      'Created consistent branding across platforms',
      'Developed content strategy focusing on seasonal designs'
    ]
  },
  {
    id: 2,
    title: 'Co-Brew',
    description: 'Digital marketing and social media strategy for Co-Brew, an innovative coffee shop.',
    image: 'https://images.pexels.com/photos/4350039/pexels-photo-4350039.jpeg',
    instagramUrl: 'https://www.instagram.com/cobrew2025/',
    instagramHandle: '@cobrew2025',
    highlights: [
      'Launched new product campaigns resulting in 30% sales increase',
      'Created user-generated content strategy',
      'Managed influencer partnerships',
      'Developed content calendar for seasonal promotions'
    ]
  },
  {
    id: 3,
    title: 'OM Traders Shrinkfilms',
    description: 'B2B social media strategy and content creation for industrial product marketing.',
    image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg',
    instagramUrl: 'https://www.instagram.com/omtraders_shrinkfilms/',
    instagramHandle: '@omtraders_shrinkfilms',
    highlights: [
      'Repositioned brand identity for B2B audience',
      'Developed educational content strategy',
      'Created product showcase campaigns',
      'Increased lead generation through social channels by 35%'
    ]
  }
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
          My Portfolio
        </h1>
        <p className="text-secondary text-center max-w-3xl mx-auto mb-16">
          Explore some of the social media accounts I've managed and the results we've achieved together.
        </p>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-serif font-semibold mb-2">{project.title}</h2>
                  
                  <a 
                    href={project.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-accent hover:text-accent-dark transition-colors mb-4"
                  >
                    <Instagram size={16} className="mr-2" /> 
                    {project.instagramHandle}
                  </a>
                  
                  <p className="text-secondary mb-6">{project.description}</p>
                  
                  <h3 className="font-medium mb-3">Highlights:</h3>
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={project.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent font-medium hover:text-accent-dark transition-colors"
                  >
                    View Instagram <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
              
              {project.id !== 3 && (
                <div className="py-8 px-8 border-t border-neutral-100">
                  <h3 className="font-medium mb-4">Campaign Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="aspect-square rounded-md overflow-hidden bg-neutral-100">
                        <img 
                          src={`https://picsum.photos/500/500?random=${project.id}${index}`} 
                          alt={`${project.title} campaign ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;