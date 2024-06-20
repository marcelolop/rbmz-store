import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../ui/general/Cart";
import SearchBar from "../ui/general/SearchBar";
import { FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../media/icons/logo.png";

function Header() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [accountCartPosition, setAccountCartPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isCartHovered, setIsCartHovered] = useState(false);

  const resetCartPosition = () => {
    setAccountCartPosition((pv) => ({
      ...pv,
      opacity: 0,
    }));
  };

  return (
    <header className=" bg-gradient-to-t from-white to-blue-100  p-4 h-[100px] shadow-slate-200 flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-3 gap-4 items-center">
        <div className="col-span-1 flex items-center">
          <Link
            className="text-[50px] font-bold text-black hover:text-blue-500"
            to="/"
          >
            <img src={logo} alt="logo" 
            className="w-28 h-28 rounded-full"
            />
          </Link>
            <SearchBar />
        </div>
        <nav className="col-span-1 relative">
          <ul
            onMouseLeave={() => {
              setPosition((pv) => ({
                ...pv,
                opacity: 0,
              }));
            }}
            className="relative ml-auto mr-auto flex w-fit rounded-full border- bg-gradient-to-t from-white to-blue-100  p-1"
          >
            <Tab setPosition={setPosition} to="/">
              Home
            </Tab>
            <Tab setPosition={setPosition} to="/products">
              Products
            </Tab>
            <Tab setPosition={setPosition} to="/about">
              About
            </Tab>
            <Tab setPosition={setPosition} to="/contact">
              Contact
            </Tab>
            <Cursor position={position} />
          </ul>
        </nav>
        <nav className="col-span-1 gap-5 flex items-center justify-end space-x-4">
          <ul
            onMouseLeave={resetCartPosition}
            className="relative mx-auto flex w-fit rounded-full border-bg-gradient-to-t from-white to-blue-100  p-1 items-center"
          >
            <Tab setPosition={setAccountCartPosition} to="/login">
              <div className="flex items-center">
                <FaUserAlt />
                <span className="ml-2 font-[600]">Account</span>
              </div>
            </Tab>
            <Tab
              setPosition={setAccountCartPosition}
              to="/cart"
              onMouseEnter={() => {
                console.log("Mouse entered");
                setIsCartHovered(true);
              }}
              onMouseLeave={() => {
                console.log("Mouse left");
                setIsCartHovered(false);
              }}
            >
              <div className="relative flex items-center justify-center">
                <Cart
                  className="cursor-pointer w-5 h-5 mb-[6px]"
                />
              </div>
            </Tab>
            <Cursor position={accountCartPosition} />
          </ul>
        </nav>
      </div>
    </header>
  );
}

const Tab = ({ children, setPosition, to }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-black font-[600] hover:text-white transition-colors duration-500 md:px-5 md:py-3 md:text-base"
    >
      <Link to={to}>{children}</Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-blue-400 md:h-12"
    />
  );
};

export default Header;