// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaSignInAlt, 
  FaUserPlus, 
  FaSignOutAlt, 
  FaBars, 
  FaTimes, 
  FaChartLine, 
  FaClipboardList,
  FaUser,
  FaGraduationCap
} from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/bg_removerd_logo.png'; // Logo import - unchanged

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // For active link highlighting
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ name: 'Guest' });

  // Navigation links for education platform
  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Test Series", path: "/test-series", icon: <FaClipboardList /> },
    { name: "Features", path: "/#features", icon: <FaChartLine /> },
  ];

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser({ name: 'Guest' });
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Helper to check if link is active
  const isActive = (path) => {
    if (path === "/#features") {
      return location.pathname === "/" && location.hash === "#features";
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo using image – unchanged */}
        <img src={logo} alt="Company Logo" className="nav-logo" />

        {/* Desktop Navigation Links */}
        <div className="nav-links-desktop">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx} 
              to={link.path} 
              className={`nav-item ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons (commented but ready) */}
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
          {navLinks.map((link, idx) => (
            <Link 
              key={idx}
              to={link.path} 
              className={`nav-item-mobile ${isActive(link.path) ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
          
          <div className="divider"></div>
          
          {!isAuthenticated ? (
            <>
              {/* <Link 
                to="/login" 
                className="nav-item-mobile login-mobile" 
                onClick={closeMobileMenu}
              >
                <FaSignInAlt className="nav-icon" /> Login
              </Link>
              <Link 
                to="/register" 
                className="btn-signup-mobile" 
                onClick={closeMobileMenu}
              >
                <FaUserPlus className="btn-icon" /> Create Account
              </Link> */}
            </>
          ) : (
            <button onClick={handleLogout} className="logout-mobile">
              <FaSignOutAlt className="btn-icon" /> Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;