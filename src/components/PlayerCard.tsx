import React, { useState } from "react";
import "./PlayerCard.css";
import { playerForm } from "../api";

const PlayerCard: React.FC<playerForm> = (props) => {
  const [playerData, setPlayerData] = useState<playerForm>(props);
  const [selected, setSelected] = useState<boolean>(props.selected);

  const isSelected = () => {
    let cardStyle = selected ? "PlayerCard" : "PlayerCard-selected";
    return cardStyle;
  };

  return (
    <div className={isSelected()} onClick={() => setSelected(!selected)}>
      <div className="card body">
        <img className="pic" src={playerData.pic}></img>
        <h2 className="name">{playerData.name}</h2>
        <h2 className="position">{playerData.position}</h2>
        <h2 className="overall">{playerData.abilities[0]}</h2>
      </div>
    </div>
  );
};

export default PlayerCard;
