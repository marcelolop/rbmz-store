import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Cart({ hover }) {
  return (
    <div className="relative flex items-center justify-center">
      <FaShoppingCart className={`cursor-pointer w-5 h-5 mb-[6px] ${hover ? 'text-white' : 'text-black'}`} />
      <span className="absolute mb-[6px] bottom-4 left-4 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        3
      </span>
    </div>
  );
}

export default Cart;
