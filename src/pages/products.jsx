import React, { useReducer, useEffect } from "react";
import CategoryFilter from "../components/products/CategoryFilter";
import ProductCard from "../components/products/ProductCard";
import ProductsSearchBar from "../components/products/ProductsSearchBar";
import { useParams } from "react-router-dom";
import Offers from "../components/products/Offers";
import { motion } from "framer-motion";

const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  category: null,
  searchTerm: "",
  currentPage: 1,
  itemsPerPage: 12,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_FILTERED_PRODUCTS":
      return { ...state, filteredProducts: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}

function Products() {
  const { category } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  }, [category]);

  useEffect(() => {
    fetchProducts();
  }, [state.category]);

  useEffect(() => {
    filterProducts();
  }, [state.products, state.searchTerm]);

  const fetchProducts = () => {
    dispatch({ type: "SET_LOADING", payload: true });
    const url = state.category
      ? `https://fakestoreapi.com/products/category/${state.category}`
      : `https://fakestoreapi.com/products`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_PRODUCTS", payload: data });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };

  const filterProducts = () => {
    const filtered = state.products.filter(
      (product) =>
        product.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase())
    );
    dispatch({ type: "SET_FILTERED_PRODUCTS", payload: filtered });
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  };

  const paginate = (products) => {
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = startIndex + state.itemsPerPage;
    return products.slice(startIndex, endIndex);
  };

  const handleCategoryChange = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
    dispatch({ type: "SET_PRODUCTS", payload: [] });
  };

  const handlePageChange = (pageNumber) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: pageNumber });
  };

  const totalPages = Math.ceil(
    state.filteredProducts.length / state.itemsPerPage
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto p-4">
        <div className="flex">
          <CategoryFilter
            category={state.category}
            setCategory={handleCategoryChange}
          />
          <div className="flex-1 ml-4">
            <ProductsSearchBar
              searchTerm={state.searchTerm}
              setSearchTerm={(term) =>
                dispatch({ type: "SET_SEARCH_TERM", payload: term })
              }
              category={state.category || "All Products"}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {paginate(state.filteredProducts).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {state.loading && (
              <div className="text-center mt-4">
                <span>Loading...</span>
              </div>
            )}
            <div className="flex justify-center mt-4">
              <button
                className="mx-1 px-3 py-1 border rounded bg-transparent text-black hover:bg-blue-600 hover:text-white transition-colors duration-300"
                disabled={state.currentPage === 1}
                onClick={() => handlePageChange(state.currentPage - 1)}
              >
                Previous
              </button>
              {[...Array(totalPages).keys()].map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`mx-1 px-3 py-1 border rounded ${
                    state.currentPage === pageNumber + 1
                      ? "bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                      : ""
                  }`}
                  onClick={() => handlePageChange(pageNumber + 1)}
                >
                  {pageNumber + 1}
                </button>
              ))}
              <button
                className="mx-1 px-3 py-1 border rounded bg-transparent text-black hover:bg-blue-600 hover:text-white transition-colors duration-300"
                disabled={state.currentPage === totalPages}
                onClick={() => handlePageChange(state.currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Offers />
    </motion.div>
  );
}

export default Products;
