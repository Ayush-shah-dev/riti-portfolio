import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Social Media Management',
    description: 'Complete management of your social media presence across platforms to build brand awareness and engage with your audience.',
    deliverables: [
      'Account setup and optimization',
      'Content creation and scheduling',
      'Community engagement and response management',
      'Regular performance reporting',
      'Hashtag strategy development'
    ],
    icon: '📱'
  },
  {
    id: 2,
    title: 'Content Creation',
    description: 'Creation of high-quality, engaging content tailored to your brand voice and target audience.',
    deliverables: [
      'Custom graphic design for posts',
      'Caption writing and hashtag research',
      'Story and Reel creation',
      'Photography and videography direction',
      'Content calendar development'
    ],
    icon: '✏️'
  },
  {
    id: 3,
    title: 'Strategy Development',
    description: 'Comprehensive social media strategies designed to achieve your specific business objectives.',
    deliverables: [
      'Audience analysis and targeting',
      'Competitive research',
      'Platform-specific strategy development',
      'Content themes and pillars',
      'Growth and engagement tactics'
    ],
    icon: '📊'
  },
  {
    id: 4,
    title: 'Analytics & Reporting',
    description: 'Detailed analysis of your social media performance with actionable insights for improvement.',
    deliverables: [
      'Custom performance dashboards',
      'Monthly progress reports',
      'Engagement and growth metrics',
      'Content performance analysis',
      'Recommendations for optimization'
    ],
    icon: '📈'
  },
  {
    id: 5,
    title: 'Campaign Management',
    description: 'End-to-end management of targeted social media campaigns to achieve specific objectives.',
    deliverables: [
      'Campaign strategy and planning',
      'Content creation and scheduling',
      'Paid social ad management',
      'Performance tracking and optimization',
      'Post-campaign analysis and reporting'
    ],
    icon: '🚀'
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
          My Services
        </h1>
        <p className="text-secondary text-center max-w-3xl mx-auto mb-16">
          I offer a range of tailored services to help you build and maintain a strong social media presence that drives results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-serif font-semibold mb-3">{service.title}</h2>
                <p className="text-secondary mb-6">{service.description}</p>
                
                <h3 className="font-medium mb-3">What's included:</h3>
                <ul className="space-y-2 mb-6">
                  {service.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif font-semibold text-primary mb-12 text-center">
            My Approach
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-medium mb-2">Discovery</h3>
              <p className="text-secondary text-sm md:text-base">Understanding your brand, goals, and target audience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-medium mb-2">Strategy</h3>
              <p className="text-secondary text-sm md:text-base">Creating a tailored plan to achieve your objectives</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-medium mb-2">Implementation</h3>
              <p className="text-secondary text-sm md:text-base">Executing the strategy with high-quality content</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-medium mb-2">Analysis</h3>
              <p className="text-secondary text-sm md:text-base">Monitoring performance and refining the approach</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 bg-neutral-50 p-8 rounded-lg">
          <h2 className="text-3xl font-serif font-semibold text-primary mb-8 text-center">
            Client Testimonials
          </h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg italic text-secondary mb-6">
              "Riti's strategic approach to social media has transformed our online presence completely. Her attention to detail and understanding of our brand voice is exceptional."
            </p>
            <p className="font-medium">- Ayush Shah</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-serif font-semibold text-primary mb-6">
            Ready to elevate your social media presence?
          </h2>
          <p className="text-secondary max-w-2xl mx-auto mb-8">
            Let's discuss how my services can help you achieve your social media goals and connect with your audience.
          </p>
          <Link to="/contact" className="btn-primary" onClick={() => window.scrollTo(0, 0)}>
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;