import React, { useState, useEffect } from "react";
import { fetchPlayers } from "../services/api";

const SelectTeam = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [budget, setBudget] = useState(9000000);

  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    getPlayers();
  }, []);

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.length < 11 && budget - player.value >= 0) {
      setSelectedPlayers([...selectedPlayers, player]);
      setBudget(budget - player.value);
    }
  };

  return (
    <div>
      <h2>Select Your Team</h2>
      <h3>Budget: Rs.{budget.toLocaleString()}</h3>
      <div className="players-list">
        {players.map((player) => (
          <div key={player._id} onClick={() => handleSelectPlayer(player)}>
            <h3>{player.name}</h3>
            <p>Value: Rs.{player.value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectTeam;
