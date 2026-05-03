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
      {/* HERO */}
      <div className="sr-review-hero">
        <div className="sr-review-title-area">
          <img
            src={casino.logo}
            alt={casino.name}
            className="sr-review-logo"
          />

          <div className="sr-review-text">
            <h1>{casino.name} Review</h1>

            <p>
              {casino.overview ||
                "This sweepstakes casino offers a mix of bonuses, gameplay, and features depending on your preferences."}
            </p>
          </div>
          </div>

        <div className="sr-review-summary-card">
          <div className="sr-review-rating">
            <strong>{casino.rating}</strong>
            <span>Overall Rating</span>
          </div>

          <div>
            <strong>Best For:</strong>
            <p>{casino.bestFor}</p>
          </div>

          <div>
            <strong>Redemption:</strong>
            <p>{casino.redemption}</p>
          </div>

          <a
            href={casino.link}
            target="_blank"
            rel="noopener noreferrer"
            className="sr-claim-btn"
          >
            Claim Bonus
          </a>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="sr-review-grid">
        <div className="sr-review-main">
          {/* OVERVIEW */}
          <div className="sr-review-box">
            <h2>Overview</h2>
            <p>
              {casino.overview ||
                "This casino provides a range of features and gameplay options. Details may vary based on availability and promotions."}
            </p>
          </div>

          {/* BONUS */}
          <div className="sr-review-box">
            <h2>Bonus & Promotions</h2>
            <p>
              {casino.bonusBreakdown ||
                "Bonus availability can vary. Always check the official site for the most current promotions and eligibility requirements."}
            </p>
          </div>

          {/* LEGIT */}
          <div className="sr-review-box">
            <h2>Is {casino.name} Legit?</h2>
            <p>
              {casino.legitSummary ||
                "This platform operates within the sweepstakes model. Always review terms, eligibility, and local availability before participating."}
            </p>
          </div>

          {/* PROS / CONS */}
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

          {/* FINAL VERDICT */}
          <div className="sr-review-box">
            <h2>Final Verdict</h2>
            <p>
              {casino.finalVerdict ||
                "Overall, this casino may be a good option depending on your preferences. Consider bonuses, redemption speed, and usability before signing up."}
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="sr-review-sidebar">
          <div className="sr-review-box">
            <h3>Quick Info</h3>
            <p>
              <strong>Rating:</strong> {casino.rating}
            </p>
            <p>
              <strong>Trustpilot:</strong>{" "}
              {casino.trustpilotRating || "N/A"} ({casino.reviewCount || 0} reviews)
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