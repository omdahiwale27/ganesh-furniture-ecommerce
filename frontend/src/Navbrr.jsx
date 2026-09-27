import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbrr.css";

function Navbrr() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="top-bar-inner">

          <span>📍 Pune, Maharashtra</span>

          <div className="top-message">
            Quality Products &nbsp; | &nbsp; Trusted Service
          </div>

          <div className="top-links">
            <Link to="/contact">Help</Link>
            <Link to="/admin">Admin</Link>
          </div>

        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <header className="main-navbar">

        <div className="navbar-container">

          {/* LOGO */}
          <Link
            to="/"
            className="brand"
            onClick={() => setMenuOpen(false)}
          >
            <div className="brand-mark">
              G
            </div>

            <div className="brand-text">
              <strong>GANESH</strong>
              <span>Furniture & Electronics</span>
            </div>
          </Link>

          {/* SEARCH */}
          <form
            className="navbar-search"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Search furniture, electronics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="submit">
              🔍
            </button>
          </form>

          {/* DESKTOP ACTIONS */}
          <div className="navbar-actions">

            <Link to="/account" className="nav-action">
              <span>♙</span>
              <small>Account</small>
            </Link>

            <Link to="/wishlist" className="nav-action">
              <span>♡</span>
              <small>Wishlist</small>
            </Link>

            <Link to="/cart" className="nav-action cart-action">
              <span>🛒</span>
              <small>Cart</small>
              <b>0</b>
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

        </div>

        {/* ================= NAV LINKS ================= */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/catalog"
            onClick={() => setMenuOpen(false)}
          >
            Catalog
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/address"
            onClick={() => setMenuOpen(false)}
          >
            Store Location
          </Link>

          <Link
            to="/admin"
            className="admin-link"
            onClick={() => setMenuOpen(false)}
          >
            Admin Login
          </Link>

        </nav>

      </header>
    </>
  );
}

export default Navbrr;