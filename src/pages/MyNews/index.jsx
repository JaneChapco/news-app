import { useState, useEffect } from "react";
import { Form, Row } from "react-bootstrap";
import Article from "../../components/Article";
import mockArticles from "../../data/mockArticles";

function MyNews() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("");

  function fetchMyNews() {
    let filteredArticles = [...mockArticles];

    if (country) {
      filteredArticles = filteredArticles.filter((article) =>
        article.country.includes(country),
      );
    }
    setArticles(filteredArticles);
  }

  useEffect(() => {
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
      <div>
        <div className="mb-4">
          <Form.Select
            size="lg"
            style={{ width: "100%", cursor: "pointer" }}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select country</option>
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
          {articles.slice(0, 8).map((article) => (
            <Article article={article} key={article.article_id} />
          ))}
        </Row>
      </div>
    </>
  );
}

export default MyNews;
