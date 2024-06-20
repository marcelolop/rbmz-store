import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryProductsCarousel = ({ categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://eletronicproductsrbmz.azurewebsites.net/api/products/category/${categoryId}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

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
      <Slider {...settings} className="my-2">
        {products.map((product) => (
          <div key={product.productId} className="p-4">
            <Link
              to={`/products/${product.categoryId}/${product.subcategoryId}/${product.productId}`}
              className="block bg-white p-4 rounded-lg h-75 w-100 mx-2 no-underline shadow-sm transform transition duration-500 ease-in-out hover:scale-105"
            >
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
                  {[...Array(5)].map((star, i) => (
                    <FaStar
                      key={i}
                      className={
                        product.rating >= i + 1 ? "text-yellow-500" : "text-gray-300"
                      }
                      size={20}
                    />
                  ))}
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

export default CategoryProductsCarousel;