import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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
    setIsFocused(false);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className={`flex items-center overflow-hidden border-b transition-colors duration-700 ${
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
  );
}

export default SearchBar;
