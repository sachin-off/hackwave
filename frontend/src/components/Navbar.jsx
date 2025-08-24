import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = async () => {
    await logout();
    setMobileMenuOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        <a className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 select-none" href="#">
          FASHIONATE
        </a>
        
        <nav className="hidden md:flex space-x-6 lg:space-x-10 font-semibold text-gray-700">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link 
                key={item.href}
                className="hover:text-gray-900 transition-colors duration-200" 
                to={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <a 
                key={item.href}
                className="hover:text-gray-900 transition-colors duration-200" 
                href={item.href}
              >
                {item.label}
              </a>
            )
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-gray-600">Welcome, {user?.fullName}</span>
              <Link to="/fashion-search" className="bg-peach-200 hover:bg-peach-300 text-black font-semibold px-4 lg:px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 text-sm lg:text-base">
                Fashion Search
              </Link>
              <button 
                onClick={handleLogout}
                className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold px-4 lg:px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 text-sm lg:text-base"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-semibold text-sm lg:text-base">
                Sign In
              </Link>
              <Link to="/signup" className="bg-peach-200 hover:bg-peach-300 text-black font-semibold px-4 lg:px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 text-sm lg:text-base">
                Sign Up
              </Link>
            </>
          )}
        </div>
        
        <button 
          className="md:hidden focus:outline-none p-2" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col space-y-3 px-6 py-6 font-semibold text-gray-700">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link 
                key={item.href}
                className="hover:text-gray-900 transition-colors duration-200 py-2" 
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a 
                key={item.href}
                className="hover:text-gray-900 transition-colors duration-200 py-2" 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          ))}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            {isAuthenticated ? (
              <>
                <span className="block text-gray-600 py-2">Welcome, {user?.fullName}</span>
                <Link 
                  to="/fashion-search" 
                  className="block bg-peach-200 hover:bg-peach-300 text-black font-semibold px-4 py-3 rounded-lg transition-all duration-200 text-center hover:scale-105"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Fashion Search
                </Link>
                <button 
                  onClick={handleLogout}
                  className="w-full bg-red-100 hover:bg-red-200 text-red-700 font-semibold px-4 py-3 rounded-lg transition-all duration-200 text-center hover:scale-105"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/signin" 
                  className="block text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup" 
                  className="block bg-peach-200 hover:bg-peach-300 text-black font-semibold px-4 py-3 rounded-lg transition-all duration-200 text-center hover:scale-105"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
