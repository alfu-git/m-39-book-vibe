import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-gray-800 text-white px-4">
      <div className="text-center max-w-lg">
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold bg-linear-to-r from-red-500 to-orange-400 text-transparent bg-clip-text">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-bold mt-4">Oops! Page not found</h2>

        {/* Description */}
        <p className="text-gray-400 mt-3">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="mt-6 px-6 py-3 rounded-2xl bg-linear-to-r from-red-500 to-orange-500 hover:scale-105 transition-all duration-300 shadow-lg">
            🔙 Go Back Home
          </button>
        </Link>

        {/* Decorative Glow */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-red-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 opacity-20 blur-3xl rounded-full"></div>
      </div>
    </div>
  );
};

export default ErrorPage;
