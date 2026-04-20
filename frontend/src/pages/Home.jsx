import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaRocket, 
  FaShieldAlt, 
  FaCloudUploadAlt, 
  FaHeadset,
  FaChartLine,
  FaUsers,
  FaCrown,
  FaArrowRight
} from 'react-icons/fa';
import '../styles/Home.css';
import logo from '../../public/bg_removerd_logo.png'; // Add logo import

const Home = ({ userName = "Visionary" }) => {
  const features = [
    {
      icon: <FaRocket />,
      title: "Eduction tracking ",
      description: "Experience unparalleled performance with our optimized results that delivers in milliseconds."
    },
    {
      icon: <FaShieldAlt />,
      title: "Marks & Performance ",
      description: "According ot you marks explain the what is your strength and weakness and how to improve it"
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Domains ",
      description: "Guide according to you goals and interest to choose the best domain for you and how to excel in it"
    },
    {
      icon: <FaChartLine />,
      title: "Real-time Analytics",
      description: "Gain actionable insights with powerful analytics and customizable dashboards."
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Empower your team with collaborative tools that streamline workflows and boost productivity."
    },
    {
      icon: <FaCrown />,
      title: "Premium Support",
      description: "24/7 dedicated support with enterprise SLAs and priority response times."
    }
  ];

  const stats = [
    { number: "99%", label: "Uptime Guarantee" },
    { number: "5", label: "Active Users" },
    { number: "0", label: "Transactions" },
    { number: "India", label: "Country" }
  ];

  return (
    <main className="home-container">
      {/* Background Decorative Glows */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge-container">
            <span className="badge">Limited Access 2026</span>
            <span className="badge-status">System Online</span>
          </div>

          <h1 className="hero-title">
            Welcome back, <span className="user-highlight">{userName}</span>.<br />
            <span className="gradient-text">Build the Extraordinary.</span>
          </h1>

          <p className="hero-subtitle">
            Your ideas deserve more than just a platform—they deserve a masterpiece. 
            Leverage our premium infrastructure to turn complex workflows into 
            seamless digital experiences.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="btn-primary">
              Initialize Project
              <span className="btn-glow"></span>
            </Link>
            <a href="#features" className="btn-secondary">
              <span className="play-icon">✦</span> View Ecosystem
            </a>
          </div>
          
          <div className="social-proof">
            <p>Trusted by the most innovative members</p>
            <div className="client-logos">
              <span>SRINIVASA RAO</span> <span className="separator">•</span> 
              <span>KUMAR SWAMI</span> <span className="separator">•</span> 
              <span>SAIEF</span> <span className="separator">•</span> 
              <span>RAHIM</span> <span className="separator">•</span> 
              <span>SREESANTH</span> 
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glass-card-float">
            <div className="card-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <div className="card-title">Support</div>
            </div>
            <div className="card-body">
              <div className="skeleton-line long"></div>
              <div className="skeleton-line mid"></div>
              <div className="skeleton-line short"></div>
              <div className="metric-group">
                <div className="metric">
                  <span className="metric-value">98%</span>
                  <span className="metric-label">Performance</span>
                </div>
                <div className="metric">
                  <span className="metric-value">24/7</span>
                  <span className="metric-label">Support</span>
                </div>
              </div>
            </div>
            <div className="floating-icon icon-1">💎</div>
            <div className="floating-icon icon-2">⚡</div>
            <div className="floating-icon icon-3">🚀</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">
            Everything you need to <span className="gradient-text">succeed</span>
          </h2>
          <p className="section-subtitle">
            Powerful features that help you build, scale, and grow your digital presence
          </p>
        </div>

        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feat-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link to="/products" className="feature-link">
                Learn More <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Start your journey with us</h2>
          <p>Join thousands of innovators who are already building the future with us</p>
          <div className="cta-buttons">
            <Link to="/register" className="btn-primary cta-btn">
              Get Started Free
              <span className="btn-glow"></span>
            </Link>
            <Link to="/products" className="btn-secondary cta-btn">
              Explore Products
              <FaArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="newsletter">
        <div className="newsletter-content">
          <h3>Stay in the loop</h3>
          <p>Get the latest updates, features, and insights delivered to your inbox</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address"
              required
            />
            <button type="submit">
              Subscribe
              <FaArrowRight className="btn-icon" />
            </button>
          </form>
          <p className="newsletter-note">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section> */}
    </main>
  );
};

export default Home;