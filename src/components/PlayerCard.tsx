import React, { useState } from "react";
import "./PlayerCard.css";
import { playerProps } from "../api";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const img = "https://100k-faces.glitch.me/random-image";

const useStyles = makeStyles({
  root_select: {
    backgroundColor: "yellow",
    height: 200,
    maxWidth: 170,
    padding: 10,
  },
  root: {
    backgroundColor: "white",
    height: 200,
    maxWidth: 170,
    padding: 10,
  },
  media: {
    height: 150,
    width: 150,
  },
});

const PlayerCard: React.FC<playerProps> = ({
  player,
  removePlayer,
  updateSeleced,
}) => {
  const classes = useStyles();
  return (
    <Card
      className={player.selected ? classes.root_select : classes.root}
      key={player.id}
      onClick={() => updateSeleced(player.id)}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="player image" />
        <CardContent>
          <Typography variant="body2" component="h2">
            {player.name}
          </Typography>
          <Typography>{player.abilities.PREFERRED}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PlayerCard;
