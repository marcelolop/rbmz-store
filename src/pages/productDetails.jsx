import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    cart[product.id] = (cart[product.id] || 0) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <Link className="hover:text-blue-500" to="/products">
            Products
          </Link>{" "}
          <span className="mx-2">/</span>{" "}
          <Link
            className="hover:text-blue-500"
            to={`/products/${product.category}`}
          >
            {product.category}
          </Link>{" "}
          <span className="mx-2">/</span>
          <Link to="#" className="text-blue-500">
            {" "}
            Product Details{" "}
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row  justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full sm:w-1/3 object-cover mb-4 sm:mb-0 max-w-[250px] sm:mr-4"
          />
          <div className="sm:ml-4">
            <h1 className="text-3xl font-bold mb-2 w-[500px] ">
              {product.title}
            </h1>
            <div className="flex justify-start items-center mb-4">
              <p className="text-3xl font-bold ">${product.price.toFixed(2)}</p>{" "}
              <div className="flex items-center ml-2">
                <Rating
                  value={product.rating.rate}
                  numberOfStars={5}
                  size={20}
                  isHalf={true}
                  emptyColor="red"
                  filledColor="gold"
                />
                <p className="text-sm ml-2">({product.rating.count} reviews)</p>{" "}
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-sm w-[500px] ">
              {product.description}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
          {/* Aqui você pode adicionar um componente de avaliações de clientes */}
        </div>
      </div>
    </motion.div>
  );
}

export default ProductDetails;
