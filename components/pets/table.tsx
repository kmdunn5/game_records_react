import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Pet } from '../../models/pet';
import { baseUrl } from '@/baseUrl'
import PetsRow from './tableRow'
import { pets as seedPets } from '@/seeds';

const PetsTable:React.FC = () => {
  // const [pets, setPets] = useState<Pets[]>(seedPets)
  const [pets, setPets] = useState<Pet[]>([])
  
  const loadPets = () => {
    axios
      .get(`${baseUrl}pets`)
      .then((res) => {
        console.log(res.data)
        setPets(res.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadPets()
  }, [pets])
  
  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Species</th>
          <th>Gender</th>
          <th>Age</th>
        </tr>
      </thead>
      {pets ? 
        pets.map((pet) => {
          return (
            <tbody key={pet.id}>
              <PetsRow key={pet.id} id={pet.id} petJson={pet}/>
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

export default PetsTable