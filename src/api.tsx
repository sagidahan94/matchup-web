export interface playerForm {
  id: number;
  name: string;
  position: string;
  abilities: string[];
  pic: string;
  selected: boolean;
}

export interface playersForms {
  players: playerForm[];
}
