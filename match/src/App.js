import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MatchPage from "./Pages/MatchPage"
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/match/:matchId" element={<MatchPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
