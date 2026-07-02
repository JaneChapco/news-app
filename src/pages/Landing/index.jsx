import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Row } from "react-bootstrap";
import Article from "../../components/Article";
import "./index.css";

function Landing() {
  const [topArticles, setTopArticles] = useState([]);
  const [worldArticles, setWorldArticles] = useState([]);
  const [weatherArticles, setWeatherArticles] = useState([]);
  const API_KEY = "API_KEY";

  useEffect(() => {
    async function fetchLandingNews() {
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=ca&language=en`,
        );

        const data = await res.json();
        console.log(data);

        const cleanArticles = (data.results || []).filter(
          (article) => article.title && article.link,
        );

        const uniqueArticles = cleanArticles.filter(
          (article, index, self) =>
            index === self.findIndex((a) => a.title === article.title),
        );

        setTopArticles(uniqueArticles.slice(0, 4));
        setWorldArticles(uniqueArticles.slice(4, 6));
        setWeatherArticles(uniqueArticles.slice(6, 8));
      } catch (error) {
        console.log(error);
      }
    }

    fetchLandingNews();
  }, []);

  return (
    <>
      <section className="landing-hero text-center">
        <h1 className="display-3">Welcome to your Morning Brief</h1>
        <p className="display-6">
          A quick scan of the stories that matter today.
        </p>

        <Link to="/my-news" className="btn btn-lg">
          Read my news
        </Link>
      </section>

      <section className="news-grid mt-5">
        <div className="breaking-section">
          <h2>Top Stories</h2>

          <Row>
            {topArticles.map((article, index) => (
              <Article
                key={article.article_id || article.link || index}
                article={article}
                lg={12}
              />
            ))}
          </Row>
        </div>

        <div className="side-section">
          <h2>World</h2>

          <Row>
            {worldArticles.map((article, index) => (
              <Article
                key={article.article_id || article.link || index}
                article={article}
                lg={12}
              />
            ))}
          </Row>
        </div>

        <div className="side-section">
          <h2>Weather</h2>

          <Row>
            {weatherArticles.map((article, index) => (
              <Article
                key={article.article_id || article.link || index}
                article={article}
                lg={12}
              />
            ))}
          </Row>
        </div>
      </section>
    </>
  );
}

export default Landing;
