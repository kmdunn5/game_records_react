import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Game, playerCount} from '../../models/game'
import Loading from '@/components/loading'
import { baseUrl } from '@/baseUrl'

type GameRowProps = {
  id?: number
  gameJson: Game
}

const GamesRow:React.FC<GameRowProps> = ({id, gameJson}) => {
  const [game, setGame] = useState<Game>(gameJson)

  // useEffect(() => {
  //   axios.get(`${baseUrl}games/${id}`).then((res) => {
  //     console.log(res.data)
  //     setGame(res.data);
  //   })
  //   .catch((error) => console.log(error));
  // })

  const truncatedDesc = (desc: string | undefined) => {
    if (desc === undefined) {
      return "No Description Added"
    } else {
      return "Figure out how to range!"
      // let split = desc.split("")
      // split[0]
    }
  }

  return (
    <tr>
      <td>{game.name}</td>
      <td>{truncatedDesc(game.description)}</td>
      <td>{game.rating ? game.rating : "Not Rated"}</td>
      <td>{game.min_players ? playerCount(game) : "No Player count reported"}</td>
      <td>{game.category ? game.category : ""}</td>
      {/* {game ?
        <>
          <td>{game.name}</td>
          <td>{truncatedDesc(game.description)}</td>
          <td>{game.rating ? game.rating : "Not Rated"}</td>
        </>
        :
        <Loading/>
      } */}
    </tr>
  )
}

export default GamesRow