import { useState, useEffect } from "react";
import { Form, Row } from "react-bootstrap";
import Article from "../../components/Article";

const API_KEY = "API_KEY";

function MyNews() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("ca");

  useEffect(() => {
    async function fetchMyNews() {
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=${country}&language=en`,
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

        setArticles(uniqueArticles);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMyNews();
  }, [country]);

  return (
    <>
      <div className="page-intro text-center">
        <h1 className="display-3">My News</h1>
        <p className="display-6">
          Choose a country to see news stories tailored to your location.
        </p>
      </div>

      <div className="mb-4">
        <Form.Select
          size="lg"
          style={{ width: "100%", cursor: "pointer" }}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="au">Australia</option>
          <option value="ca">Canada</option>
          <option value="fr">France</option>
          <option value="de">Germany</option>
          <option value="in">India</option>
          <option value="ae">United Arab Emirates</option>
          <option value="gb">United Kingdom</option>
          <option value="us">United States</option>
        </Form.Select>
      </div>

      <Row>
        {articles.slice(0, 8).map((article, index) => (
          <Article
            article={article}
            key={article.article_id || article.link || index}
          />
        ))}
      </Row>
    </>
  );
}

export default MyNews;
