import React, { useEffect, useState } from "react";
import axios from "axios";
import ShuffleHero from "../components/home/HeroBanner";
import ProductCarousel from "../components/home/ProductCarousel";
import CategoryCarousel from "../components/home/CategoryCarousel";
import Brand from "../components/home/Brands";
import Offers from "../components/home/Offers";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <main className="font-sans">
      <ShuffleHero />
      <CategoryCarousel products={products} />
      <ProductCarousel products={products} />
      <Brand products={products}/>
      <Offers />
    </main>
  );
}

export default Home;