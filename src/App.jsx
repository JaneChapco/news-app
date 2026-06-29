import "./App.css";
import { Container } from "react-bootstrap";
import AppNavbar from "./components/Navbar/";
import { Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import LatestNews from "./pages/LatestNews";

function App() {
  return (
    <>
      <AppNavbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/latest-news" element={<LatestNews />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
