import "./App.css";
import { Container } from "react-bootstrap";
import AppNavbar from "./components/Navbar/";
import { Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import MyNews from "./pages/MyNews";
import Subscribe from "./pages/Subscribe";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <AppNavbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/my-news" element={<MyNews />} />
          <Route path="/search" element={<Search />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
