import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Existing Home + background design
import Home from "./Home";
import RoundOne from "./components/roundDesigns/RoundOne";
import RoundTwo from "./components/roundDesigns/RoundTwo";
import RoundThree from "./components/roundDesigns/RoundThree";
import RoundFour from "./components/roundDesigns/RoundFour";
import RoundFive from "./components/roundDesigns/RoundFive";

// New pages
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page with background circles */}
        <Route
          path="/"
          element={
            <div className="w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-black relative">
              <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
                <Home />
              </div>
              <div className="w-full h-full absolute top-0 left-0 z-10">
                <RoundOne />
                <RoundTwo />
                <RoundThree />
                <RoundFour />
                <RoundFive />
              </div>
            </div>
          }
        />

        {/* New Pages */}
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;