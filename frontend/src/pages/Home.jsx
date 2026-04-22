import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaRocket,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaHeadset,
  FaChartLine,
  FaUsers,
  FaCrown,
  FaArrowRight,
  FaGraduationCap,
  FaClipboardList,
  FaTrophy,
  FaBrain
} from 'react-icons/fa';
import '../styles/Home.css';

const Home = ({ userName = "Visionary" }) => {
  const features = [
    {
      icon: <FaGraduationCap />,
      title: "Test Series",
      description: "Comprehensive test series designed to simulate real exam conditions with adaptive difficulty levels and instant feedback.",
      bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4a8b9b?w=400&h=300&fit=crop"
    },
    {
      icon: <FaClipboardList />,
      title: "Performance Analytics",
      description: "Get detailed mark analysis that identifies your strengths and weaknesses with personalized improvement roadmaps.",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      icon: <FaBrain />,
      title: "Smart Domain Guidance",
      description: "AI-powered career path recommendations based on your goals, interests, and performance patterns.",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
    },
    {
      icon: <FaChartLine />,
      title: "Progress Tracking",
      description: "Visual dashboards showing your growth trajectory, topic mastery, and comparative performance metrics.",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      icon: <FaUsers />,
      title: "Peer Learning Community",
      description: "Connect with fellow aspirants, share insights, and participate in group discussions and challenges.",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
    },
    {
      icon: <FaTrophy />,
      title: "Achievement Badges",
      description: "Earn recognition for milestones, consistent performance, and subject mastery with digital credentials.",
      bgImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop"
    }
  ];

  const stats = [
    { number: "10", label: "Test Attempts" },
    { number: "15", label: "Practice Tests" },
    { number: "15", label: "Subjects Covered" },
    { number: "PAN India", label: "Student Network" }
  ];

  // Scroll-triggered animations: toggles 'visible' class on enter/leave
  useEffect(() => {
    const elements = document.querySelectorAll('.feature-card, .stat-item, .hero-content, .hero-visual');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    elements.forEach(el => observer.observe(el));

    // Initial check for elements already visible on mount
    const checkVisibleOnLoad = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 50) {
          el.classList.add('visible');
        }
      });
    };
    checkVisibleOnLoad();
    window.addEventListener('resize', checkVisibleOnLoad);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkVisibleOnLoad);
    };
  }, []);

  return (
    <main className="home-container">
      {/* Background Decorative Glows */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge-container">
            <span className="badge">🏆 India's Rising EdTech</span>
            <span className="badge-status">Test Series 2026</span>
          </div>

          <h1 className="hero-title">
            Welcome back, <span className="user-highlight">{userName}</span>.<br />
            <span className="gradient-text">Master in Your Exams with NA private limited solutions </span>
          </h1>

          <p className="hero-subtitle">
            Transform your preparation journey with our scientifically designed test series.
            From concept clarity to exam readiness — we guide you every step of the way with
            real-time insights and personalized learning paths.
          </p>

          <div className="hero-actions">
            <Link to="/test-series" className="btn-primary">
              Start Free Trial
              <span className="btn-glow"></span>
            </Link>
            <a href="#features" className="btn-secondary">
              <span className="play-icon">✦</span> Explore Tests
            </a>
          </div>

          <div className="social-proof">
            <p>Trusted by aspirants from</p>
            <div className="client-logos">
              <span>SRNIVASA RAO</span> <span className="separator">•</span>
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
              <div className="card-title">Live Test Performance</div>
            </div>
            <div className="card-body">
              <div className="skeleton-line long"></div>
              <div className="skeleton-line mid"></div>
              <div className="skeleton-line short"></div>
              <div className="metric-group">
                <div className="metric">
                  <span className="metric-value">85%</span>
                  <span className="metric-label">Accuracy</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Top 10%</span>
                  <span className="metric-label">Your Rank</span>
                </div>
              </div>
            </div>
            <div className="floating-icon icon-1">📚</div>
            <div className="floating-icon icon-2">⚡</div>
            <div className="floating-icon icon-3">🎯</div>
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

      {/* Features Grid Section - Everything you need to ace your exams */}
      <section id="features" className="features-section">
        <div className="section-header">
          <span className="section-badge">Education Test Series</span>
          <h2 className="section-title">
            Everything you need to <span className="gradient-text">ace your exams</span>
          </h2>
          <p className="section-subtitle">
            From mock tests to performance analysis — a complete ecosystem for exam success
          </p>
        </div>

        <div className="features">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${feature.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="feat-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link
                to="/test-series"
                className="feature-link"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #f59e0b, #d97706)',
                  backgroundSize: '100%',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=100&fit=crop')";
                  e.currentTarget.style.backgroundSize = "cover";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.backgroundBlend = "overlay";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage = "linear-gradient(90deg, #f59e0b, #d97706)";
                }}
              >
                Learn More <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to transform your preparation?</h2>
          <p>Join thousands of successful aspirants who trusted Weduction Test Series</p>
          <div className="cta-buttons">
            <Link
              to="/register"
              className="btn-primary cta-btn"
              style={{
                backgroundImage: "linear-gradient(135deg, #3b82f6, #2563eb)",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=200&fit=crop')";
                e.currentTarget.style.backgroundSize = "cover";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = "linear-gradient(135deg, #3b82f6, #2563eb)";
              }}
            >
              Get Started Free
              <span className="btn-glow"></span>
            </Link>
            <Link
              to="/test-series"
              className="btn-secondary cta-btn"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(4px)",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=200&fit=crop')";
                e.currentTarget.style.backgroundSize = "cover";
                e.currentTarget.style.color = "#f59e0b";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.backdropFilter = "blur(4px)";
              }}
            >
              View Test Series
              <FaArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;