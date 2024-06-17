import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full sm:w-1/2 object-cover mb-4 sm:mb-0"
        />
        <div className="sm:ml-4">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
