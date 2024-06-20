import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function CategoryFilter({ category, subcategory, setCategory, setSubcategory }) {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchSubcategories();
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

  const fetchSubcategories = async () => {
    try {
      const response = await axios.get(
        "https://eletronicproductsrbmz.azurewebsites.net/api/subcategories"
      );
      setSubcategories(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const getCategorySubcategories = (categoryId) => {
    return subcategories.filter((sub) => sub.categoryId === categoryId);
  };

  const handleCategoryClick = (categoryId) => {
    if (category === categoryId) {
      // Deselect category if clicked again
      setCategory(null);
      setSubcategory(null);
    } else {
      // Select new category and reset subcategory
      setCategory(categoryId);
      setSubcategory(null);
    }
  };

  const handleSubcategoryClick = (subcategoryId) => {
    setSubcategory(subcategoryId);
  };

  return (
    <aside className="px-4 pt-2 h-[calc(100%-34px)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Categories</h2>
      </div>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.categoryId} className="mb-2">
            <button
              className={`block rounded-lg px-4 py-2 text-sm font-medium text-left transition-colors duration-200 ${
                category === cat.categoryId
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-black hover:bg-blue-100"
              }`}
              onClick={() => handleCategoryClick(cat.categoryId)}
            >
              {cat.name}
            </button>
            {category === cat.categoryId && (
              <ul className="ml-4 mt-2 space-y-1">
                {getCategorySubcategories(cat.categoryId).map((sub) => (
                  <li key={sub.subcategoryId}>
                    <button
                      className={`block rounded-lg px-4 py-2 text-sm font-medium text-left transition-colors duration-200 ${
                        subcategory === sub.subcategoryId
                          ? "bg-blue-400 text-white"
                          : "bg-transparent text-black hover:bg-blue-100"
                      }`}
                      onClick={() => handleSubcategoryClick(sub.subcategoryId)}
                    >
                      {sub.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

CategoryFilter.propTypes = {
  category: PropTypes.number,
  subcategory: PropTypes.number,
  setCategory: PropTypes.func.isRequired,
  setSubcategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
