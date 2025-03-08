import React from "react";

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <p>Role: {player.role}</p>
      <p>Points: {player.points}</p>
      <p>Value: Rs.{player.value.toLocaleString()}</p>
    </div>
  );
};

export default PlayerCard;
