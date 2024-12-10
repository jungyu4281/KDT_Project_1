import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MatchPageDone from "./Pages/MatchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/match/1" element={<MatchPageDone />} />
        {/* <Route path="/match/2" element={<MatchPage />} /> */}
        {/* <Route path="/match/3" element={<MatchPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;