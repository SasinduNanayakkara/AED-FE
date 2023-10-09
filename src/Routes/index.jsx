import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../Pages/Home";
import LogIn from "../Pages/Common/LogIn";
import ExTravelers from "../Pages/ExTravelers"

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/extravelers" element={<ExTravelers/>}/>
      </Routes>
    </Router>
  );
};

export default PageRoutes;
