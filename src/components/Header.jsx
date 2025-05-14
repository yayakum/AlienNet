import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const HeaderNeon = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-neon">
      <div className="logo-container">
        <Link to="/" className="alien-logo">
          ALIEN<span>NET</span>
        </Link>
      </div>

      <div
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              className="nav-button"
              onClick={() => setMenuOpen(false)}
            >
              INICIO
            </Link>
          </li>
          <li>
            <Link
              to="/Blog"
              className="nav-button"
              onClick={() => setMenuOpen(false)}
            >
              BLOG
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNeon;
