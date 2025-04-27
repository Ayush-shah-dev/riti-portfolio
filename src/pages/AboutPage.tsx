import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center">
          About Me
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Riti Shah"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-4">Riti Shah</h2>
            <p className="text-lg font-medium text-accent mb-4">Social Media Manager</p>
            
            <p className="text-secondary mb-4">
              I am a social media manager and content marketer with a passion for creating
              engaging digital experiences. With excellent communication skills and a
              strategic approach, I help brands build and maintain a solid presence online.
            </p>
            
            <p className="text-secondary mb-6">
              My approach is to understand your business goals and audience deeply, then
              develop tailored social media strategies that connect, engage, and convert.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-secondary">shahhriti30@gmail.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-secondary">+91-6351103106</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-secondary">Ahmedabad, Gujarat</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-secondary">Bachelor of Bsc.IT, GLS University</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-serif font-semibold mb-6">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <h3 className="font-medium mb-2">Research</h3>
                <div className="w-full bg-neutral-100 rounded-full h-2.5">
                  <div className="bg-accent h-2.5 rounded-full" style={{ width: "93%" }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Digital Analytics</h3>
                <div className="w-full bg-neutral-100 rounded-full h-2.5">
                  <div className="bg-accent h-2.5 rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Communication</h3>
                <div className="w-full bg-neutral-100 rounded-full h-2.5">
                  <div className="bg-accent h-2.5 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-4">
                <h3 className="font-medium mb-2">Strategic Planning</h3>
                <div className="w-full bg-neutral-100 rounded-full h-2.5">
                  <div className="bg-accent h-2.5 rounded-full" style={{ width: "83%" }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Social Media Management</h3>
                <div className="w-full bg-neutral-100 rounded-full h-2.5">
                  <div className="bg-accent h-2.5 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Education & Certification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-semibold mb-6">Education</h2>
            
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <h3 className="font-medium">Bachelor of Bsc.IT</h3>
                <span className="text-accent">2022 - 2025</span>
              </div>
              <p className="text-secondary">GLS University</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-semibold mb-6">Certification</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-1">Digital Marketing Certificate</h3>
              <p className="text-secondary">Shree Jagvallabh Bhatar Committee</p>
            </div>
          </div>
        </div>
        
        {/* Languages & Hobbies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-semibold mb-6">Languages</h2>
            
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                <span>English</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                <span>Hindi</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                <span>Gujarati</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                <span>Marwadi</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-semibold mb-6">Hobbies & Interests</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                <span>Photography</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                <span>Writing</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                <span>Traveling</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                <span>Videography</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                <span>Cooking</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-accent rounded-full mr-3"></span>
                <span>Dancing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;