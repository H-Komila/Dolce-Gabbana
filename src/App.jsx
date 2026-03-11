import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Komponentlar
import LoadingScreen from './components/LoadingScreen';

// Sahifalar
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Layout from './components/Layout/Layout';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        {/* Hamma sahifalar Layout ichiga olinadi */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* "/" yo'li uchun Home */}
          <Route path="catalog" element={<Catalog />} />
          <Route path="product" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;