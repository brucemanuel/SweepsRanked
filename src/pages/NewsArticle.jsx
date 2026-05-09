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
      <header className="sr-article-hero">
        <span className="sr-news-category">{article.category}</span>

        <h1>{article.title}</h1>

        <p>{article.description}</p>

        {article.publishedDate && (
          <p className="sr-article-date">
            Updated {new Date(article.publishedDate).toLocaleDateString()}
          </p>
        )}
      </header>

      <div className="sr-article-shell">
        <div className="sr-article-intro-card">
          <h2>Quick Overview</h2>
          <p>
            This guide breaks down the basics in plain language so you can
            understand how sweepstakes casinos work before choosing where to
            play.
          </p>
        </div>

        <div className="sr-article-sections">
          {article.sections.map((section, index) => (
            <section
              key={index}
              className={
                index % 2 === 0
                  ? "sr-article-section"
                  : "sr-article-section reverse"
              }
            >
              <div className="sr-article-section-heading">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.heading}</h2>
              </div>

              <div className="sr-article-section-body">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="sr-article-cta">
          <h2>Compare Sweepstakes Casinos</h2>
          <p>
            Ready to compare platforms? View our ranked list of sweepstakes
            casinos and read full reviews before signing up.
          </p>

          <a href="/best-sweepstakes-casinos" className="sr-claim-btn">
            View Best Casinos
          </a>
        </div>
      </div>
    </article>
  );
}

export default NewsArticle;