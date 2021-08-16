import React, { useState } from "react";
import "./App.css";
import "./components/PlayersCards";
import PlayersCards from "./components/PlayersCards";
import { playerForm } from "./api";

const { playersData } = require("./playersdata.json");

const App: React.FC = () => {
  const [players, setPlayers] = useState<playerForm[]>(playersData);

  return (
    <div className="App">
      <PlayersCards players={players} />
    </div>
  );
};

export default App;
