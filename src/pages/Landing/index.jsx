import { useState } from "react";
import { Link } from "react-router";
import { Row } from "react-bootstrap";
import Article from "../../components/Article";
import "./index.css";

const mockTopArticles = [
  {
    article_id: "mock-top-1",
    title: "Breaking Story Placeholder",
    description: "This is fake top story text for layout practice.",
    image_url: "https://placehold.co/600x400?text=Top+Story",
  },
  {
    article_id: "mock-top-2",
    title: "Breaking Story Placeholder",
    description: "This is fake top story text for layout practice.",
    image_url: "https://placehold.co/600x400?text=Top+Story",
  },
  {
    article_id: "mock-top-3",
    title: "Breaking Story Placeholder",
    description: "This is fake top story text for layout practice.",
    image_url: "https://placehold.co/600x400?text=Top+Story",
  },
  {
    article_id: "mock-top-4",
    title: "Breaking Story Placeholder",
    description: "This is fake top story text for layout practice.",
    image_url: "https://placehold.co/600x400?text=Top+Story",
  },
];

const mockWorldArticles = [
  {
    article_id: "mock-world-1",
    title: "World News Placeholder",
    description: "This is fake world news text for layout practice.",
    image_url: "https://placehold.co/600x400?text=World",
  },
  {
    article_id: "mock-world-2",
    title: "Another World Story",
    description: "More fake world news for testing your layout.",
    image_url: "https://placehold.co/600x400?text=World+News",
  },
];

const mockWeatherArticles = [
  {
    article_id: "mock-weather-1",
    title: "Weather Update Placeholder",
    description: "This is fake weather text for layout practice.",
    image_url: "https://placehold.co/600x400?text=Weather",
  },
  {
    article_id: "mock-weather-2",
    title: "Weekend Forecast Placeholder",
    description: "More fake weather news for styling cards.",
    image_url: "https://placehold.co/600x400?text=Forecast",
  },
];

function Landing() {
  const [topArticles] = useState(mockTopArticles);
  const [worldArticles] = useState(mockWorldArticles);
  const [weatherArticles] = useState(mockWeatherArticles);

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
            {topArticles.map((article) => (
              <Article key={article.article_id} article={article} lg={12} />
            ))}
          </Row>
        </div>

        <div className="side-section">
          <h2>World</h2>

          <Row>
            {worldArticles.map((article) => (
              <Article
                key={article.article_id}
                article={article}
                sm={12}
                lg={12}
              />
            ))}
          </Row>
        </div>

        <div className="side-section">
          <h2>Weather</h2>

          <Row>
            {weatherArticles.map((article) => (
              <Article
                key={article.article_id}
                article={article}
                sm={12}
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
