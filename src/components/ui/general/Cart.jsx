import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  return (
    <div className="relative flex">
      <FaShoppingCart className="text-black cursor-pointer hover:text-blue-500 w-6 h-6" />
      <span className="absolute bottom-4 left-4 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        3
      </span>
      <span className="ml-2 font-[600]">Cart</span>
    </div>
  );
}

export default Cart;
