import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import About from "./pages/about";
import Contact from "./pages/contact";
import ProductDetails from "./pages/productDetails";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";
import "../src/styles/test.css";
import { CartProvider } from "./components/ui/general/CartProvider";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <CartProvider>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </main>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
