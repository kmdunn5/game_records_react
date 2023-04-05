import {Game} from "./models/game";

export const games:Game[] = [
  {
    id: 1,
    name: "Return to Dark Tower",
    description: "Fantasy pandemic, but with a cool app",
    min_players: 1,
    max_players: 4,
    category: "co-op"

  },
  {
    id: 2,
    name: "Frosthaven",
    description: "D&D with cards",
    rating: "5",
    min_players: 2,
    max_players: 4,
    category: "co-op strategy"
  },
  {
    id: 3,
    name: "Warhammer",
    description: "War game with minis",
    rating: "40k",
    min_players: 1,
    max_players: 2,
    category: "wargame"
  },
]