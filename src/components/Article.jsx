import { Card, Col, Badge } from "react-bootstrap";
import articleFallbackImg from "../assets/article-fallback-image.jpg";

function Article({ article }) {
  return (
    <Col className="my-1">
      <Card style={{ width: "18rem" }} className="m-auto">
        <Card.Img
          variant="top"
          src={article.image_url || articleFallbackImg}
          style={{ height: "200px" }}
        />
        <Card.Body>
          <Card.Title style={{ minHeight: "72px" }}>
            {article.title && article.title.length > 70
              ? `${article.title.slice(0, 70)}...`
              : article.title}
          </Card.Title>
          <Card.Text style={{ minHeight: "120px" }}>
            {article.description && article.description.length > 160
              ? `${article.description.slice(0, 160)}...`
              : article.description ||
                `No description exists. To read this article, click 'Read more'`}
          </Card.Text>
          <a className="btn btn-dark" href={article.link} target="_blank">
            Read more
          </a>
          <div className="mt-1">
            {article.category.map((category, index) => (
              <Badge pill bg="light" text="dark" key={index}>
                {category.toUpperCase()}
              </Badge>
            ))}
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">{article.source_name}</Card.Footer>
      </Card>
    </Col>
  );
}

export default Article;
