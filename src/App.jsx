import { Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import { casinos } from "./data/casinos";
import TopCasinos from "./pages/TopCasinos";
import NewCasinos from "./pages/NewCasinos";
import FastRedemption from "./pages/FastRedemption";
import CasinoReview from "./pages/CasinoReview";
import AllCasinos from "./pages/AllCasinos";
import BestCasinos from "./pages/BestCasinos";
import Disclaimer from "./pages/Disclaimer";
import ResponsiblePlay from "./pages/ResponsiblePlay";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Home() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;

    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  useEffect(() => {
    checkScroll();

    const el = scrollRef.current;

    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <>
      <section className="sr-hero">
        <div className="sr-hero-content">
          <p className="sr-eyebrow">Sweepstakes Casino Rankings</p>

          <h1>Find the Best Sweepstakes Casinos Faster</h1>

          <p className="sr-hero-text">
            SweepsRanked compares sweepstakes casinos by bonuses, redemption
            speed, trust, and beginner-friendly features.
          </p>

          <div className="sr-hero-actions">
            <a href="/all-casinos" className="sr-primary-btn">
              View All Casinos
            </a>

            <a href="/best-sweepstakes-casinos" className="sr-secondary-btn">
              Best Sweeps Casinos
            </a>
          </div>
        </div>
      </section>
      <div className="sr-why-section">
  <h2>Why Use SweepsRanked?</h2>

  <div className="sr-why-grid">
    <div>
      <h3>Compare Casinos</h3>
      <p>
        Easily compare sweepstakes casinos by ratings, bonuses, and user experience.
      </p>
    </div>

    <div>
      <h3>Find Fast Payouts</h3>
      <p>
        Discover which platforms offer faster redemption times and smoother withdrawals.
      </p>
    </div>

    <div>
      <h3>Trusted Reviews</h3>
      <p>
        Get clear, structured reviews to help you choose the right platform.
      </p>
    </div>
  </div>
</div>

      <section id="top-casinos" className="sr-section">
        <div className="sr-section-heading">
          <p className="sr-eyebrow">Top Picks</p>
          <h2>Top Sweepstakes Casinos</h2>
          <p>Our highest rated platforms right now.</p>
        </div>

        <div className="sr-home-scroll-wrapper">
          {canScrollLeft && (
            <button className="sr-scroll-btn left" onClick={scrollLeft}>
              ←
            </button>
          )}

          <div
            className="sr-casino-grid sr-home-casino-scroll"
            ref={scrollRef}
          >
            {casinos
              .sort((a, b) => b.trustpilotRating - a.trustpilotRating)
              .slice(0, 6)
              .map((casino, index) => (
                <article className="sr-casino-card" key={casino.id}>
                  <div className="sr-card-top">
                    <span className="sr-rank">#{index + 1}</span>
                    <span className="sr-label">{casino.label}</span>
                  </div>

                  <div className="sr-casino-header">
                    <img src={casino.logo} alt={casino.name} />
                    <h3>{casino.name}</h3>
                  </div>

                  <p className="sr-bonus">{casino.bonus}</p>

                  <div className="sr-card-stats">
                    <div>
                      <span>Rating</span>
                      <strong>{casino.rating}</strong>
                    </div>

                    <div>
                      <span>Best For</span>
                      <strong>{casino.bestFor}</strong>
                    </div>

                    <div>
                      <span>Redemption</span>
                      <strong>{casino.redemption}</strong>
                    </div>
                  </div>

                  <div className="sr-card-actions">
                    <a
                      href={casino.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sr-claim-btn"
                    >
                      Claim Bonus
                    </a>

                    <a
                      href={`/casino/${casino.id}`}
                      className="sr-review-link"
                    >
                      Read Review
                    </a>
                  </div>
                </article>
              ))}
          </div>

          {canScrollRight && (
            <button className="sr-scroll-btn right" onClick={scrollRight}>
              →
            </button>
          )}
        </div>
      </section>

      <section id="categories" className="sr-section sr-categories-section">
        <div className="sr-section-heading">
          <p className="sr-eyebrow">Browse</p>
          <h2>Find Casinos by Category</h2>
        </div>

        <div className="sr-category-grid">
          <div className="sr-category-card">
            <span>🔥</span>
            <h3>New Sweepstakes Casinos</h3>
          </div>

          <div className="sr-category-card">
            <span>⚡</span>
            <h3>Fast Redemption Casinos</h3>
          </div>

          <div className="sr-category-card">
            <span>🎁</span>
            <h3>No Deposit Bonuses</h3>
          </div>

          <div className="sr-category-card">
            <span>🧠</span>
            <h3>Best for Beginners</h3>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sr-page">
      <header className="sr-navbar">
  <a href="/" className="sr-logo">
    SweepsRanked
  </a>

  <button
    className="sr-menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? "✕" : "☰"}
  </button>

  <nav className={`sr-nav-links ${menuOpen ? "open" : ""}`}>
    <a href="/all-casinos">All Casinos</a>
    <a href="/best-sweepstakes-casinos">Best Casinos</a>
    <a href="/new-casinos">New Casinos</a>
  </nav>
</header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-casinos" element={<TopCasinos />} />
          <Route path="/new-casinos" element={<NewCasinos />} />
          <Route path="/fast-redemption" element={<FastRedemption />} />
          <Route path="/casino/:id" element={<CasinoReview />} />
          <Route path="/all-casinos" element={<AllCasinos />} />
          <Route path="/best-sweepstakes-casinos" element={<BestCasinos />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/responsible-play" element={<ResponsiblePlay />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

     <footer className="sr-footer">
  <div className="sr-footer-grid">
    <div className="sr-footer-brand">
      <h3>SweepsRanked</h3>
      <p>
        SweepsRanked helps users compare sweepstakes casinos by bonuses,
        ratings, redemption speed, payment options, and overall user experience.
      </p>
      <p>
        We do not operate any casino. Always review official terms,
        availability, and redemption rules before signing up.
      </p>
    </div>

    <div className="sr-footer-column">
      <h4>Resources</h4>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/terms">Terms</a>
      <a href="/disclaimer">Disclaimer</a>
    </div>

    <div className="sr-footer-column">
      <h4>Popular Pages</h4>
      <a href="/best-sweepstakes-casinos">Best Casinos</a>
      <a href="/all-casinos">All Casinos</a>
      <a href="/new-casinos">New Casinos</a>
      <a href="/fast-redemption">Fast Redemption</a>
    </div>

    <div className="sr-footer-column">
      <h4>Responsible Play</h4>
      <p>
        Sweepstakes casinos are intended for adults only. Play responsibly and
        never spend more than you can afford.
      </p>
      <a href="/responsible-play">Responsible Play Resources</a>
    </div>
  </div>

  <div className="sr-footer-bottom">
    <p>© {new Date().getFullYear()} SweepsRanked. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}

export default App;