import React, { useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import useUserRole from "../hooks/useUserRole";
import LoadingSpinners from "./LoadingSpinners";
import Swal from "sweetalert2";

const PricingPlans = () => {
  const { loginUser } = useContext(AuthContext);
  const { role, roleLoading } = useUserRole();
  const navigate = useNavigate();

  if (roleLoading) return <LoadingSpinners />;

  const handleGetPremium = () => {
    if (!roleLoading && role !== "users") {
      Swal.fire({
        icon: "warning",
        title: "Subscription Restricted",
        text: `Access is only available for users. Your Role detected: ${role}`,
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      navigate("/dashboard/myProfile");
    }
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gray-50 rounded-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10 md:mb-12 animate-fade-in-up">
          Choose Your Perfect Plan
        </h2>
        <p className="text-base sm:text-lg text-gray-700 text-center mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
          Whether you're just starting out or ready to scale, AppOrbit has a
          plan that fits your needs. Get started for free or unlock unlimited
          possibilities with our Premium Plan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 justify-items-center">
          {/* Free Plan */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col w-full max-w-md animate-fade-in-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
              Free Plan
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
              Perfect for trying out AppOrbit and showcasing a single product.
            </p>
            <div className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 text-center">
              $0
              <span className="text-base sm:text-xl font-medium text-gray-500">
                /month
              </span>
            </div>
            <ul className="text-sm sm:text-base text-gray-700 space-y-3 sm:space-y-4 mb-8 flex-grow">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <strong className="text-gray-800">1 Product Upload</strong>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Basic App Analytics
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Community Forum Access
              </li>
            </ul>
            <button
              className={`mt-auto w-full py-3 rounded-lg font-semibold text-base sm:text-lg ${
                loginUser
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              disabled={loginUser}
            >
              {loginUser ? "Already in Use" : "Get Started Free"}
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col border-4 border-indigo-500 w-full max-w-md animate-fade-in-right">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 text-center">
              Premium Plan
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
              Unlock unlimited possibilities for your app portfolio.
            </p>
            <div className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 text-center">
              $99
              <span className="text-base sm:text-xl font-medium text-gray-500">
                /month
              </span>
            </div>
            <ul className="text-sm sm:text-base text-gray-700 space-y-3 sm:space-y-4 mb-8 flex-grow">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <strong className="text-gray-800">
                  Unlimited Product Uploads
                </strong>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Advanced Analytics & Insights
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Priority Customer Support
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Customizable Branding Options
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Early Access to New Features
              </li>
            </ul>
            <button
              onClick={handleGetPremium}
              className="mt-auto w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 text-base sm:text-lg"
            >
              Get Premium Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
