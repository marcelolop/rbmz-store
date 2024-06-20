import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {
  const reviews = [
    { id: 1, author: "John Doe", rating: 5, comment: "Great product!" },
    {
      id: 2,
      author: "Jane Smith",
      rating: 4,
      comment: "Good value for money.",
    },
    { id: 3, author: "Alex Johnson", rating: 3, comment: "Could be better." },
  ];

  return (
    <div className="mt-8 my-container">
      <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <details className="space-y-4">
          <summary className="text-lg font-bold">Reviews</summary>
          {reviews.map((review, index) => (
            <div key={index} className=" border-b-2 p-4 border-gray-100">
              <div className="flex items-center mb-2">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < review.rating ? "text-yellow-500" : "text-gray-300"
                      }
                      size={20}
                    />
                  ))}
                </div>
                <span className="text-lg font-bold mr-2">{review.author}</span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </details>
      )}
    </div>
  );
};

export default CustomerReviews;
