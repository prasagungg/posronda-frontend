import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";

function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default index;
