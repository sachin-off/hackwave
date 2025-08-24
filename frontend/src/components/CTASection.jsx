import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`bg-peach-200 rounded-2xl sm:rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center text-black transition-all duration-1000 mx-4 sm:mx-6 lg:mx-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 max-w-3xl mx-auto px-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        Ready to start your project? Let's build something amazing together.
      </h2>
      <Link to="/signup" className={`inline-block bg-white text-peach-300 font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl delay-400 text-sm sm:text-base ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        Get Started
      </Link>
    </section>
  );
};

export default CTASection;
