import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/PlayersCards";
import PlayersCards from "./components/PlayersCards";
import { playerForm } from "./api";

const App: React.FC = () => {
  return (
    <div className="App">
      <PlayersCards />
    </div>
  );
};

export default App;
