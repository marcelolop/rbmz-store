import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Rating from "react-rating-stars-component";
import axios from "axios";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(
          `https://eletronicproductsrbmz.azurewebsites.net/api/products`
        );
        const data = response.data;
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (searchValue) {
      const filteredResults = allProducts.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchValue, allProducts]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(searchValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 200);
  };

  return (
    <div className="relative w-full">
      <form
        onSubmit={handleSearchSubmit}
        className={`flex items-center overflow-hidden transition-colors duration-700 w-100 ${
          isFocused ? "border-blue-500" : "border-gray-200"
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <input
          type="text"
          className={`px-4 py-2 w-full text-black bg-transparent placeholder-slate-400 focus:outline-none rounded-l-full transition-colors duration-500 ${
            isFocused ? "border-blue-500" : "border-transparent"
          }`}
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
          aria-label="Search"
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
      {isFocused && results.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-white shadow-lg border rounded-md mt-2 z-10 max-h-60 overflow-y-auto"
        >
          {results.slice(0, 5).map((item) => (
            <Link
              to={`/products/${item.categoryId}/${item.subcategoryId}/${item.productId}`}
              key={item.productId}
            >
              <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-12 h-12 object-cover mr-2"
                />
                <div className="flex flex-col w-full">
                  <span className="font-bold">{item.name}</span>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">${item.price}</span>
                    <div className="flex items-center">
                      <Rating
                        count={5}
                        value={item.rating}
                        size={16}
                        activeColor="#ffd700"
                        edit={false}
                        isHalf={true}
                        readonly={true}
                      />
                      <span className="ml-2 text-gray-600">
                        ({item.reviewsCount})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default SearchBar;
