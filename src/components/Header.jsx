import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";
import { CartContext } from "../context/CartContext";
import "../components/Header.css";
import logo from "../assets/Logo Small size.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="navbar">
      <div className="container">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          
        </nav>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <Search />
          </button>
        </form>

        <div className="cart">
          <Link to="/cart" className="cart-icon">
            <ShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
