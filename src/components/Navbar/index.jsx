import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { NavLink } from "react-router";
import "./index.css";

function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            alt="coffee cup logo"
            src="/coffee-cup.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Morning Brief
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/latest-news"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaRegNewspaper /> Latest News
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={NavLink}
              to="/subscribe"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <IoMdPersonAdd /> Subscribe
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <CiLogin /> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
