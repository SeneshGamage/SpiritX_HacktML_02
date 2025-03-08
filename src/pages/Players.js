import React, { useEffect, useState } from "react";
import { fetchPlayers } from "../services/api";
import PlayerCard from "../components/PlayCard";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    getPlayers();
  }, []);

  return (
    <div>
      <h2>Available Players</h2>
      <div className="players-list">
        {players.map((player) => (
          <PlayerCard key={player._id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Players;
