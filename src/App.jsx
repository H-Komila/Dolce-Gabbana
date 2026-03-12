// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Layout
import Layout from "./components/Layout/Layout";

// Komponentlar
import LoadingScreen from "./components/LoadingScreen";
import SimpleSlider from "./components/Hero/SimpleSlider";

// Sahifalar
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="slider" element={<SimpleSlider />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="product-detail" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
