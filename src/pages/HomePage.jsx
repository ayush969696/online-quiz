import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="text-3xl text-center font-bold mb-8 my-52">
        Online Quiz Platform
      </h1>
      <div className="flex flex-col items-center">
        <Link
          to="/admin"
          className="w-96 mb-4 text-2xl text-blue-600 hover:bg-orange-600 hover:text-white border-2 border-orange-600 transition duration-500 ease-in-out p-6 text-center"
        >
          Create a Quiz
        </Link>
        <Link
          to="/quiz"
          className="w-96 text-blue-600 text-center text-2xl border-2 border-green-500 p-6 hover:bg-green-500 hover:text-white transition duration-500 ease-in-out"
        >
          Take a Quiz
        </Link>{" "}
      </div>
    </div>
  );
};

export default HomePage;
