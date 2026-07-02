import { Link } from "react-router";
import "./index.css";

function Subscribe() {
  return (
    <>
      <h2>Subscription options coming soon</h2>
      <div className="col-12 col-lg-6 mb-2">
        <Link to="/" className="btn continue-btn w-100 mt-2">
          Continue reading
        </Link>
      </div>
    </>
  );
}

export default Subscribe;
