import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    const count = Object.values(cart).reduce((a, b) => a + b, 0);
    setCount(count);
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    cart[product.id] = (cart[product.id] || 0) + 1;
    localStorage.setItem('cart', JSON.stringify(cart));

    const newCount = Object.values(cart).reduce((a, b) => a + b, 0);
    setCount(newCount);
  };

  return (
    <CartContext.Provider value={{ count, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};