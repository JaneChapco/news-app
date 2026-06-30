import { Link } from "react-router";
import "./index.css";

function Login() {
  return (
    <>
      <h2>Account options coming soon</h2>
      <div className="col-12 col-lg-6 mb-2">
        <Link to="/my-news" className="btn w-100 mt-2">
          Continue reading
        </Link>
      </div>
    </>
  );
}

export default Login;
