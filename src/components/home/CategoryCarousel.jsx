import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faMicrochip,
  faMobileAlt,
  faTv,
  faTheaterMasks,
} from "@fortawesome/free-solid-svg-icons";

const CategoryCarousel = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://eletronicproductsrbmz.azurewebsites.net/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error(error));
  }, []);

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 3:
        return faHeadphones;
      case 4:
        return faMicrochip;
      case 5:
        return faMobileAlt;
      case 6:
        return faTv;
      case 7:
        return faTheaterMasks;
      default:
        return faMicrochip; // Fallback icon
    }
  };

  const getCategoryColor = (categoryId) => {
    switch (categoryId) {
      case 3:
        return "#ffdddd";
      case 4:
        return "#ddffdd";
      case 5:
        return "#ddddff";
      case 6:
        return "#ffffdd";
      case 7:
        return "#ffddff";
      default:
        return "#ffffff"; // Fallback color
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
                <h3
                  className="text-lg font-bold mb-2 line-clamp-1"
                  title={category.name}
                >
                  {category.name}
                </h3>
                <div className="w-full h-48 flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={icon} size="4x" />
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;