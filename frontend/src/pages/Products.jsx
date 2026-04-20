import React from 'react';
import { FaGraduationCap, FaCogs, FaProjectDiagram, FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import '../styles/Products.css';

const Products = () => {
  const businessUnits = [
    {
      id: 'edugate',
      title: "EduGate",
      description: "A premier GATE examination simulation and test series platform designed for high-performance aspirants.",
      icon: <FaGraduationCap />,
      tag: "Education Tech",
      link: "https://test-series-frontend-student.onrender.com",
      status: "Live Access"
    },
    {
      id: 'solutions',
      title: "Core Solutions",
      description: "Custom software architecture and high-scalability digital infrastructure for modern enterprises.",
      icon: <FaCogs />,
      tag: "B2B Infrastructure",
      link: "https://test-series-frontend-student.onrender.com",
      status: "Enterprise Only"
    },
    {
      id: 'ventures',
      title: "Nexus Ventures",
      description: "Incubating next-generation AI and hardware startups with a focus on sustainable innovation.",
      icon: <FaProjectDiagram />,
      tag: "Venture Capital",
      link: "https://test-series-frontend-student.onrender.com",
      status: "Strategic"
    }
  ];

  return (
    <div className="products-page fade-in">
      <div className="bg-blur-effect"></div> {/* Premium background element */}
      
      <div className="products-container">
        <header className="shop-header-minimal">
          <div className="top-line"></div>
          <span className="badge-premium">System Directory</span>
          <h1 className="hero-title">
            Executive <span className="gradient-text">Verticles</span>
          </h1>
          <p className="hero-subtitle">
            Strategic business units engineered for systemic efficiency and global scale.
          </p>
        </header>

        <section className="business-grid-premium">
          {businessUnits.map((unit) => (
            <div key={unit.id} className="premium-card">
              <div className="card-top">
                <span className="unit-status">{unit.status}</span>
                <div className="premium-icon">{unit.icon}</div>
              </div>

              <div className="card-content">
                <span className="unit-tag">{unit.tag}</span>
                <h3 className="unit-title">{unit.title}</h3>
                <p className="unit-description">{unit.description}</p>
              </div>

              <div className="card-action">
                <a 
                  href={unit.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="portal-link"
                >
                  <span>Initialize Portal</span>
                  <FaArrowRight className="portal-arrow" />
                </a>
              </div>
              
              {/* Decorative premium elements */}
              <div className="card-corner"></div>
              <div className="inner-glow"></div>
            </div>
          ))}
        </section>

        <footer className="footer-status">
          <FaShieldAlt className="shield-icon" />
          <p>Encrypted Session // © 2026 Organization Global</p>
        </footer>
      </div>
    </div>
  );
};

export default Products;