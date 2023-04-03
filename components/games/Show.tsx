import React, { useEffect, useState } from 'react'
import axios from 'axios';
import update from "immutability-helper";

interface GamesShowProps {
  id?: string
}

const GamesShow:React.FC<GamesShowProps> = () => {
  const [game, setGame] = useState<any>('')

  const loadGame = () => {
    axios
      .get("http://localhost:3001/api/v1/games")
      .then((res) => {
        console.log(res.data)
        setGame(res.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadGame()
  }, [])

  // newTdlist = (e) => {
  //   if (e.key === "Enter" && !(e.target.value === "")) {
  //     axios
  //       .post("/api/version1/tdlists", { tdlist: { title: e.target.value } })
  //       .then((res) => {
  //         const tdlists = update(this.state.tdlists, {
  //           $splice: [[0, 0, res.data]],
  //         });
  
  //         this.setState({
  //           tdlists: tdlists,
  //           inputValue: "",
  //         });
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  // modifyTdlist = (e, id) => {
  //   axios
  //     .put(`/api/version1/tdlists/${id}`, { tdlist: { done: e.target.checked } })
  //     .then((res) => {
  //       const tdlistIndex = this.state.tdlists.findIndex(
  //         (x) => x.id === res.data.id
  //       );
  //       const tdlists = update(this.state.tdlists, {
  //         [tdlistIndex]: { $set: res.data },
  //       });
  //       this.setState({
  //         tdlists: tdlists,
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // };

  // removeTdlist = (id) => {
  //   axios
  //     .delete(`/api/version1/tdlists/${id}`)
  //     .then((res) => {
  //       const tdlistIndex = this.state.tdlists.findIndex((x) => x.id === id);
  //       const tdlists = update(this.state.tdlists, {
  //         $splice: [[tdlistIndex, 1]],
  //       });
  //       this.setState({
  //         tdlists: tdlists,
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // };
  
  return (
    <div>
      <p>Got a game, baby!</p>
      {game ? 
        <p>{game[0].name}</p>
      : <p>Loading</p>
      }
    </div>
  )
}

export default GamesShow