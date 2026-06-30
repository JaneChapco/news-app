import { useState, useEffect } from "react";
import { InputGroup, Form, Row, Button } from "react-bootstrap";
import Article from "../../components/Article";
import { CiSearch } from "react-icons/ci";

const API_KEY = API;

function MyNews() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("");
  const [query, setQuery] = useState("");

  async function fetchMyNews() {
    try {
      let addParams = "";

      if (country) {
        addParams += `&country=${country}`;
      }

      if (query) {
        addParams += `&q=${query}`;
      }

      const API_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&size=9&language=en${addParams}`;

      const res = await fetch(API_URL);
      const jsonRes = await res.json();

      setArticles(jsonRes.results || []);
    } catch (error) {
      console.log(error);
      setArticles([]);
    }
  }

  useEffect(() => {
    async function loadNews() {
      await fetchMyNews();
    }

    loadNews();
  }, [country]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-start mb-4">
        <InputGroup style={{ width: "500px" }}>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Search ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="dark" onClick={fetchMyNews}>
            <CiSearch />
          </Button>
        </InputGroup>

        <Form.Select
          size="lg"
          style={{ width: "250px", cursor: "pointer" }}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select country</option>
          <option value="us">United States</option>
          <option value="gb">United Kingdom</option>
          <option value="ae">United Arab Emirates</option>
          <option value="fr">France</option>
          <option value="de">Germany</option>
          <option value="in">India</option>
          <option value="au">Australia</option>
        </Form.Select>
      </div>

      <Row>
        {articles.map((article) => (
          <Article article={article} key={article.article_id} />
        ))}
      </Row>
    </div>
  );
}

export default MyNews;
