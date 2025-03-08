import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Players from "./pages/Players";
import SelectTeam from "./pages/SelectTeam";
// import TeamView from "./pages/TeamView";
import Leaderboard from "./pages/Leaderboard";
// import Budget from "./pages/Budget";
// import Auth from "./pages/Auth";
import Chatbot from "./components/Chatbot";
import PlayerCard from "./components/PlayCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/select-team" element={<SelectTeam />} />
        {/* <Route path="/team" element={<TeamView />} /> */}
        <Route path="/leaderboard" element={<Leaderboard />} />
        {/* <Route path="/budget" element={<Budget />} /> */}
        {/* <Route path="/auth" element={<Auth />} /> */}
        <Route path="/player-card" element={<PlayerCard />} />
      </Routes>
      <Chatbot />
    </Router>
  );
}
export default App;
