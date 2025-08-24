import React, { useEffect, useState } from 'react';

const TestimonialCard = ({ image, quote, name, title, alt, index, isVisible }) => (
  <div className={`bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center text-center space-y-6 transition-all duration-700 delay-${index * 200} hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    <img 
      alt={alt}
      className="w-24 h-24 rounded-full object-cover transition-transform duration-300 hover:scale-110" 
      src={image}
    />
    <p className="text-gray-700 italic">"{quote}"</p>
    <h4 className="font-semibold text-gray-900">{name}</h4>
    <span className="text-peach-300 font-semibold">{title}</span>
  </div>
);

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      image: "https://storage.googleapis.com/a1aa/image/375e613f-0af3-4f48-2dff-ad2d87bd1275.jpg",
      quote: "FASHIONATE transformed our online presence. Their design and development team is top-notch!",
      name: "Jessica Brown",
      title: "CEO, BrightTech",
      alt: "Portrait of client 1, a smiling woman with short hair and glasses"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/bae5ddd9-42a1-4453-2862-852d8fea4b7e.jpg",
      quote: "Their attention to detail and creativity helped us stand out in a crowded market.",
      name: "Michael Lee",
      title: "Founder, AppVantage",
      alt: "Portrait of client 2, a smiling man with beard and casual shirt"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/fc0e6de3-80c5-4ed6-3662-3285e421be0e.jpg",
      quote: "Working with FASHIONATE was a pleasure. They delivered beyond our expectations.",
      name: "Samantha Green",
      title: "Marketing Director, NovaCorp",
      alt: "Portrait of client 3, a smiling woman with long hair and earrings"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
      <h2 className={`text-4xl font-extrabold text-gray-900 text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} index={index} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
