import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../Pages/Home";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
