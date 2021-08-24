import { SetStateAction } from "react";

export interface playerForm {
  id: number;
  name: string;
  position: string;
  abilities: {
    PREFERRED: number;
    RB?: number | undefined;
    LB?: undefined;
    CB?: undefined;
    CM?: undefined;
    RM?: undefined;
    LM?: undefined;
    ST?: undefined;
  };
  pic: string;
  selected: boolean;
}

export interface playerProps {
  // key: number;
  player: playerForm;
  removePlayer: (playerId: number) => void;
  updateSeleced: (playerId: number) => void;
}

export interface playersForms {
  players: playerForm[];
}
