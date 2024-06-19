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
      <Link
  to={`/product/${product.categoryId}/${product.subcategoryId}/${product.productId}`}
  className="flex flex-col items-center w-full h-full"
>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-contain mb-2 rounded-lg bg-slate-50"
        />
        <h2
          className="text-lg mb-8 text-center w-full overflow-hidden text-ellipsis whitespace-nowrap"
          title={product.name}
        >
          {product.name}
        </h2>
        <div className="flex flex-row justify-between w-full m-3">
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
              <span className="text-blue-500 font-bold text-sm">
                {product.rating.toFixed(2)}
              </span>
              <span className="text-blue-400 text-sm ml-1">
                ({product.reviewsCount})
              </span>
            </div>
            <p className="text-black mb-2 text-xl font-semibold">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex space-x-2 w-full justify-center mt-auto"></div>
      </Link>
    </motion.div>
  );
}

export default ProductCard;