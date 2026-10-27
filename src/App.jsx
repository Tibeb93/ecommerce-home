import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />
      <Categories />
      <ProductList onAdd={addToCart} />
      <Footer />
    </>
  );
}

export default App;
