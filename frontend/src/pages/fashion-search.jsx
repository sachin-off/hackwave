import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';

const SearchBar = ({ onSearch, onCategoryChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'dresses', label: 'Dresses' },
    { value: 'tops', label: 'Tops' },
    { value: 'bottoms', label: 'Bottoms' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'shoes', label: 'Shoes' },
    { value: 'bags', label: 'Bags' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Find Your Perfect Style</h3>
      
      <form onSubmit={handleSearch} className="space-y-4 sm:space-y-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for fashion items, styles, or trends..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:border-peach-300 focus:outline-none transition-all duration-300"
          />
          <button
            type="submit"
            className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-peach-200 hover:bg-peach-300 text-black p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => handleCategoryChange(category.value)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.value
                  ? 'bg-peach-300 text-black'
                  : 'bg-gray-100 text-gray-700 hover:bg-peach-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

const TrendingSearches = ({ onTrendingClick }) => {
  const trendingTerms = [
    'Summer Dresses', 'Casual Tops', 'Denim Jackets', 'Sneakers', 
    'Handbags', 'Jewelry', 'Activewear', 'Formal Wear'
  ];

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6">
      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Trending Searches</h4>
      <div className="flex flex-wrap gap-2">
        {trendingTerms.map((term, index) => (
          <button
            key={index}
            onClick={() => onTrendingClick(term)}
            className="px-2 sm:px-3 py-1 bg-peach-100 hover:bg-peach-200 text-peach-800 rounded-full text-xs sm:text-sm transition-all duration-300 hover:scale-105"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

const StyleInspiration = () => {
  const styleCategories = [
    { name: 'Minimalist', icon: '✨', color: 'bg-gray-100' },
    { name: 'Bohemian', icon: '🌸', color: 'bg-pink-100' },
    { name: 'Street Style', icon: '🔥', color: 'bg-orange-100' },
    { name: 'Classic', icon: '👔', color: 'bg-blue-100' },
    { name: 'Vintage', icon: '📷', color: 'bg-yellow-100' },
    { name: 'Sporty', icon: '⚡', color: 'bg-green-100' }
  ];

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6">
      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Style Inspiration</h4>
      <div className="grid grid-cols-2 gap-2">
        {styleCategories.map((style, index) => (
          <button
            key={index}
            className={`${style.color} p-3 rounded-xl text-center transition-all duration-300 hover:scale-105`}
          >
            <div className="text-2xl mb-1">{style.icon}</div>
            <div className="text-xs font-medium text-gray-700">{style.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

const FashionSearchPage = () => {
  const { user, logout } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = async (query, category) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setError(null);
    setSearchResults([]);

    try {
      const result = await searchAPI.textSearch(query, category !== 'all' ? category : '');
      
      if (result.success && result.result) {
        // Transform the API response to match our UI
        const transformedResults = result.result.map((item, index) => ({
          id: index + 1,
          name: item.title || `Fashion Item ${index + 1}`,
          price: item.price || '$99',
          image: item.image || `https://storage.googleapis.com/a1aa/image/cbf462b1-ba8a-4afe-8c34-98d97055780f.jpg`,
          link: item.link || '#',
          description: item.snippet || 'Beautiful fashion item'
        }));
        
        setSearchResults(transformedResults);
      } else {
        setError('No results found. Try a different search term.');
      }
    } catch (error) {
      console.error('Search error:', error);
      setError('Search failed. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  const handleCategoryChange = (category) => {
    console.log('Category changed to:', category);
  };

  const handleTrendingClick = (term) => {
    handleSearch(term, 'all');
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">
            FASHIONATE
          </Link>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="text-sm text-gray-600">Welcome, {user?.fullName || 'User'}</span>
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
              Back to Home
            </Link>
            <button 
              onClick={handleLogout}
              className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 text-sm sm:text-base"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Fashion Search Engine
          </h1>
          <p className={`text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Discover the latest trends, find your perfect style, and get personalized fashion recommendations tailored just for you.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="lg:col-span-2">
            <SearchBar onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <TrendingSearches onTrendingClick={handleTrendingClick} />
            <StyleInspiration />
          </div>
        </div>

        {error && (
          <div className="text-center py-8">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
              {error}
            </div>
          </div>
        )}

        {isSearching && (
          <div className={`text-center py-12 sm:py-16 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-block animate-spin rounded-full h-12 sm:h-16 w-12 sm:w-16 border-b-2 border-peach-300"></div>
            <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg">Searching for the perfect styles...</p>
          </div>
        )}

        {searchResults.length > 0 && !isSearching && (
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Search Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {searchResults.map((result) => (
                <div key={result.id} className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <img src={result.image} alt={result.name} className="w-full h-48 sm:h-56 lg:h-64 object-cover" />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{result.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{result.description}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-peach-300 mb-4">{result.price}</p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                      <a 
                        href={result.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-peach-200 hover:bg-peach-300 text-black font-semibold py-2 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base text-center"
                      >
                        View Details
                      </a>
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default FashionSearchPage;
