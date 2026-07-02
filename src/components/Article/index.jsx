import { Card, Col } from "react-bootstrap";
import articleFallbackImg from "../../assets/article-fallback-image.jpg";
import "./index.css";

function Article({ article, xs = 12, sm = 6, lg = 3 }) {
  return (
    <Col xs={xs} sm={sm} lg={lg} className="my-2">
      {" "}
      <Card className="w-100 card article-card">
        {" "}
        <Card.Img
          variant="top"
          src={article.image_url || articleFallbackImg}
          onError={(e) => {
            e.currentTarget.src = articleFallbackImg;
          }}
          style={{
            height: "250px",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Card.Body>
          <Card.Title style={{ minHeight: "72px" }}>
            {article.title && article.title.length > 70
              ? `${article.title.slice(0, 60)}...`
              : article.title}
          </Card.Title>
          <Card.Text style={{ minHeight: "120px" }}>
            {article.description && article.description.length > 160
              ? `${article.description.slice(0, 160)}...`
              : article.description ||
                `No description exists. To read this article, click 'Read more'`}
          </Card.Text>
          <a
            className="btn article-btn w-100"
            href={article.link || article.url}
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Article;
