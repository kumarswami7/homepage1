// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaClock,
  FaShieldAlt,
  FaHeart
} from 'react-icons/fa';
import '../styles/Footer.css';
import logo from '../../public/bg_removerd_logo.png'; // Update path as needed

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Test Series", path: "/test-series" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Blog", path: "/blog" }
  ];
  
  const supportLinks = [
    { name: "Help Center", path: "/help" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  
  ];
  
  const examCategories = [
    { name: "GATE", path: "/exams/gate" }
  ];
  
  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://facebook.com/weduction", label: "Facebook" },
    { icon: <FaTwitter />, link: "https://twitter.com/weduction", label: "Twitter" },
    { icon: <FaInstagram />, link: "https://instagram.com/weduction", label: "Instagram" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com/company/weduction", label: "LinkedIn" },
    { icon: <FaYoutube />, link: "https://youtube.com/@weduction", label: "YouTube" }
  ];
  
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Column 1 - Brand & Description */}
          <div className="footer-column brand-column">
            <div className="footer-logo">
              <Link to="/" className="logo-link">
                <img src={logo} alt="company Logo" className="logo-image1" />

              </Link>
            </div>
            <p className="brand-description">
              India's most innovative test series platform helping aspirants achieve their dreams through smart preparation and performance analytics.
            </p>
            {/* <div className="trust-badge">
              <FaShieldAlt className="shield-icon" />
              <span>Trusted by 10,000+ Students</span>
            </div> */}
            <div className="social-links">
              {socialIcons.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    <FaArrowRight className="link-arrow" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Exam Categories */}
          <div className="footer-column">
            <h3 className="footer-heading">Exam Categories</h3>
            <ul className="footer-links">
              {examCategories.map((category, index) => (
                <li key={index}>
                  <Link to={category.path} className="footer-link">
                    <FaArrowRight className="link-arrow" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Support */}
          <div className="footer-column">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    <FaArrowRight className="link-arrow" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 5 - Contact Info */}
          <div className="footer-column contact-column">
            <h3 className="footer-heading">Get in Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-text">
                  <strong>Visit Us:</strong>
                  <span>Ongole -  523001, India</span>
                </div>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div className="contact-text">
                  <strong>Call Us:</strong>
                  <a href="tel:+916530332516">+91 63033 25161</a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-text">
                  <strong>Email Us:</strong>
                  <a href="mailto:support@weduction.com">support@weduction.com</a>
                  <a href="mailto:hello@weduction.com">hello@weduction.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <div className="contact-text">
                  <strong>Support Hours:</strong>
                  <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      {/* <div className="footer-newsletter">
        <div className="footer-container">
          <div className="newsletter-wrapper">
            <div className="newsletter-content">
              <h4>Subscribe to Our Newsletter</h4>
              <p>Get weekly updates on new test series, tips, and exclusive offers!</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  required
                />
                <button type="submit">
                  Subscribe
                  <FaArrowRight />
                </button>
              </div>
              <p className="form-note">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </div> */}
      
      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Education Test Series. All rights reserved.</p>
            </div>
            <div className="payment-methods">
              <span>Secure Payments:</span>
              <div className="payment-icons">
                <i className="payment-icon">💳</i>
                <i className="payment-icon">📱</i>
                <i className="payment-icon">🔒</i>
              </div>
            </div>
            <div className="made-with">
              <span>Made with <FaHeart className="heart-icon" /> in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;