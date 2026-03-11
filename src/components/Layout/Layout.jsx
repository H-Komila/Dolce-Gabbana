// src/layout/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="app-container">
      <Nav /> 
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;