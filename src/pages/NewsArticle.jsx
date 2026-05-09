import { useParams } from "react-router-dom";
import { news } from "../data/news";

function NewsArticle() {
  const { id } = useParams();
  const article = news.find((item) => item.id === id);

  if (!article) {
    return (
      <section className="sr-section">
        <h1>Article not found</h1>
      </section>
    );
  }

  return (
    <article className="sr-article-page">
      <div className="sr-article-breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        <a href="/news">News</a>
        <span>›</span>
        <span>{article.category}</span>
      </div>

      <header className="sr-article-hero-layout">
        <div className="sr-article-hero-copy">
          <span className="sr-news-category">{article.category}</span>

          <h1>{article.title}</h1>

          <p>{article.description}</p>

          {article.publishedDate && (
            <p className="sr-article-date">
              Updated {new Date(article.publishedDate).toLocaleDateString()}
            </p>
          )}
        </div>

        <div
          className="sr-article-hero-image"
          style={{ backgroundImage: `url(${article.image})` }}
        ></div>
      </header>

      <main className="sr-article-card">
        {article.intro && <p className="sr-article-intro">{article.intro}</p>}

        {article.sections?.map((section, index) => (
          <section className="sr-article-basic-section" key={index}>
            <h2>{section.heading}</h2>

            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
          </section>
        ))}

        {article.casinos && (
          <section className="sr-debit-list">
            <h2>Top Sweepstakes Casinos With Debit Card Redemptions</h2>

            <div className="sr-debit-cards">
              {article.casinos.map((casino, index) => (
                <article className="sr-debit-card" key={casino.name}>
                  <div className="sr-debit-rank">#{index + 1}</div>

                  <img
                    src={casino.logo}
                    alt={casino.name}
                    className="sr-debit-logo"
                  />

                  <div className="sr-debit-info">
                    <h3>{casino.name}</h3>
                    <p>{casino.description}</p>

                    <div className="sr-debit-stats">
                      <span>
                        <strong>Payout Speed</strong>
                        {casino.payoutSpeed}
                      </span>

                      <span>
                        <strong>Min Redemption</strong>
                        {casino.minRedemption}
                      </span>

                      <span>
                        <strong>Method</strong>
                        {casino.payoutMethod}
                      </span>
                    </div>
                  </div>

                  <a
                    href={casino.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sr-claim-btn sr-debit-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Casino
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}

        {article.faqs && (
          <section className="sr-article-faq">
            <h2>Frequently Asked Questions</h2>

            <div className="sr-faq-grid">
              {article.faqs.map((faq) => (
                <div className="sr-faq-card" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="sr-article-cta">
          <div className="sr-article-icon">🎁</div>

          <div>
            <h2>Ready to Compare Casinos?</h2>
            <p>
              View our ranked list of sweepstakes casinos and read full reviews
              before signing up.
            </p>

            <a href="/best-sweepstakes-casinos" className="sr-claim-btn">
              View Best Sweepstakes Casinos →
            </a>
          </div>
        </div>
      </main>
    </article>
  );
}

export default NewsArticle;