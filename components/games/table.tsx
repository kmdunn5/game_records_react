import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Game from '@/models/game'
import { baseUrl } from '@/baseUrl'
import GamesRow from './tableRow'

const GamesTable:React.FC = () => {
  const [games, setGames] = useState<Game[]>()
  
  const loadGames = () => {
    axios
      .get(`${baseUrl}games`)
      .then((res) => {
        console.log(res.data)
        setGames(res.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadGames()
  }, [])
  
  return(
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Rating</th>
      </tr>
      {games ? 
        games.map((game) => {
          return (
            <tbody>
              <GamesRow key={game.id} id={game.id} gameJson={game}/>
            </tbody>
          )
        })
      :
        <tbody>
          <tr>
            <h3>Nothing for ya</h3>
          </tr>
        </tbody>
      }
    </table>
  )
}

export default GamesTable