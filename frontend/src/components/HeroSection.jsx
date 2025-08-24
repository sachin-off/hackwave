import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 max-w-xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We create
            <span className="text-peach-300"> digital experiences</span> that
            <br className="hidden sm:block" />
            make an impact
          </h1>
          <p className={`text-base sm:text-lg text-gray-600 max-w-lg transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            FASHIONATE is a creative agency focused on crafting beautiful, functional, and user-centered digital products that help brands grow.
          </p>
          <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to="/signup" className="inline-block bg-peach-200 hover:bg-peach-300 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl text-center text-sm sm:text-base">
              Get Started
            </Link>
          </div>
        </div>
        <div className={`relative w-full max-w-lg mx-auto order-first lg:order-last transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'}`}>
          <img 
            alt="Abstract 3D shape with peach and purple gradients, floating in a white space"
            className="w-full rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-3xl" 
            src="https://storage.googleapis.com/a1aa/image/a2e8492d-7daf-47ea-9ebb-e1632d771805.jpg" 
          />
          <div className={`absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-peach-100 opacity-70 blur-3xl transition-all duration-2000 delay-500 ${isVisible ? 'opacity-70 scale-100' : 'opacity-0 scale-50'}`}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
