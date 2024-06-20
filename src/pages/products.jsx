import React, { useReducer, useEffect } from "react";
import axios from "axios";
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
  subcategory: null,
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
      return { ...state, category: action.payload, subcategory: null };
    case "SET_SUBCATEGORY":
      return { ...state, subcategory: action.payload };
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
  }, [state.category, state.subcategory]);

  useEffect(() => {
    filterProducts();
  }, [state.products, state.searchTerm, state.category, state.subcategory]);

  const fetchProducts = () => {
    dispatch({ type: "SET_LOADING", payload: true });

    let url = "https://eletronicproductsrbmz.azurewebsites.net/api/products";

    // If both category and subcategory are selected, adjust the URL
    if (state.category && state.subcategory) {
      url = `https://eletronicproductsrbmz.azurewebsites.net/api/products/category/${state.category}/subcategory/${state.subcategory}`;
    } else if (state.category) {
      // Only category is selected
      url = `https://eletronicproductsrbmz.azurewebsites.net/api/products/category/${state.category}`;
    }

    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "SET_PRODUCTS", payload: response.data });
        dispatch({ type: "SET_FILTERED_PRODUCTS", payload: response.data });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };

  const filterProducts = () => {
    const { products, searchTerm, category, subcategory } = state;
    if (products.length > 0) {
      const filtered = products.filter((product) => {
        const matchesCategory =
          !category || product.categoryId === category.categoryId;
        const matchesSubcategory =
          !subcategory || product.subcategoryId === subcategory.subcategoryId;
        const matchesSearchTerm =
          !searchTerm ||
          (product.name &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (product.description &&
            product.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSubcategory && matchesSearchTerm;
      });
      dispatch({ type: "SET_FILTERED_PRODUCTS", payload: filtered });
      dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
    } else {
      dispatch({ type: "SET_FILTERED_PRODUCTS", payload: [] });
      dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
    }
  };

  const handleCategoryChange = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };

  const handleSubcategoryChange = (subcategory) => {
    dispatch({ type: "SET_SUBCATEGORY", payload: subcategory });
  };

  const handlePageChange = (pageNumber) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: pageNumber });
  };

  const paginate = (products) => {
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = startIndex + state.itemsPerPage;
    return products.slice(startIndex, endIndex);
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
      <div className="container mx-auto p-4 my-container">
        <div className="flex">
          <CategoryFilter
            category={state.category}
            subcategory={state.subcategory}
            setCategory={handleCategoryChange}
            setSubcategory={handleSubcategoryChange}
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
                <ProductCard key={product.productId} product={product} />
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
