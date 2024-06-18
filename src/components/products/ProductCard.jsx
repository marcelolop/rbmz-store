import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating-stars-component";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <motion.div
      className="p-4 rounded flex shadow-sm flex-col items-center h-full w-full hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col items-center w-full h-full"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-2"
        />
        <h2
          className="text-lg mb-5 text-center w-full overflow-hidden text-ellipsis whitespace-nowrap"
          title={product.title}
        >
          {product.title}
        </h2>
        <div className="flex flex-row justify-between w-full m-3">
          <div className="flex items-center space-x-2">
            <Rating
              count={5}
              value={product.rating ? product.rating.rate : 0}
              size={24}
              activeColor="#ffd700"
              edit={false}
              isHalf={true}
              readonly={true}
            />
            <span className="text-gray-500 text-sm">
              ({product.rating ? product.rating.count : 0}) reviews
            </span>
          </div>
          <p className="text-black mb-2 text-xl font-semibold">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <div className="flex space-x-2 w-full justify-center mt-auto">
          {/* <Link
            to={`/product/${product.id}`}
            className="flex justify-center uppercase text-xs items-center bg-[#0b596e] text-white px-2 py-2 rounded hover:bg-[#0f6b85] transition-colors duration-300 w-full h-full whitespace-nowrap sm:w-auto sm:whitespace-nowrap"
          >
            View Details
          </Link> */}
          {/* <button className="flex justify-center uppercase text- text-xs items-center bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 transition-colors duration-300 w-full h-full whitespace-nowrap">
            <AiOutlineShoppingCart className="mr-2 h-6 w-6" />
            Add to Cart
          </button> */}
        </div>
      </Link>
    </motion.div>
  );
}

export default ProductCard;
