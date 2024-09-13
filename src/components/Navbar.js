import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ isHomePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`navigator ${isHomePage ? 'home-page' : ''}`}>
      <button className="nav-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={isMenuOpen ? 'show' : 'hide'}>
        <li className={location.pathname === "/" ? "selected" : ""} onClick={closeMenu}>
          <Link to="/" className="container-list">Home</Link>
        </li>
        <li className={location.pathname === "/soap" ? "selected" : ""} onClick={closeMenu}>
          <Link to="/soap" className="container-list">Soap</Link>
        </li>
        <li className={location.pathname === "/shampoo" ? "selected" : ""} onClick={closeMenu}>
          <Link to="/shampoo" className="container-list">Shampoo</Link>
        </li>
        <li className={location.pathname === "/oilmacerated" ? "selected" : ""} onClick={closeMenu}>
          <Link to="/oilmacerated" className="container-list">Oil Macerated</Link>
        </li>
        <li className={location.pathname === "/tonics" ? "selected" : ""} onClick={closeMenu}>
          <Link to="/tonics" className="container-list">Tonics</Link>
        </li>
      </ul>
    </div>
  );
}
