import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./home";
import Products from "./Products";
import About from "./about";
import Footer from "./Footer";
import CartPage from "./CartPage";
import { CartProvider } from "./CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleNavClick = () => {
    if (cartOpen) {
      setCartOpen(false);
    }
  };

  const handleContinueShopping = () => {
    setCartOpen(false);
    // Scroll to products section (below Home)
    setTimeout(() => {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <CartProvider>
      <Navbar onCartClick={() => setCartOpen(true)} onNavClick={handleNavClick} />
      {cartOpen ? (
        <CartPage onClose={handleContinueShopping} />
      ) : (
        <>
          <Home />
          <Products id="products" />
          <ToastContainer />
          <About />
        </>
      )}
      <Footer />
    </CartProvider>
  );
}

export default App;
