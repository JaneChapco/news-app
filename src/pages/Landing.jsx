import { useState, useEffect } from "react";
import Article from "../components/Article";
const API_KEY = API_KEY;
import { Link } from "react-router";

function Landing() {
  const [techArticles, setTechArticles] = useState([]);
  const [sportsArticles, setSportsArticles] = useState([]);
  const [businessArticles, setBusinessArticles] = useState([]);

  async function fetchLatestNews(category, stateHandler) {
    try {
      const API_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&size=9&language=en&category=${category}`;
      const res = await fetch(API_URL);
      const jsonRes = await res.json();
      stateHandler(jsonRes.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchLatestNews("technology", setTechArticles);
    fetchLatestNews("sports", setSportsArticles);
    fetchLatestNews("business", setBusinessArticles);
  }, []);

  return (
    <>
      <div className="text-center">
        <h1 className="display-3">Welcome to your Morning Brief</h1>
        <Link to="/latest-news" className="btn btn-lg btn-dark">
          Read latest news
        </Link>
      </div>
      <div>
        <h5 className="display-6 mt-4">Technology</h5>
        <div className="d-flex" style={{ overflow: "scroll" }}>
          {techArticles.map((article) => (
            <div key={article.article_id} className="me-2">
              <Article article={article} />
            </div>
          ))}
        </div>
        <h5 className="display-6 mt-4">Sports</h5>
        <div className="d-flex" style={{ overflow: "scroll" }}>
          {sportsArticles.map((article) => (
            <div key={article.article_id} className="me-2">
              <Article article={article} />
            </div>
          ))}
        </div>
        <h5 className="display-6 mt-4">Business</h5>
        <div className="d-flex" style={{ overflow: "scroll" }}>
          {businessArticles.map((article) => (
            <div key={article.article_id} className="me-2">
              <Article article={article} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Landing;
