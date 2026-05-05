import { useParams } from "react-router-dom";
import { casinos } from "../data/casinos";

function CasinoReview() {
  const { id } = useParams();
  const casino = casinos.find((c) => c.id === id);

  if (!casino) {
    return <div className="sr-section">Casino not found</div>;
  }

  return (
    <div className="sr-review-page">
      <section className="sr-review-hero-v2">
        <div className="sr-review-brand-panel">
          <div className="sr-mobile-rating-badge">★ {casino.rating}</div>

          <img src={casino.logo} alt={casino.name} className="sr-review-logo" />

          <div className="sr-review-score">
            <strong>{casino.rating}</strong>
            <span>Overall Rating</span>
          </div>
        </div>

        <div className="sr-review-copy">
          <p className="sr-eyebrow">Casino Review</p>
          <h1>{casino.name} Review</h1>

          <p>
            {casino.overview ||
              "This sweepstakes casino offers a mix of bonuses, gameplay, and features depending on your preferences."}
          </p>

          <div className="sr-quick-info">
            <span>
              <strong>Min Purchase</strong>
              {casino.minPurchase || "N/A"}
            </span>

            <span>
              <strong>Min Redemption</strong>
              {casino.minRedemption || "N/A"}
            </span>

            <span>
              <strong>Payments</strong>
              {casino.payments?.join(", ") || "N/A"}
            </span>
          </div>
        </div>

        <div className="sr-review-cta-card">
          <span className="sr-label">{casino.label}</span>
          <h2>{casino.bonus}</h2>
          <p>Check the latest offer and terms before signing up.</p>

          <a
            href={casino.link}
            target="_blank"
            rel="noopener noreferrer"
            className="sr-claim-btn"
          >
            Claim Bonus
          </a>

          <small>T&Cs apply</small>
        </div>
      </section>

      <div className="sr-review-grid">
        <div className="sr-review-main">
          <div className="sr-review-box">
            <h2>Overview</h2>
            <p>
              {casino.overview ||
                "This casino provides a range of features and gameplay options. Details may vary based on availability and promotions."}
            </p>
          </div>

          <div className="sr-review-box">
            <h2>Bonus & Promotions</h2>
            <p>
              {casino.bonusBreakdown ||
                "Bonus availability can vary. Always check the official site for the most current promotions and eligibility requirements."}
            </p>
          </div>

          <div className="sr-review-box">
            <h2>Is {casino.name} Legit?</h2>
            <p>
              {casino.legitSummary ||
                "This platform operates within the sweepstakes model. Always review terms, eligibility, and local availability before participating."}
            </p>
          </div>

          <div className="sr-review-box">
            <h2>Pros & Cons</h2>

            <div className="sr-pros-cons">
              <div>
                <h3>Pros</h3>
                <ul>
                  {casino.pros?.map((pro, i) => (
                    <li key={i}>
                      <span className="sr-pro">✓</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3>Cons</h3>
                <ul>
                  {casino.cons?.map((con, i) => (
                    <li key={i}>
                      <span className="sr-con">✕</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="sr-review-box">
            <h2>Final Verdict</h2>
            <p>
              {casino.finalVerdict ||
                "Overall, this casino may be a good option depending on your preferences. Consider bonuses, redemption speed, and usability before signing up."}
            </p>
          </div>
        </div>

        <div className="sr-review-sidebar">
          <div className="sr-review-box">
            <h3>Quick Info</h3>
            <p>
              <strong>Rating:</strong> {casino.rating}
            </p>
            <p>
              <strong>Trustpilot:</strong> {casino.trustpilotRating || "N/A"} (
              {casino.reviewCount || 0} reviews)
            </p>
            <p>
              <strong>Launch Year:</strong>{" "}
              {casino.launchDate
                ? new Date(casino.launchDate).getFullYear()
                : "N/A"}
            </p>
            <p>
              <strong>Redemption Score:</strong>{" "}
              {casino.redemptionScore || "N/A"}/10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasinoReview;