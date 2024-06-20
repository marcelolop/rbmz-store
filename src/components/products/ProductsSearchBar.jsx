import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductsSearchBar({ searchTerm, setSearchTerm, category }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="mr-4 text-xl text-gray-600 font-bold capitalize">
        <Link to="/products" className="hover:text-blue-500">
          Products
        </Link>
        {category && (
          <>
            <span> &gt; </span>
            <Link
              to={`/products/category/${category}`}
              className="hover:text-blue-500"
            >
              {category}
            </Link>
          </>
        )}
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`flex items-center overflow-hidden border-b transition-colors duration-700 ${
          isFocused ? "border-blue-500" : "border-gray-200"
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleChange}
          className={`px-4 py-2 w-full text-black bg-transparent placeholder-slate-400 focus:outline-none rounded-l-full transition-colors duration-500 ${
            isFocused ? "border-blue-500" : "border-transparent"
          }`}
          aria-label="Search products"
        />
        <button
          type="submit"
          className={`p-3 rounded-full focus:outline-none transition-colors duration-500 ${
            isFocused ? "text-blue-500" : "text-black"
          }`}
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default ProductsSearchBar;