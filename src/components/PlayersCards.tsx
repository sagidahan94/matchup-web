import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { playersForms, playerForm } from "../api";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { isConstructorDeclaration } from "typescript";

const { playersData } = require("../playersdata.json");

const PlayersCards: React.FC = () => {
  const [players, setPlayers] = useState<playerForm[]>(playersData);
  const [listOfSelected, setlistOfSelected] = useState<playerForm[]>();

  useEffect(() => {
    console.log("useEffect ran");
  });

  const handleSubmit = () => {
    const selectedPlayers = [...players].filter((player) => player.selected);
    setlistOfSelected(selectedPlayers);
    console.log(listOfSelected);
  };

  const removePlayer = (playerId: number) => {
    const removeArr = [...players].filter((player) => playerId != player.id);
    setPlayers(removeArr);
  };

  const updateSeleced = (playerId: Number) => {
    let updatedplayer = players.map((player) => {
      if (player.id === playerId) {
        player.selected = !player.selected;
      }
      return player;
    });
    setPlayers(updatedplayer);
  };

  return (
    <>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        submit
      </Button>
      <Box p={5}>
        <Grid container spacing={5}>
          {players.map((player, i) => {
            return (
              <Grid key={player.id} item>
                <PlayerCard
                  player={player}
                  removePlayer={removePlayer}
                  updateSeleced={updateSeleced}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default PlayersCards;
