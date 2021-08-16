import React from "react";
import PlayerCard from "./PlayerCard";
import { playersForms, playerForm } from "../api";

export const PlayersCards: React.FC<playersForms> = (props) => {
  return (
    <div>
      {props.players.map((player: playerForm) => (
        <PlayerCard {...player} />
      ))}{" "}
    </div>
  );
};

export default PlayersCards;
