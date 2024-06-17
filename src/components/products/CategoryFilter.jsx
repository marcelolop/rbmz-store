import React from "react";
import PropTypes from "prop-types";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

function CategoryFilter({ category, setCategory }) {
  return (
    <aside className="p-4 rounded shadow h-[calc(100%-34px)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Categories</h2>
      </div>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat} className="mb-2">
            <button
              className={`block rounded-lg px-4 py-2 text-sm font-medium text-left transition-colors duration-200 ${
                category === cat
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:text-blue-500"
              }`}
              onClick={() => setCategory(cat)}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
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
