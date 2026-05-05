import { casinos } from "../data/casinos";

function BestCasinos() {
  const bestCasinos = [...casinos]
    .filter((casino) => casino.isTop)
    .sort((a, b) => b.trustpilotRating - a.trustpilotRating)
    .slice(0, 5);

  const featuredCasino = bestCasinos[0];
  const remainingCasinos = bestCasinos.slice(1);

  return (
    <section className="sr-best-page">
      <div className="sr-best-hero">
        <p className="sr-eyebrow">2026 Guide</p>
        <h1>Best Sweepstakes Casinos</h1>
        <p>
          A ranked guide to the top sweepstakes casinos based on ratings,
          bonuses, redemption experience, and overall ease of use.
        </p>
      </div>

      {featuredCasino && (
        <div className="sr-best-featured">
          <div>
            <span className="sr-best-badge">#1 Overall Pick</span>
            <h2>{featuredCasino.name}</h2>
            <p>{featuredCasino.overview}</p>

            <div className="sr-best-actions">
              <a
                href={featuredCasino.link}
                target="_blank"
                rel="noopener noreferrer"
                className="sr-claim-btn"
              >
                Claim Bonus
              </a>

              <a
                href={`/casino/${featuredCasino.id}`}
                className="sr-review-link"
              >
                Read Full Review
              </a>
            </div>
          </div>

          <img src={featuredCasino.logo} alt={featuredCasino.name} />
        </div>
      )}

      <div className="sr-best-layout">
        <div className="sr-best-main">
          <h2>Ranked List</h2>

          {remainingCasinos.map((casino, index) => (
            <article
              className="sr-best-row"
              key={casino.id}
              onClick={() => (window.location.href = `/casino/${casino.id}`)}
            >
              <span className="sr-best-rank">#{index + 2}</span>

              <img src={casino.logo} alt={casino.name} />

              <div className="sr-best-info">
                <h3>{casino.name}</h3>
                <p>{casino.bestFor}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="sr-best-sidebar">
          <div className="sr-review-box">
            <h3>Best For Beginners</h3>
            <p>Chumba Casino is a strong starting point for newer players.</p>
          </div>

          <div className="sr-review-box">
            <h3>Fastest Redemption</h3>
            <p>Stake.us stands out for a faster, modern experience.</p>
          </div>

          <div className="sr-review-box">
            <h3>Best Bonuses</h3>
            <p>Pulsz is a good option for users focused on promotions.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default BestCasinos;