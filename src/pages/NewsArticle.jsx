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
        <h2>{article.title}</h2>

        <div className="sr-article-timeline">
          {article.sections.map((section, index) => (
            <section className="sr-article-timeline-item" key={index}>
              <div className="sr-article-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="sr-article-section-content">
                <h3>{section.heading}</h3>

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="sr-article-conclusion">
          <div className="sr-article-icon">★</div>

          <div>
            <h2>Final Takeaway</h2>
            <p>
              Sweepstakes casinos can be fun and easy to explore, but users
              should always compare platforms carefully, read the official terms,
              understand redemption rules, and play responsibly.
            </p>
          </div>
        </div>

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