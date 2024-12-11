import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import PastEvents from "./pages/PastEvents";
import EventDetail from "./pages/EventDetail";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/global.css"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/past-events/:eventId" element={<EventDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
