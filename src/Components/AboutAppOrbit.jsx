import React from "react";

const AboutAppOrbit = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden rounded-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight animate-fade-in-down">
            Discover, Connect, Innovate with <span className="text-indigo-600">AppOrbit</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 md:mb-12 leading-relaxed animate-fade-in-up">
            AppOrbit is more than just an app directory; it's a vibrant community dedicated to exploring, reviewing, and celebrating the world's most impactful applications. We empower users and developers alike to thrive in the digital landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-left">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-left">
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path></svg>
                Our Vision & Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our vision is to be the definitive global hub for app discovery and collaboration. Our mission is to cultivate a dynamic ecosystem where users effortlessly find, evaluate, and discuss groundbreaking applications, while providing developers with an unparalleled platform to showcase their innovations and connect with a passionate, engaged audience. We are committed to fostering transparency, authenticity, and continuous improvement in the app world.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-right">
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v4.586L7.707 6.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 7.586V3z"></path><path d="M4 16a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"></path></svg>
                What Sets Us Apart
              </h3>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 sm:space-y-3">
                <li><strong className="text-gray-800">Authentic Reviews:</strong> Real user experiences, not just marketing hype.</li>
                <li><strong className="text-gray-800">Developer Empowerment:</strong> Tools and visibility for creators to reach their audience.</li>
                <li><strong className="text-gray-800">Curated Quality:</strong> A focus on high-quality, innovative applications.</li>
                <li><strong className="text-gray-800">Engaged Community:</strong> Forums and discussions that foster genuine connection.</li>
                <li><strong className="text-gray-800">Intuitive Discovery:</strong> Smart search and categorization to find exactly what you need.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAppOrbit;
