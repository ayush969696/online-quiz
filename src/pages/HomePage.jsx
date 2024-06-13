import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="text-3xl font-bold mb-4">Online Quiz Platform</h1>
      <Link to="/admin" className="block mb-4 text-blue-600 hover:underline">Create a Quiz</Link>
      <Link to="/quiz" className="block text-blue-600 hover:underline">Take a Quiz</Link>
    </div>
  );
};

export default HomePage;
