import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
  const navigate = useNavigate();
  const { signup, error, clearError } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: 'Male'
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    clearError();

    const result = await signup(formData);
    
    if (result.success) {
      navigate('/fashion-search');
    }
    
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>
          <p className="text-gray-500 text-center mb-6">
            Fill your details to create your account
          </p>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-peach-300 hover:scale-105 transition-transform"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-peach-300 hover:scale-105 transition-transform"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password (min 6 characters)"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-peach-300 hover:scale-105 transition-transform"
              required
              minLength={6}
            />
            <select 
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-peach-300 hover:scale-105 transition-transform"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Not prefered">Not prefered</option>
            </select>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-peach-200 hover:bg-peach-300 text-black font-semibold py-3 rounded-lg transition-transform hover:scale-105 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-peach-300 font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Spline scene="https://prod.spline.design/b3W6HNbDmwRoR2Ra/scene.splinecode" />
      </div>
    </div>
  );
}
