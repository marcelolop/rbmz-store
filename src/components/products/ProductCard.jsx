import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating-stars-component";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <motion.div
      className="p-4 rounded shadow-md flex flex-col items-center h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1}}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-2"
      />
      <h2
        className="text-lg font-bold mb-2 text-center truncate w-full"
        title={product.title}
      >
        {product.title}
      </h2>
      <Rating
        count={5}
        value={product.rating ? product.rating.rate : 0}
        size={24}
        activeColor="#ffd700"
        edit={false}
        isHalf={true}
        readonly={true}
      />
      <p className="text-black mb-2 text-xl font-semibold">
        ${product.price.toFixed(2)}
      </p>
      <p
        className="text-gray-600 text-xs mb-4 overflow-hidden text-ellipsis w-full max-h-16 flex-grow"
        title={product.description}
      >
        {product.description}
      </p>
      <div className="flex space-x-2 w-full justify-center mt-auto">
        <Link
          to={`/product/${product.id}`}
          className="flex justify-center uppercase text-xs items-center bg-slate-500 text-white px-2 py-2 rounded hover:bg-slate-700 transition-colors duration-300 w-full h-full whitespace-nowrap sm:w-auto sm:whitespace-nowrap"
        >
          View Details
        </Link>
        <button className="flex justify-center uppercase text- text-xs items-center bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 transition-colors duration-300 w-full h-full whitespace-nowrap">
          <AiOutlineShoppingCart className="mr-2 h-6 w-6" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;