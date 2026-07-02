import { useState } from "react";
import { InputGroup, Form, Row, Button } from "react-bootstrap";
import Article from "../../components/Article";
import { CiSearch } from "react-icons/ci";
import mockArticles from "../../data/mockArticles";
import "./index.css";

function Search() {
  const [articles, setArticles] = useState(mockArticles);
  const [query, setQuery] = useState("");

  function searchArticles() {
    const filteredArticles = mockArticles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase()),
    );

    setArticles(filteredArticles);
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
          {articles.slice(0, 8).map((article) => (
            <Article article={article} key={article.article_id} />
          ))}
        </Row>
      )}
    </div>
  );
}

export default Search;
