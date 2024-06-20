import React, { useEffect, useState } from "react";
import axios from "axios";
import ShuffleHero from "../components/home/HeroBanner";
import KeyboardsCarousel from "../components/home/KeyboardsCarousel";
import CategoryGrid from "../components/home/CategoryGrid";
import Brand from "../components/home/Brands";
import Offers from "../components/products/Offers";
import { motion } from "framer-motion";
import BannerSection from "../components/home/BannerSection";
import TVMonitorsCarousel from "../components/home/TVMonitorsCarousel";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      
        <ShuffleHero />
        <CategoryGrid products={products} />
        <KeyboardsCarousel products={products} />
        <BannerSection />
        <TVMonitorsCarousel products={products} />
        <Brand />
        <Offers />
    </motion.div>
  );
}

export default Home;
