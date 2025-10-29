import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinners from "../../Components/LoadingSpinners";
import { useQuery } from "@tanstack/react-query";
import AuthContext from "../../context/AuthContext";
import { FaThumbsUp } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const Products = () => {
  const axiosSecure = useAxiosSecure();
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Products";
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const limit = 6;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const {
    data: matchedProductsData = { products: [], totalPages: 1 },
    isLoading: isMatchedProductsLoading,
    refetch: refetchMatchedProducts,
  } = useQuery({
    queryKey: ["products-by-search", debouncedSearchTerm, page, limit],
    queryFn: async () => {
      const response = await axios.get(
        `https://app-orbit-server-gamma.vercel.app/products/search`,
        {
          params: {
            searchParams: debouncedSearchTerm,
            page,
            limit,
          },
        }
      );
      return response?.data;
    },
    enabled: !!debouncedSearchTerm,
  });

  useEffect(() => {
    setPage(1);
  }, [debouncedSearchTerm]);

  const {
    data: allProductsData = { products: [], total: 0, totalPages: 1 },
    isLoading: isAllProductsLoading,
    refetch: refetchAllProducts,
  } = useQuery({
    queryKey: ["product", page, limit],
    queryFn: async () => {
      const res = await axios.get(
        `https://app-orbit-server-gamma.vercel.app/product?page=${page}&limit=${limit}`
      );
      return res?.data;
    },
    enabled: !debouncedSearchTerm, // Only fetch all products if there's no search term
  });

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
        if (debouncedSearchTerm) {
          refetchMatchedProducts();
        } else {
          refetchAllProducts();
        }
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

  const isLoading = isAllProductsLoading || isMatchedProductsLoading;
  const products = debouncedSearchTerm
    ? matchedProductsData.products
    : allProductsData.products;
  const totalPages = debouncedSearchTerm
    ? matchedProductsData.totalPages
    : allProductsData.totalPages;

  return (
    <div
      className="py-12 md:py-16 lg:py-20 bg-gray-50 rounded-md"
      data-aos="zoom-out-left"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 flex justify-center">
          <label className="relative w-full max-w-2xl">
            <svg
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="search"
              placeholder="Search by tags or name..."
              className="w-full pl-16 pr-6 py-4 text-lg rounded-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-4 focus:ring-blue-500 focus:outline-none shadow-lg transition-all duration-300"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              aria-label="Search products"
            />
          </label>
        </div>

        {isLoading ? (
          <LoadingSpinners />
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                handleVote={handleVote}
                loginUserEmail={loginUser?.email}
              />
            ))}
          </div>
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg mt-8">
            No results found for “{debouncedSearchTerm}”
          </p>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 text-sm font-medium rounded-md border transition-colors duration-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors duration-300 ${
                  page === i + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 text-sm font-medium rounded-md border transition-colors duration-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ product, handleVote, loginUserEmail }) => {
  const { _id, productName, description, productImage, tags, votes, ownerEmail } = product;
  const isOwner = loginUserEmail === ownerEmail;

  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center"
      data-aos="zoom-in"
    >
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-gray-200 shadow-md">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>

      <Link to={`/product-details/${_id}`} className="w-full">
        <h3 className="text-xl font-bold text-gray-900 mb-2 truncate w-full">
          {productName}
        </h3>
      </Link>

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
          <span className="text-xs text-gray-400 italic">No tags</span>
        )}
      </div>

      <div className="mt-auto">
        <button
          onClick={() => handleVote(_id)}
          className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
            isOwner
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:text-blue-700"
          }`}
          disabled={isOwner}
          title={
            isOwner
              ? "You cannot vote on your own product"
              : "Upvote this product"
          }
          aria-disabled={isOwner}
        >
          <FaThumbsUp className="text-blue-600" size={18} />
          <span className="font-bold text-lg">{votes || 0}</span>
          <span className="text-gray-600">votes</span>
        </button>
      </div>
    </div>
  );
};

export default Products;
