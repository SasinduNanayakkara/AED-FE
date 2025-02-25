import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../Pages/Home";
import LogIn from "../Pages/Common/LogIn";
import ExTravelers from "../Pages/ExTravelers";
import ViewTraveler from "../Pages/ViewTraveler";
import BOExTravelers from "../Pages/BOExTravelers";
import CreateTravel from "../Pages/CreateTravel";
import CreateTrain from "../Pages/CreateTrain";
import TrainList from "../Pages/TrainList";
import UpdateTravel from "../Pages/UpdateTravel"
import UpdateTrain from "../Pages/UpdateTrain"
import CreateReservation from "../Pages/CreateReservation";
import Traveres from "../Pages/Travelers";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/extravelers" element={<ExTravelers/>}/>
        <Route path="/viewtraveler" element={<ViewTraveler />} />
        <Route path="/boextravelers" element={<Traveres/>}/>
        <Route path="/createtravel" element={<CreateTravel/>}/>
        <Route path="/createtrain" element={<CreateTrain/>}/>
        <Route path="/trainlist" element={<TrainList/>}/>
        <Route path="/updatetravel" element={<UpdateTravel/>}/>
        <Route path="/updatetrain" element={<UpdateTrain/>}/>
        <Route path="/createreservation" element={<CreateReservation/>}/>
      </Routes>
    </Router>
  );
};

export default PageRoutes;
