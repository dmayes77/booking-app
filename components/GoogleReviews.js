"use client";

import React from "react";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Dynamically import the Slider component with SSR disabled
const Slider = dynamic(
  () => import("react-slick").then((mod) => mod.default),
  { ssr: false }
);

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [overallRating, setOverallRating] = useState(null);
  const [totalReviews, setTotalReviews] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/google-reviews");
        const data = await res.json();
        console.log(data);
        // Expecting API response: { reviews: [...], rating: 5.00, user_ratings_total: 270 }
        setReviews(data.reviews || []);
        setOverallRating(data.rating || 5.0);
        setTotalReviews(data.user_ratings_total || 270);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    fetchReviews();
  }, []);

  // Slider settings: 3 slides on large screens, 2 on medium, 1 on small
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-50">
      {/* Overall Rating Info */}
      <div className="mb-10 text-center">
        <p className="text-3xl font-extrabold text-gray-800">
          Overall Rating {overallRating?.toFixed(2)}{" "}
          <span className="inline-flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-7 h-7 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            ))}
          </span>{" "}
          <span className="text-xl text-gray-600">({totalReviews})</span>
        </p>
      </div>

      {/* Reviews Slider Container */}
      <div className="mx-auto w-full max-w-6xl">
        {reviews.length > 0 ? (
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="p-3">
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full items-center text-center transition transform hover:scale-105">
                  {/* Star Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(Math.round(review.rating))].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                    ))}
                  </div>
                  {/* Review Text Clamped to 3 Lines */}
                  <p className="text-sm line-clamp-3 mb-4 whitespace-pre-wrap break-words text-gray-700">
                    {review.text}
                  </p>
                  {/* Read More Link */}
                  <a
                    href={review.author_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-600 hover:underline mb-4"
                    aria-label="View Detailed Google Reviews"
                  >
                    Read the Google Review
                  </a>
                  {/* Reviewer Info */}
                  <div className="flex flex-col items-center mb-4">
                  <Image
  src={review.profile_photo_url}
  alt={review.author_name}
  width={48}
  height={48}
  className="rounded-full mb-2 border-2 border-blue-600"
/>
                    <p className="text-base font-semibold text-gray-800">
                      {review.author_name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {review.relative_time_description}
                    </p>
                  </div>
                  {/* Footer */}
                  <div className="flex items-center mt-auto">
                    <Icon
                      name="FcGoogle"
                      set="fci"
                      size={28}
                      className="mr-2"
                    />
                    <p className="text-xs text-gray-500 font-medium">
                      Posted on Google
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center">Loading reviews...</p>
        )}
      </div>
    </div>
  );
}
