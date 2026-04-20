import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaHome, FaSignInAlt, FaUserPlus, FaSignOutAlt, 
  FaBars, FaTimes, FaStore, FaSearch, FaUser
} from 'react-icons/fa';
import './Navbar.css';
import logo from '../../public/bg_removerd_logo.png'; // Ensure you have a logo image in this path

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Make it updatable
  const [user, setUser] = useState({ name: 'Guest' });

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser({ name: 'Guest' });
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
       <img src={logo} alt="Premium Products Logo" className="logo-image" />
        </Link>

        {/* Desktop Search */}
        <form className="search-container desktop-search" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search for premium products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            <FaSearch />
          </button>
        </form>

        {/* Desktop Navigation Links */}
        <div className="nav-links-desktop">
          <Link to="/" className="nav-item">
            <FaHome className="nav-icon" /> Home
          </Link>
          <Link to="/products" className="nav-item">
            <FaStore className="nav-icon" /> Products
          </Link>
        </div>

        {/* Auth Buttons */}
        {/* <div className="auth-buttons">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="nav-item login-btn">Login</Link>
              <Link to="/register" className="btn-signup">
                <FaUserPlus className="btn-icon" /> Join Now
              </Link>
            </>
          ) : (
            <div className="user-menu">
              <span className="user-name">
                <FaUser className="user-icon" /> {user.name}
              </span>
              <button onClick={handleLogout} className="btn-logout">
                <FaSignOutAlt className="btn-icon" /> Logout
              </button>
            </div>
          )}
        </div> */}

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="nav-mobile-dropdown">
          <form className="search-container mobile-search" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit" aria-label="Search">
              <FaSearch />
            </button>
          </form>
          
          <Link 
            to="/" 
            className="nav-item-mobile" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaHome className="nav-icon" /> Home
          </Link>
          
          <Link 
            to="/products" 
            className="nav-item-mobile" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaStore className="nav-icon" /> Products
          </Link>
          
          <div className="divider"></div>
          
          {!isAuthenticated ? (
            <>
              <Link 
                to="/login" 
                className="nav-item-mobile login-mobile" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaSignInAlt className="nav-icon" /> Login
              </Link>
              <Link 
                to="/register" 
                className="btn-signup-mobile" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaUserPlus className="btn-icon" /> Create Account
              </Link>
            </>
          ) : (
            <button onClick={() => {
              handleLogout();
              setIsMobileMenuOpen(false);
            }} className="logout-mobile">
              <FaSignOutAlt className="btn-icon" /> Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;