export interface Game {
  id: number
  name: string
  description?: string
  rating?: string
  min_players?: number
  max_players?: number
  category?: string
}

export const playerCount = (game:Game) => `${game.min_players} - ${game.max_players}`