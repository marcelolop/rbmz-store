import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CategoryCarousel = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Changed to 4
    slidesToScroll: 4, // Changed to 4
    swipeToSlide: true, // Allow slide with drag
    draggable: false, // Disable card drag
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10 my-container">
      <h2 className="text-start  text-2xl font-bold mb-8">See All Categories</h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="p-4">
            <Link
              to={`/categories/${category}`}
              className="block bg-white p-4 rounded-lg h-96 w-100 no-underline border border-gray-200 transform transition duration-500 ease-in-out hover:scale-105"
            >
              <h3
                className="text-lg font-bold mb-2 line-clamp-1"
                title={category}
              >
                {category}
              </h3>
              <img
                src={`https://fakestoreapi.com/img/${category}.jpg`} // Replace with actual icon source
                alt={category}
                className="w-full h-48 object-contain mb-4"
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;