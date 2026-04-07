import React from 'react';
import { FaGraduationCap, FaCogs, FaProjectDiagram, FaArrowRight } from 'react-icons/fa';
import '../styles/Products.css';

const Products = () => {
  const businessUnits = [
    {
      id: 'edugate',
      title: "EduGate",
      description: "A premier GATE examination simulation and test series platform designed for high-performance aspirants.",
      icon: <FaGraduationCap />,
      tag: "Education Tech",
      link: "https://test-series-frontend-student.onrender.com" // Replace with your actual link
    },
    {
      id: 'solutions',
      title: "Core Solutions",
      description: "Custom software architecture and high-scalability digital infrastructure for modern enterprises.",
      icon: <FaCogs />,
      tag: "B2B Infrastructure",
      link: "https://test-series-frontend-student.onrender.com"
    },
    {
      id: 'ventures',
      title: "Nexus Ventures",
      description: "Incubating next-generation AI and hardware startups with a focus on sustainable innovation.",
      icon: <FaProjectDiagram />,
      tag: "Venture Capital",
      link: "https://test-series-frontend-student.onrender.com"
    }
  ];

  return (
    <div className="products-page fade-in">
      <div className="products-container">
        
        {/* Minimal Executive Header */}
        <header className="shop-header-minimal">
          <span className="badge">Portfolio Verticals</span>
          <h1 className="hero-title">
            Our <span className="gradient-text">Business</span>
          </h1>
          <p className="hero-subtitle">
            Diversified sectors united by a single vision: 
            Driving the future through technical excellence.
          </p>
          <div className="header-line"></div>
        </header>

        {/* Business Section Grid */}
        <section className="business-grid">
          {businessUnits.map((unit) => (
            <div key={unit.id} className="business-card">
              <div className="business-icon-wrapper">
                {unit.icon}
              </div>
              <div className="business-content">
                <span className="business-tag">{unit.tag}</span>
                <h3 className="business-title">{unit.title}</h3>
                <p className="business-description">{unit.description}</p>
              </div>

              {/* New External Link Button */}
              <a 
                href={unit.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-portal"
              >
                Launch Platform <FaArrowRight className="arrow-icon" />
              </a>

              <div className="business-hover-glow"></div>
            </div>
          ))}
        </section>

        {/* Footer Note */}
        <div className="vault-status">
          <p>Collaborations for 2026 are currently in review.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;