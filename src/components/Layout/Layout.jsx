// src/components/Layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Nav /> 
      
      <main className="flex-grow pt-[var(--app-header-h,0px)]"> 
        {/* DIQQAT: Bu yerda faqat <Outlet /> bo'lishi shart! */}
        {/* Hech qanday <Wishlist /> yoki <Cart /> yozmang. */}
        <Outlet /> 
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
