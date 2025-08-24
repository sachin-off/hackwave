import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TeamMember = ({ name, role, description, image, skills, index, isVisible }) => (
  <div className={`bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    <div className="relative overflow-hidden">
      <img alt={`${name} - ${role}`} className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 hover:scale-110" src={image} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">{name}</h3>
        <p className="text-peach-200 text-sm sm:text-base font-semibold">{role}</p>
      </div>
    </div>
    <div className="p-4 sm:p-6">
      <p className="text-gray-600 text-sm sm:text-base mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <span key={skillIndex} className="px-2 sm:px-3 py-1 bg-peach-100 text-peach-800 rounded-full text-xs sm:text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Frontend Developer",
      description: "Passionate about creating beautiful, responsive user interfaces that bring designs to life.",
      image: "https://storage.googleapis.com/a1aa/image/cbf462b1-ba8a-4afe-8c34-98d97055780f.jpg",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      name: "Sarah Rodriguez",
      role: "Backend Developer",
      description: "Architecting robust server-side solutions and APIs that power seamless user experiences.",
      image: "https://storage.googleapis.com/a1aa/image/e5a47aab-301f-47ac-8575-482a9465b200.jpg",
      skills: ["Node.js", "Express", "MongoDB", "AWS"]
    },
    {
      name: "Marcus Johnson",
      role: "UI/UX Designer",
      description: "Crafting intuitive and visually stunning user experiences that delight users.",
      image: "https://storage.googleapis.com/a1aa/image/8060dbe7-3243-46b6-f698-d6faf7e170ec.jpg",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"]
    },
    {
      name: "Priya Patel",
      role: "Connectivity Specialist",
      description: "Ensuring seamless integration and communication between all system components.",
      image: "https://storage.googleapis.com/a1aa/image/375e613f-0af3-4f48-2dff-ad2d87bd1275.jpg",
      skills: ["API Integration", "WebSockets", "Microservices", "Docker"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-50 via-white to-peach-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">
            FASHIONATE
          </Link>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
              Back to Home
            </Link>
            <Link to="/fashion-search" className="bg-peach-200 hover:bg-peach-300 text-black font-semibold px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 text-sm sm:text-base">
              Fashion Search
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Meet Our <span className="text-peach-300">Dream Team</span>
          </h1>
          <p className={`text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-8 sm:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We're a passionate team of four innovators dedicated to revolutionizing the fashion industry through cutting-edge technology and exceptional user experiences.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              The Minds Behind FASHIONATE
            </h2>
            <p className={`text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Each team member brings unique expertise and passion to create the ultimate fashion discovery platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                  At FASHIONATE, we believe that fashion should be accessible, personalized, and sustainable. Our mission is to create innovative digital solutions that connect fashion enthusiasts with their perfect style.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-peach-300 rounded-full"></div>
                    <span className="text-gray-700 text-sm sm:text-base">Personalized fashion recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-peach-300 rounded-full"></div>
                    <span className="text-gray-700 text-sm sm:text-base">Sustainable shopping practices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-peach-300 rounded-full"></div>
                    <span className="text-gray-700 text-sm sm:text-base">Cutting-edge technology integration</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="https://storage.googleapis.com/a1aa/image/bae5ddd9-42a1-4453-2862-852d8fea4b7e.jpg" alt="Fashion technology concept" className="w-full rounded-2xl shadow-lg" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-peach-200 rounded-full opacity-80 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-gradient-to-r from-peach-200 to-peach-300 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Experience FASHIONATE?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of fashion enthusiasts who are already discovering their perfect style with our innovative platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="bg-white text-peach-300 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Get Started
              </Link>
              <Link to="/fashion-search" className="bg-gray-900 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Explore Fashion Search
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
