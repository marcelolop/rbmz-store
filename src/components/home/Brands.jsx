import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/brands") // Replace with your API
      .then((response) => setBrands(response.data))
      .catch((error) => console.error(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    draggable: false,
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-start  text-2xl font-bold mb-8">Choose by Brand</h2>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="p-4">
            <Link
              to={`/brands/${brand.name}`}
              className="block p-4 rounded-lg h-96 w-72 mx-2 no-underline border border-gray-200 transform transition duration-500 ease-in-out hover:scale-105"
            >
              <img
                src={brand.image} // Replace with actual image source
                alt={brand.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-bold mb-2 line-clamp-1" title={brand.name}>
                {brand.name}
              </h3>
              <p className="text-sm">Delivery within 24 hours</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brands;