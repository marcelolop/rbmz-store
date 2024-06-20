import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import imageOne from '../../media/images/category-one.jpg';
import imageTwo from '../../media/images/category-two.jpg';
import imageThree from '../../media/images/category-three.jpg';
import imageFour from '../../media/images/category-four.jpg';
import imageFive from '../../media/images/category-five.jpg';

const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);
  const images = [imageFive, imageOne, imageTwo, imageThree, imageFour];

  useEffect(() => {
    axios
      .get("https://eletronicproductsrbmz.azurewebsites.net/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error(error));
  }, []);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="py-20 bg-slate-100">
      <h2 className="text-4xl font-bold mb-8 text-center">Categories</h2>
      <Slider {...settings} className="my-3 my-container">
        {categories.map((category, index) => (
          <div key={category.id} className="p-2">
            <div className={`relative  hover:scale-105 transition-transform duration-300 overflow-hidden ${getCategoryColor(category.id)}`}>
              <Link to={`/categories/${category.id}`} className="block w-full h-full no-underline">
                <img src={images[index % images.length]} alt={`${category.name} category`} className="w-full h-40 object-cover rounded-lg shadow-md"/>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-black mb-2">{category.name}</h3>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryGrid;