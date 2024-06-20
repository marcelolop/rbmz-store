import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="w-full mb-20 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 my-container">
      <div className="flex flex-col justify-evenly h-full">
        <span className="block mb-1 text-[20px] md:text-[18px] text-blue-500 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-5xl font-semibold">
          Turn up your gaming with 50% off on all accessories
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          The gaming experience is not complete without a good setup. Offers only for this weekend.
        </p>
        <Link
          to="/products"
          className="w-[125px] text-center mt-14 bg-blue-500 text-white font-medium py-3 px-6 rounded transition-all hover:bg-blue-600 active:scale-95 inline-block"
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
      const [responseMouses, responseKeyboards] = await Promise.all([
        axios.get(
          "https://eletronicproductsrbmz.azurewebsites.net/api/products/category/3/subcategory/1"
        ),
        axios.get(
          "https://eletronicproductsrbmz.azurewebsites.net/api/products/category/3/subcategory/2"
        ),
      ]);

      const mouses = responseMouses.data.map((item) => ({
        id: item.productId,
        src: item.imageUrl,
      }));

      const keyboards = responseKeyboards.data.map((item) => ({
        id: item.productId,
        src: item.imageUrl,
      }));

      const combinedData = shuffle([...mouses, ...keyboards]);
      setSquares(combinedData);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(fetchImages, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [squares]);

  return (
    <div className="grid  grid-flow rounded grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full rounded bg-cover bg-center"
          style={{
            backgroundImage: `url(${sq.src})`,
            backgroundSize: "cover",
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default HeroBanner;