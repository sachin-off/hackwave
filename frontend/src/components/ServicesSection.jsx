import React, { useEffect, useState } from 'react';

const ProductCard = ({ image, title, description, price, category, alt, index, isVisible }) => (
  <div className={`flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 delay-${index * 100} hover:scale-105 cursor-pointer overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    <div className="relative overflow-hidden">
      <img 
        alt={alt} 
        className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 hover:scale-110" 
        src={image} 
      />
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-peach-200 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
        {category}
      </div>
    </div>
    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-2">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">{description}</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <span className="text-xl sm:text-2xl font-bold text-peach-300">${price}</span>
        <button className="bg-peach-200 hover:bg-peach-300 text-black font-semibold px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base">
          View Details
        </button>
      </div>
    </div>
  </div>
);

const ProductSuggestionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      image: "https://storage.googleapis.com/a1aa/image/cbf462b1-ba8a-4afe-8c34-98d97055780f.jpg",
      title: "Premium Fashion Collection",
      description: "Exclusive designer pieces that define modern elegance and sophistication.",
      price: "299",
      category: "Fashion",
      alt: "Premium fashion collection with elegant designs"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/e5a47aab-301f-47ac-8575-482a9465b200.jpg",
      title: "Accessories Bundle",
      description: "Complete your look with our curated selection of premium accessories.",
      price: "149",
      category: "Accessories",
      alt: "Stylish accessories bundle with various items"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/8060dbe7-3243-46b6-f698-d6faf7e170ec.jpg",
      title: "Seasonal Collection",
      description: "Trendsetting pieces that capture the essence of current fashion trends.",
      price: "199",
      category: "Seasonal",
      alt: "Seasonal fashion collection with trendy designs"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/375e613f-0af3-4f48-2dff-ad2d87bd1275.jpg",
      title: "Luxury Essentials",
      description: "Timeless classics that form the foundation of any sophisticated wardrobe.",
      price: "399",
      category: "Luxury",
      alt: "Luxury fashion essentials with premium quality"
    }
  ];

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Discover Our Products
        </h2>
        <p className={`text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Explore our carefully curated collection of premium fashion items designed to elevate your style and confidence.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} index={index} isVisible={isVisible} />
        ))}
      </div>
      <div className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <button className="bg-peach-200 hover:bg-peach-300 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm sm:text-base">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ProductSuggestionsSection;
