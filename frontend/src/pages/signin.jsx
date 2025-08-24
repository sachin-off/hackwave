import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";

export default function SignIn() {
  return (
    <div className="flex h-screen bg-white">
      <div className="flex-1 flex items-center justify-center">
        <Spline scene="https://prod.spline.design/b3W6HNbDmwRoR2Ra/scene.splinecode" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-2">Sign In</h2>
          <p className="text-gray-500 text-center mb-6">
            Fill your details to log back in
          </p>
           <form className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-peach-300 hover:scale-105 transition-transform"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-peach-300 hover:scale-105 transition-transform"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-peach-300 hover:scale-105 transition-transform"
            />
            <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-peach-300 hover:scale-105 transition-transform">
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
            <button
              type="submit"
              className="w-full bg-peach-200 hover:bg-peach-300 text-black font-semibold py-3 rounded-lg transition-transform hover:scale-105"
            >
              Sign In
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-peach-300 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
