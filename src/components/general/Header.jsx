import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../ui/general/Cart";
import SearchBar from "../ui/general/SearchBar";
import { FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Header() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <header className="bg-slate-50 p-4 w-full h-[100px] shadow-slate-200 shadow-3d flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-3 gap-4 items-center">
        <div className="col-span-1 flex items-center">
          <Link
            className="text-[50px] font-bold text-black hover:text-blue-500"
            to="/"
          >
            <img
              className="w-[50px] h-[50px] rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="logo"
            />
          </Link>
        </div>
        <nav className="col-span-1 relative">
          <ul
            onMouseLeave={() => {
              setPosition((pv) => ({
                ...pv,
                opacity: 0,
              }));
            }}
            className="relative mx-auto flex w-fit rounded-full border- bg-white p-1"
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
        <div className="col-span-1 gap-5 flex items-center justify-end space-x-4">
          <SearchBar />
          <Link className="flex text-black hover:text-blue-500" to="/login">
            <FaUserAlt />
            <span className="ml-2 font-[600]">Account</span>
          </Link>
          <Link className="text-black hover:text-blue-500" to="/cart">
            <Cart />
          </Link>
        </div>
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-black font-[600] hover:text-blue-500 transition-colors duration-500 md:px-5 md:py-3 md:text-base"
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
      className="absolute z-0 h-7 rounded-full bg-blue-500 md:h-12"
    />
  );
};

export default Header;