import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Rating from "react-rating-stars-component";
import { motion } from "framer-motion";
import axios from "axios";
import CategoryProductsCarousel from "../components/products/CategoryProductsCarousel ";
import CustomerReviews from "../components/products/CustomerReviews ";

function ProductDetails() {
  const { categoryId, subcategoryId, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const catId = parseInt(categoryId);
    const subcatId = parseInt(subcategoryId);
    const prodId = parseInt(productId);

    fetchProduct(catId, subcatId, prodId);
  }, [categoryId, subcategoryId, productId]);

  const fetchProduct = async (catId, subcatId, prodId) => {
    try {
      const response = await axios.get(
        `https://eletronicproductsrbmz.azurewebsites.net/api/products/${catId}/${subcatId}/${prodId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  if (!product) {
    return <div className="text-center justify-center">Loading...</div>;
  }

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    cart[product.productId] = (cart[product.productId] || 0) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container my-container mx-auto p-4">
        <div className="mb-4 flex items-center">
          <Link to="/products" className="hover:text-blue-500">
            Products
          </Link>
          <span className="mx-2">/</span>
          {categoryId && (
            <>
              <Link
                to={`/products/${categoryId}`}
                className="hover:text-blue-500"
              >
                {categoryId}
              </Link>
              <span className="mx-2">/</span>
            </>
          )}
          {subcategoryId && (
            <>
              <Link
                to={`/products/${categoryId}/${subcategoryId}`}
                className="hover:text-blue-500"
              >
                {subcategoryId}
              </Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-blue-500">{product.name}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full sm:w-1/3 object-cover mb-4 sm:mb-0 max-w-[250px] sm:mr-4"
          />
          <div className="sm:ml-4">
            <h1 className="text-3xl font-bold mb-2 w-[500px]">
              {product.name}
            </h1>
            <div className="flex justify-start items-center mb-4">
              <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
              <div className="flex items-center ml-2">
                <Rating
                  value={product.rating}
                  numberOfStars={5}
                  size={20}
                  isHalf={true}
                  emptyColor="red"
                  filledColor="gold"
                />
                <p className="text-sm ml-2">({product.reviewsCount} reviews)</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-sm w-[500px]">
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
        <CustomerReviews  />
        </div>
      </div>
      <CategoryProductsCarousel categoryId={categoryId} />
    </motion.div>
  );
}

export default ProductDetails;