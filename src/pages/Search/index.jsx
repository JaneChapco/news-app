import { useState } from "react";
import { InputGroup, Form, Row, Button } from "react-bootstrap";
import Article from "../../components/Article";
import { CiSearch } from "react-icons/ci";
import "./index.css";

const API_KEY = "API_KEY";

function Search() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  async function searchArticles() {
    if (!query.trim()) return;

    try {
      const res = await fetch(
        `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${query}&language=en`,
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

  return (
    <div>
      <div className="page-intro text-center">
        <h1 className="display-3">Search News</h1>
        <p className="display-6">
          Enter a keyword or topic to search for news stories that interest you.
        </p>
      </div>

      <InputGroup className="mb-4" style={{ width: "100%" }}>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Search ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="dark" onClick={searchArticles}>
          <CiSearch />
        </Button>
      </InputGroup>

      {articles.length === 0 ? (
        <p className="text-center mt-4">
          No articles found. Try another search.
        </p>
      ) : (
        <Row>
          {articles.map((article, index) => (
            <Article
              article={article}
              key={article.article_id || article.link || index}
            />
          ))}
        </Row>
      )}
    </div>
  );
}

export default Search;
