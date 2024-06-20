import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating-stars-component";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.categoryId}/${product.subcategoryId}/${product.productId}`}
      className="w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-sm hover:shadow-md transition duration-300"
    >
      <motion.div
        className="p-4 flex flex-col items-center h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-contain mb-2 rounded-lg"
        />
        <h2
          className="text-lg mb-0 text-center w-full overflow-hidden text-ellipsis whitespace-nowrap"
          title={product.name}
        >
          {product.name}
        </h2>
        <div className="flex items-center justify-center w-full">
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
      </motion.div>
    </Link>
  );
}

export default ProductCard;