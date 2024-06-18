import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
    <div className="container mx-auto py-10">
      <h2 className="text-start  text-2xl font-bold mb-8"> 🔥Hot Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <Link
              to={`/products/${product.id}`}
              className="block bg-white p-4 rounded-lg h-96 w-72 mx-2 no-underline border border-gray-200 transform transition duration-500 ease-in-out hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3
                className="text-lg font-bold mb-2 line-clamp-1"
                title={product.title}
              >
                {product.title}
              </h3>
              <p className="text-sm mb-2">{product.category}</p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <FaStar
                        key={i}
                        className={
                          product.rating.rate >= ratingValue
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
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
