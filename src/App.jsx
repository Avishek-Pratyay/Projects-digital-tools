import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ToggleSection from "./components/ToggleSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import products from "./data/products.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart");
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed from cart");
  };

  const checkout = () => {
    setCart([]);
    toast.info("Checkout complete");
  };

  return (
    <>
      <Navbar count={cart.length} />
      <Banner />
      <Stats />

      <ToggleSection
        products={products}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        checkout={checkout}
      />

      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;