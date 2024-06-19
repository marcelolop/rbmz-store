import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShuffleHero = () => {
  return (
    <section className="w-full py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-1 text-xs md:text-sm text-blue-500 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Grab Up to 50% off Selected Electronics
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Discover a world of exceptional electronics curated just for you
        </p>
        <Link
          href="/products"
          className="bg-blue-500 text-white font-medium py-3 px-6 rounded transition-all hover:bg-blue-600 active:scale-95 inline-block"
        >
          Buy Now
        </Link>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/electronics?limit=16"
      );
      const data = response.data;
      const squareData = data.map((item) => ({
        id: item.id,
        src: item.image,
      }));
      setSquares(shuffle(squareData));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(fetchImages, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [squares]);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full"
          style={{
            backgroundImage: `url(${sq.src})`,
            backgroundSize: "cover",
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default ShuffleHero;