import React, { useContext } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinners from "./LoadingSpinners";
import { FaThumbsUp } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const TrendingProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { loginUser } = useContext(AuthContext);

  const {
    data: trendingProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["trending-product"],
    queryFn: async () => {
      const res = await axios.get(
        `https://app-orbit-server-gamma.vercel.app/trending-products`
      );
      return res?.data;
    },
  });

  const navigate = useNavigate();

  const handleVote = async (id) => {
    if (!loginUser) {
      return navigate("/login");
    }

    try {
      const res = await axiosSecure.put(`/vote-product/${id}`, {
        userEmail: loginUser.email,
      });

      if (res.data.alreadyVoted) {
        return Swal.fire({
          icon: "info",
          title: "Already Voted",
          text: "You’ve already voted on this product.",
          timer: 1500,
          showConfirmButton: false,
        });
      }

      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Voted!",
          text: "Your vote has been submitted.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong while voting.",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  if (isLoading) return <LoadingSpinners />;

  return (
    <div
      className="py-12 md:py-16 lg:py-20 bg-gray-50 rounded-2xl"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-blue-700 text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 hover:scale-105 transition-all duration-800">
          Trending Products
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trendingProducts?.map(
            ({
              _id,
              productName,
              description,
              productImage,
              tags,
              votes,
              ownerEmail,
            }) => (
              <div
                key={_id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 flex flex-col items-center"
                data-aos="zoom-in"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-gray-200 shadow-md">
                  <img
                    src={productImage}
                    alt={productName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {productName}
                </h3>

                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <p className="text-gray-600 text-nowrap mr-2">
                      {description.split(" ").slice(0, 3).join(" ")}
                    </p>
                  </div>
                  <div className="flex-1">
                    <Link
                      to={`/product-details/${_id}`}
                      className="text-blue-500 hover:underline text-nowrap"
                    >
                      See More
                    </Link>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {tags?.length > 0 ? (
                    tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-gray-400 italic">
                      No tags
                    </span>
                  )}
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <button
                    onClick={() => handleVote(_id)}
                    className={`flex items-center gap-2 text-sm font-semibold transition ${
                      loginUser?.email === ownerEmail
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:text-blue-700"
                    }`}
                    disabled={loginUser?.email === ownerEmail}
                    title={
                      loginUser?.email === ownerEmail
                        ? "You cannot vote on your own product"
                        : "Upvote this product"
                    }
                  >
                    <FaThumbsUp className="text-blue-600" size={18} />
                    <span className="font-bold text-lg">{votes || 0}</span>
                    <span className="text-gray-600">votes</span>
                  </button>
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-12 text-center">
          <Link to={"/products"}>
            <button className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
              Show All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
