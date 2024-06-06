import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import BottomNavBar from "./components/BottomNavBar";
import Home from "./pages/home";
import Lessons from "./pages/Lessons";
import Environment from "./pages/Environment";
import More from "./pages/More";
import Account from "./pages/Account";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ConditionalTopNavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/environment" element={<Environment />} />
            <Route path="/more" element={<More />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
        <ConditionalBottomNavBar />
      </div>
    </Router>
  );
}

const ConditionalTopNavBar = () => {
  const location = useLocation();
  return location.pathname !== "/" ? <TopNavBar /> : null;
};

const ConditionalBottomNavBar = () => {
  const location = useLocation();
  return location.pathname !== "/" ? <BottomNavBar /> : null;
};

export default App;
