import { useState } from "react";
import { casinos } from "../data/casinos";

function AllCasinos() {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("az");
  const [search, setSearch] = useState("");

  const filteredCasinos = [...casinos]
    .filter((casino) => {
      const matchesSearch = casino.name
        .toLowerCase()
        .includes(search.toLowerCase());

      if (!matchesSearch) return false;

      if (filter === "top") return casino.isTop;
      if (filter === "new") {
        return casino.newStatus === "brand-new" || casino.newStatus === "recent";
      }
      if (filter === "fast") return casino.fastPayout;

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "az") return a.name.localeCompare(b.name);
      if (sortBy === "rating") return b.trustpilotRating - a.trustpilotRating;
      if (sortBy === "redemption") return b.redemptionScore - a.redemptionScore;
      if (sortBy === "newest") return new Date(b.launchDate) - new Date(a.launchDate);

      return 0;
    });

  return (
    <section className="sr-section">
      <div className="sr-section-heading">
        <h1>All Sweepstakes Casinos</h1>
        <p>
          Browse, sort, and compare every sweepstakes casino listed on
          SweepsRanked.
        </p>
      </div>

      <div className="sr-casino-controls">
        <input
          type="text"
          placeholder="Search casinos..."
          className="sr-search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="sr-sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="az">Sort: A-Z</option>
          <option value="rating">Sort: Highest Rated</option>
          <option value="redemption">Sort: Fastest Redemption</option>
          <option value="newest">Sort: Newest</option>
        </select>
      </div>

      <div className="sr-filter-row">
        <button
          className={filter === "all" ? "sr-filter-btn active" : "sr-filter-btn"}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "top" ? "sr-filter-btn active" : "sr-filter-btn"}
          onClick={() => setFilter("top")}
        >
          Top Rated
        </button>

        <button
          className={filter === "new" ? "sr-filter-btn active" : "sr-filter-btn"}
          onClick={() => setFilter("new")}
        >
          New
        </button>

        <button
          className={filter === "fast" ? "sr-filter-btn active" : "sr-filter-btn"}
          onClick={() => setFilter("fast")}
        >
          Fast Redemption
        </button>
      </div>
        <p className="sr-results-count">
            Showing {filteredCasinos.length} Sweeps Casinos
        </p>
        {filteredCasinos.length === 0 ? (
            <p className="sr-empty">No casinos found</p>
            ) : (
            <div className="sr-casino-grid">
            </div>
            )}
            
      <div className="sr-casino-grid">
        {filteredCasinos.map((casino, index) => (
          <article
                key={casino.id}
                className="sr-casino-card"
                onClick={() => (window.location.href = `/casino/${casino.id}`)}
                >
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
                onClick={(e) => e.stopPropagation()}
                >
                Claim Bonus
                </a>

              <a
                href={`/casino/${casino.id}`}
                className="sr-review-link"
                onClick={(e) => e.stopPropagation()}
                >
                Read Review
                </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AllCasinos;