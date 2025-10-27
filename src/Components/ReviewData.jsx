import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import LoadingSpinners from "./LoadingSpinners";
import Marquee from "react-fast-marquee";
import axios from "axios";

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = review.review.split(" ");
  const isLongReview = words.length > 4;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedReview = isLongReview
    ? words.slice(0, 2).join(" ") + "..."
    : review.review;

  return (
    <div
      key={review._id}
      className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 mx-4 w-80 md:w-96 flex-shrink-0"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={review.reviewerImage}
          alt={review.reviewerName}
          className="w-16 h-16 rounded-full border-2 border-gray-200 object-cover"
        />
        <div>
          <h4 className="text-lg font-bold text-gray-800">
            {review.reviewerName}
          </h4>
          <p className="text-sm text-gray-500">
            {new Date(review.timestamp).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <p className="relative text-gray-700 text-base leading-relaxed italic pl-6">
        <span className="absolute left-0 top-0 text-3xl text-gray-300 leading-none">
          “
        </span>
        {isExpanded ? review.review : truncatedReview}
        {!isExpanded && isLongReview && (
          <button
            onClick={toggleExpansion}
            className="text-blue-500 hover:underline ml-2"
          >
            see more
          </button>
        )}
      </p>
      {isExpanded && isLongReview && (
        <div className="text-right mt-2">
          <button
            onClick={toggleExpansion}
            className="text-blue-500 hover:underline"
          >
            see less
          </button>
        </div>
      )}

      <div className="flex items-center gap-1 mt-4">
        {Array.from({ length: review.rating }, (_, i) => (
          <span key={i} className="text-yellow-500 text-xl">
            ★
          </span>
        ))}
        {Array.from({ length: 5 - review.rating }, (_, i) => (
          <span key={i} className="text-gray-300 text-xl">
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

const ReviewData = () => {
  const { data: reviewData = [], isLoading } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axios.get(
        "https://app-orbit-server-gamma.vercel.app/product-review"
      );
      return res?.data;
    },
  });

  if (isLoading) return <LoadingSpinners />;

  return (
    <div className="py-12 md:py-16 lg:py-20 bg-gray-50 rounded-2xl" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h1 className="text-blue-700 text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 hover:scale-105 transition-all duration-800">
          What Our Users Say
        </h1>

        <Marquee
          pauseOnHover
          speed={40}
          gradient={true}
          gradientColor={[249, 250, 251]}
          gradientWidth={100}
          direction="left"
          className="mb-8"
        >
          {reviewData.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </Marquee>

        <Marquee
          pauseOnHover
          speed={40}
          gradient={true}
          gradientColor={[249, 250, 251]}
          gradientWidth={100}
          direction="right"
        >
          {reviewData.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ReviewData;