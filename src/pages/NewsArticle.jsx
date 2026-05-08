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

      <div className="sr-article-content">
        {article.sections.map((section, index) => (
          <section key={index}>
            <h2>{section.heading}</h2>

            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
          </section>
        ))}

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