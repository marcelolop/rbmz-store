import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function CategoryFilter({ category, setCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://eletronicproductsrbmz.azurewebsites.net/api/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <aside className="p-4 rounded shadow h-[calc(100%-34px)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Categories</h2>
      </div>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id} className="mb-2">
            <button
              className={`block rounded-lg px-4 py-2 text-sm font-medium text-left transition-colors duration-200 ${
                category === cat.name
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:text-blue-500"
              }`}
              onClick={() => setCategory(cat.name)}
              aria-label={`Filter by ${cat.name}`}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="p-2 rounded text-black font-[600] transition-colors duration-200 hover:text-blue-500"
        onClick={() => setCategory(null)}
        aria-label="Clear filter"
      >
        Clear Filter
      </button>
    </aside>
  );
}

CategoryFilter.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;