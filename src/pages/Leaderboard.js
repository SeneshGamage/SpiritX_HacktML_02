import React, { useEffect, useState } from "react";
import { fetchLeaderboard } from "../services/api";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const getLeaders = async () => {
      const data = await fetchLeaderboard();
      setLeaders(data);
    };
    getLeaders();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map((leader, index) => (
          <li key={index}>
            {leader.username} - {leader.totalPoints} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
