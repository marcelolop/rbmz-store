import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TVMonitorsCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://eletronicproductsrbmz.azurewebsites.net/api/products/category/6"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
    <div className="container mx-auto py-20 my-container">
      <h2 className="text-center text-2xl font-bold mb-2">TV and Monitors</h2>
      <Slider {...settings} className=" my-3">
        {products.map((product) => (
          <div key={product.productId} className="p-4 center">
            <div className="block bg-white p-4 rounded-lg h-96 w-100 mx-2 no-underline shadow-sm transform transition duration-500 ease-in-out hover:scale-105">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3
                className="text-lg font-bold mb-2 line-clamp-1"
                title={product.name}
              >
                {product.name}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <FaStar
                        key={i}
                        className={
                          product.rating >= ratingValue
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                        size={20}
                      />
                    );
                  })}
                </div>
                <p className="text-xl font-semibold">${product.price}</p>
              </div>
              <Link
                to={`/products/${product.categoryId}/${product.subcategoryId}/${product.productId}`}
                className="w-full text-center mt-4 inline-block bg-blue-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-blue-600 active:scale-95"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TVMonitorsCarousel;
