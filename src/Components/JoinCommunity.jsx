import React from "react";
import { Link } from "react-router";

const JoinCommunity = () => {
  return (
    <div
      className="py-12 md:py-16 lg:py-20 bg-gray-50 text-center rounded-2xl mt-4 md:mt-10"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-blue-700 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Join the Community
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          Join 10,000+ tech enthusiasts discovering the future of innovation
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/signup"
            className="bg-blue-700 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition duration-300 shadow-lg"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="border-2 border-blue-700 text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-700 hover:text-white transition duration-300 shadow-lg"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
