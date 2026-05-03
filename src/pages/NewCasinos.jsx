import { casinos } from "../data/casinos";

function NewCasinos() {
  const newCasinos = [...casinos]
    .filter(
      (casino) =>
        casino.newStatus === "brand-new" || casino.newStatus === "recent"
    )
    .sort((a, b) => new Date(b.launchDate) - new Date(a.launchDate));

  return (
    <section className="sr-section">
      <div className="sr-section-heading">
        <h1>New Sweepstakes Casinos</h1>
        <p>Recently launched and newly emerging sweepstakes casinos.</p>
      </div>

      <div className="sr-casino-grid">
        {newCasinos.map((casino, index) => (
          <article key={casino.id} className="sr-casino-card">
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

export default NewCasinos;