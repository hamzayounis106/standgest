
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-lg p-10 text-center bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-6xl font-bold text-red-500">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! The page you are looking for doesn't exist.</p>
        <a href="/" className="text-blue-500 hover:text-blue-700">Go back to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
