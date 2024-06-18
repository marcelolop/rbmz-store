import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../components/ui/general/CartProvider";

function Cart({ hover }) {
  const { count } = useContext(CartContext);

  return (
    <div className="relative flex items-center justify-center">
      <FaShoppingCart
        className={`cursor-pointer w-5 h-5  ${
          hover ? "text-white" : "text-black"
        }`}
      />
      <span className="absolute mb-[6px] bottom-2 left-4 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        {count}
      </span>
    </div>
  );
}

export default Cart;