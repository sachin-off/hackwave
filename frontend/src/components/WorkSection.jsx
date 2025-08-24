import React, { useEffect, useState } from 'react';

const ProjectCard = ({ image, title, description, alt, index, isVisible }) => (
  <div className={`rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg cursor-pointer group relative transition-all duration-700 delay-${index * 200} hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    <img 
      alt={alt}
      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
      src={image}
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base">{description}</p>
    </div>
  </div>
);

const WorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      image: "https://storage.googleapis.com/a1aa/image/cbf462b1-ba8a-4afe-8c34-98d97055780f.jpg",
      title: "Modern Website",
      description: "A sleek and modern website design for a tech startup.",
      alt: "Project 1: Modern website design with clean lines and peach-purple accents"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/e5a47aab-301f-47ac-8575-482a9465b200.jpg",
      title: "Mobile App UI",
      description: "Engaging and user-friendly mobile app interface design.",
      alt: "Project 2: Mobile app UI with vibrant colors and smooth animations"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/8060dbe7-3243-46b6-f698-d6faf7e170ec.jpg",
      title: "Branding Identity",
      description: "Minimalist branding identity for a creative agency.",
      alt: "Project 3: Branding identity with minimalist logo and color scheme"
    }
  ];

  return (
    <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-peach-50 rounded-2xl sm:rounded-3xl mx-4 sm:mx-6 lg:mx-8">
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        Our Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
