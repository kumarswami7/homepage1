// pages/TestSeries.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSearch, 
  FaFilter, 
  FaClock, 
  FaQuestionCircle, 
  FaChartLine,
  FaArrowRight,
  FaRupeeSign,
  FaCheckCircle
} from 'react-icons/fa';
import '../styles/TestSeries.css';

/**
 * Test Series Page
 * Displays all available test series with search, filter, and animated cards.
 * Features:
 * - Search by title/description
 * - Filter by exam category (GATE, IES, SSC JE, RRB JE)
 * - Filter by price (free/paid)
 * - Scroll-triggered animations (repeats on re-entry)
 * - Responsive grid layout
 */
const TestSeries = () => {
  // ========== STATE MANAGEMENT ==========
  const [searchTerm, setSearchTerm] = useState('');        // Search input value
  const [selectedExam, setSelectedExam] = useState('all'); // Selected exam filter
  const [priceFilter, setPriceFilter] = useState('all');   // Price filter (all/free/paid)
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Mobile filter drawer toggle

  // ========== MOCK DATA (Replace with API call) ==========
  const testSeriesData = [
    {
      id: 1,
      title: "GATE 2026: Complete Test Series",
      exam: "GATE",
      description: "Full-length mock tests covering all subjects with detailed solutions and performance analysis.",
      totalTests: 25,
      totalQuestions: 2500,
      duration: "180 days",
      price: 1999,
      isFree: false,
      popular: true,
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "GATE 2026: CS/IT Subjectwise",
      exam: "GATE",
      description: "Topic-wise tests for Computer Science & IT aspirants with concept videos.",
      totalTests: 40,
      totalQuestions: 3200,
      duration: "365 days",
      price: 1499,
      isFree: false,
      popular: false,
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "GATE 2026: Free Mock Pack",
      exam: "GATE",
      description: "3 full-length free tests to assess your preparation level before buying.",
      totalTests: 3,
      totalQuestions: 300,
      duration: "30 days",
      price: 0,
      isFree: true,
      popular: false,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4a8b9b?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "IES/ESE 2026: Prelims + Mains",
      exam: "IES",
      description: "Comprehensive test series for Engineering Services Examination.",
      totalTests: 35,
      totalQuestions: 4200,
      duration: "300 days",
      price: 2499,
      isFree: false,
      popular: true,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "SSC JE 2026: Civil/Electrical/Mechanical",
      exam: "SSC JE",
      description: "Topic-wise and full-length tests with detailed explanations.",
      totalTests: 50,
      totalQuestions: 5000,
      duration: "365 days",
      price: 1799,
      isFree: false,
      popular: false,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "RRB JE 2026: Complete Package",
      exam: "RRB JE",
      description: "Mock tests based on latest pattern with performance analytics.",
      totalTests: 30,
      totalQuestions: 3600,
      duration: "270 days",
      price: 1599,
      isFree: false,
      popular: false,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  ];

  // Available exam categories for filter buttons
  const examCategories = ['all', 'GATE', 'IES', 'SSC JE', 'RRB JE'];

  // ========== FILTER LOGIC (Memoized for performance) ==========
  const filteredSeries = useMemo(() => {
    let filtered = testSeriesData;

    // 1. Apply search filter (title or description)
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(series =>
        series.title.toLowerCase().includes(term) ||
        series.description.toLowerCase().includes(term)
      );
    }

    // 2. Apply exam category filter
    if (selectedExam !== 'all') {
      filtered = filtered.filter(series => series.exam === selectedExam);
    }

    // 3. Apply price filter
    if (priceFilter === 'free') {
      filtered = filtered.filter(series => series.isFree === true);
    } else if (priceFilter === 'paid') {
      filtered = filtered.filter(series => series.isFree === false);
    }

    return filtered;
  }, [searchTerm, selectedExam, priceFilter, testSeriesData]);

  // ========== SCROLL-TRIGGERED ANIMATIONS (Repeats on re-entry) ==========
  useEffect(() => {
    // Select all test cards
    const cards = document.querySelectorAll('.test-card');
    if (cards.length === 0) return;

    // Intersection Observer: adds 'visible' class when card enters viewport,
    // removes it when leaving – ensures animation repeats on scroll back
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

    // Observe each card
    cards.forEach(card => observer.observe(card));

    // Initial check for cards already visible on page load
    const checkVisibleOnLoad = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < windowHeight - 50) {
          card.classList.add('visible');
        }
      });
    };
    checkVisibleOnLoad();

    // Re-check on window resize
    window.addEventListener('resize', checkVisibleOnLoad);

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkVisibleOnLoad);
    };
  }, [filteredSeries]); // Re-run when filtered results change (new cards)

  // ========== HELPER FUNCTIONS ==========
  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedExam('all');
    setPriceFilter('all');
  };

  // ========== RENDER ==========
  return (
    <main className="test-series-page">
      {/* Background decorative glows */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      {/* Hero Section */}
      <section className="test-hero">
        <div className="test-hero-content">
          <h1>Test Series</h1>
          <p>
            Choose from our comprehensive test series designed by experts 
            to help you crack your dream exam.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="filters-container">
          {/* Search Bar */}
          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search test series by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Mobile Filter Toggle Button */}
          <button 
            className="filter-toggle mobile-only"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            aria-label="Toggle filters"
          >
            <FaFilter /> Filters {isFilterOpen ? '▲' : '▼'}
          </button>

          {/* Filter Options (Desktop always visible, mobile toggle) */}
          <div className={`filters-wrapper ${isFilterOpen ? 'open' : ''}`}>
            {/* Exam Category Filter */}
            <div className="filter-group">
              <label>Exam Category</label>
              <div className="filter-buttons">
                {examCategories.map(exam => (
                  <button
                    key={exam}
                    className={`filter-btn ${selectedExam === exam ? 'active' : ''}`}
                    onClick={() => setSelectedExam(exam)}
                  >
                    {exam === 'all' ? 'All Exams' : exam}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="filter-group">
              <label>Price</label>
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${priceFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setPriceFilter('all')}
                >
                  All
                </button>
                <button
                  className={`filter-btn ${priceFilter === 'free' ? 'active' : ''}`}
                  onClick={() => setPriceFilter('free')}
                >
                  Free
                </button>
                <button
                  className={`filter-btn ${priceFilter === 'paid' ? 'active' : ''}`}
                  onClick={() => setPriceFilter('paid')}
                >
                  Paid
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Series Grid Section */}
      <section className="test-grid-section">
        <div className="test-grid-container">
          {filteredSeries.length === 0 ? (
            // No Results State
            <div className="no-results">
              <p>😕 No test series found matching your criteria.</p>
              <button onClick={clearAllFilters} className="reset-btn">
                Clear All Filters
              </button>
            </div>
          ) : (
            // Results Grid
            <div className="test-grid">
              {filteredSeries.map((series) => (
                <div key={series.id} className="test-card">
                  {/* Card Image with Badges */}
                  <div 
                    className="card-image"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${series.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {series.popular && <span className="popular-badge">🔥 Popular</span>}
                    {series.isFree && <span className="free-badge">FREE</span>}
                  </div>

                  {/* Card Content */}
                  <div className="card-content">
                    <h3>{series.title}</h3>
                    <p className="exam-tag">{series.exam}</p>
                    <p className="description">{series.description}</p>
                    
                    {/* Stats Row */}
                    <div className="card-stats">
                      <div className="stat">
                        <FaClock />
                        <span>{series.duration}</span>
                      </div>
                      <div className="stat">
                        <FaQuestionCircle />
                        <span>{series.totalTests} Tests</span>
                      </div>
                      <div className="stat">
                        <FaChartLine />
                        <span>{series.totalQuestions} Qs</span>
                      </div>
                    </div>

                    {/* Footer with Price and Action */}
                    <div className="card-footer">
                      <div className="price">
                        {series.isFree ? (
                          <span className="free-price">Free</span>
                        ) : (
                          <>
                            <FaRupeeSign />
                            <span>{series.price.toLocaleString()}</span>
                          </>
                        )}
                      </div>
                      <Link to={`/test-series/${series.id}`} className="view-btn">
                        View Details <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="test-cta">
        <div className="test-cta-content">
          <h2>Not sure which test series is right for you?</h2>
          <p>Talk to our experts and get personalized recommendations.</p>
          <Link to="/contact" className="cta-btn">
            Contact Us <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TestSeries;