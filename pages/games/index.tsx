import React from 'react'
import GamesTable from '@/components/games/table'

const GamesIndex:React.FC = () => {
  return (
    <div>
      <h3>Look at all the games!</h3>
      <GamesTable />
    </div>
  )
}

export default GamesIndex