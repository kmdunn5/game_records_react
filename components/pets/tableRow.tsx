import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Pet } from '../../models/pet'
import Loading from '@/components/loading'
import { baseUrl } from '@/baseUrl'

type PetRowProps = {
  id?: number
  petJson: Pet
}

const PetsRow:React.FC<PetRowProps> = ({id, petJson}) => {
  const [pet, setPet] = useState<Pet>(petJson)

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
      <td>{pet.name}</td>
      <td>{pet.species}</td>
      <td>{pet.gender}</td>
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

export default PetsRow