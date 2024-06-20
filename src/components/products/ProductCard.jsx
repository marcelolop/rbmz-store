import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating-stars-component";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <motion.div
      className="p-4 rounded flex flex-col items-center h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-contain mb-2 rounded-lg bg-gray-100"
      />
      <h2
        className="text-lg mb-0 text-center w-full overflow-hidden text-ellipsis whitespace-nowrap"
        title={product.name}
      >
        {product.name}
      </h2>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col space-x-2">
          <div className="flex items-center">
            <Rating
              count={5}
              value={product.rating}
              size={24}
              activeColor="#ffd700"
              edit={false}
              isHalf={true}
              readonly={true}
            />
            <div className="ml-2">
            <span className="text-blue-500 font-bold text-sm">
              {product.rating.toFixed(2)}
            </span>
            <span className="text-blue-400 text-sm ml-1">
              ({product.reviewsCount})
            </span>
            </div>
          </div>
          <p className="text-black mb-2 text-xl text-center font-semibold">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex space-x-2 w-full justify-center mt-auto">
        <Link
          to={`/products/${product.categoryId}/${product.subcategoryId}/${product.productId}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

export default ProductCard;