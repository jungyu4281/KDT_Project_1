import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MatchPage from "./Pages/MatchPage";
import MatchResult from "./Pages/MatchResult";
import TeamMatchResult from "./Pages/TeamMatch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/match/1" element={<MatchPage />} />
        <Route path="/match/2" element={<MatchResult />} />
        <Route path="/match/3" element={<TeamMatchResult />} />
        {/* <Route path="/match/3" element={<MatchPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;