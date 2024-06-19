import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get("https://eletronicproductsrbmz.azurewebsites.net/api/brands")
      .then((response) => setBrands(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto py-10 my-container">
      <h2 className="text-start text-2xl font-bold mb-8">Choose by Brand</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {brands.map((brand) => (
          <Link
            key={brand.brandId}
            to={`/brands/${brand.brandName}`}
            className="block rounded-lg shadow hover:shadow-lg overflow-hidden"
            style={{ textDecoration: "none" }}
          >
            <img
              src={brand.logo}
              alt={brand.brandName}
              className="w-full h-32 p-4 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{brand.brandName}</h3>
              <p className="text-sm text-gray-600">Click to view products</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;