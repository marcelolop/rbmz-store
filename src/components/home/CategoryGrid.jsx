import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://eletronicproductsrbmz.azurewebsites.net/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Função para obter a cor com base no ID da categoria
  const getCategoryColor = (categoryId) => {
    switch (categoryId) {
      case 3:
        return "bg-red-100 text-red-800"; // Red shade
      case 4:
        return "bg-green-100 text-green-800"; // Green shade
      case 5:
        return "bg-blue-100 text-blue-800"; // Blue shade
      case 6:
        return "bg-yellow-100 text-yellow-800"; // Yellow shade
      case 7:
        return "bg-purple-100 text-purple-800"; // Purple shade
      default:
        return "bg-gray-100 text-gray-800"; // Fallback color
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-8 text-center">See All Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.id} className={`relative rounded-lg border border-gray-200 overflow-hidden ${getCategoryColor(category.id)}`}>
            <Link to={`/categories/${category.id}`} className="block w-full h-full no-underline">
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-black mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">Click to view more</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;