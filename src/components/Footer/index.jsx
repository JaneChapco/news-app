import "./index.css";

function Footer() {
  return (
    <>
      <footer className="text-center footer py-3">
        <p className="mb-2 small text-muted">
          © 2026 Morning Brief. All rights reserved.
        </p>
        <ul className="list-inline mb-0 ps-0">
          <li className="list-inline-item">
            <a href="#" className="text-decoration-none text-muted small">
              Privacy
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-decoration-none text-muted small">
              Terms
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
