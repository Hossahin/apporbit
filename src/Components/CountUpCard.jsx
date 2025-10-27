import React from "react";
import CountUp from "react-countup";
import { IoMdHeart } from "react-icons/io";
import { FaBoxOpen, FaUserEdit, FaUserFriends } from "react-icons/fa";

const CountUpCard = () => {
  const counters = [
    { id: 1, end: 110, icon: FaBoxOpen, label: "Products" },
    { id: 2, end: 225, icon: IoMdHeart, label: "Votes" },
    { id: 3, end: 320, icon: FaUserFriends, label: "Users" },
    { id: 4, end: 20, icon: FaUserEdit, label: "Creators" },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20 bg-gray-50 rounded-2xl mt-4 lg:mt-10">
      <div className="container mx-auto px-4">
        <h1 className="text-blue-700 text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 hover:scale-105 transition-all duration-800">
          Building the Future of Tech Discovery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map(({ id, end, icon: Icon, label }) => (
            <CountUp
              key={id}
              start={0}
              end={end}
              delay={1}
              duration={10}
              scrollSpyDelay={100}
              enableScrollSpy={true}
            >
              {({ countUpRef }) => (
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center cursor-pointer transform hover:scale-105">
                  <div className="mb-4 w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center transition-colors duration-500 group-hover:bg-blue-200">
                    <Icon
                      className="text-blue-600 group-hover:text-blue-700"
                      size={40}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <span
                      ref={countUpRef}
                      className="text-4xl md:text-5xl font-extrabold text-blue-700"
                    ></span>
                    <span className="text-4xl md:text-5xl font-extrabold text-blue-700">
                      +
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg md:text-xl font-semibold mt-2">
                    {label}
                  </p>
                </div>
              )}
            </CountUp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountUpCard;

