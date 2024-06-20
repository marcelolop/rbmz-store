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
    <div className=" mx-auto py-10">
      <h2 className="text-center text-2xl font-bold mb-10">Choose by Brand</h2>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee justify-center">
          {brands.concat(brands).map((brand, index) => (
            <Link
              key={index}
              to={`/brands/${brand.brandName}`}
              className="block flex-none w-40 rounded-lg hover:shadow-lg overflow-hidden"
              style={{ textDecoration: "none", marginInline: "1rem" }}
            >
              <img
                src={brand.logo}
                alt={brand.brandName}
                className="w-full h-32 p-4 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
