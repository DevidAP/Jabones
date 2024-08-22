import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Soap from './pages/Soap';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Shampoo from './pages/Shampoo';
import OilMacerated from './pages/OilMacerated';
import Tonics from './pages/Tonics';
// import { CartProvider } from './components/Cart/CartContex';

import './App.css';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar isHomePage={isHomePage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soap" element={<Soap />} />
        <Route path="/shampoo" element={<Shampoo />} />
        <Route path="/oilmacerated" element={<OilMacerated />} />
        <Route path="/tonics" element={<Tonics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <AppContent />
      </div>
    </Router>
  );
}
