import { news } from "../data/news";

function News() {
  return (
    <section className="sr-news-page">
      <div className="sr-news-hero">
        <p className="sr-eyebrow">News & Insights</p>

        <h1>Sweepstakes Casino News</h1>

        <p>
          Explore sweepstakes casino news, rankings, comparisons, and updates
          covering bonuses, payouts, and new platforms.
        </p>
      </div>

      <div className="sr-news-grid">
        {news.map((article) => (
          <article
            key={article.id}
            className="sr-news-card"
            onClick={() => (window.location.href = `/news/${article.id}`)}
          >
            <div
              className="sr-news-image-bg"
              style={{ backgroundImage: `url(${article.image})` }}
            >
              <div className="sr-news-overlay"></div>

              <div className="sr-news-content">
                <span className="sr-news-category">{article.category}</span>

                <h2>{article.title}</h2>

                <p>{article.description}</p>

                <span className="sr-news-read">Read Article →</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default News;