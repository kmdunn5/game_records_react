import React, { useEffect, useState } from 'react'
import axios from 'axios';
import update from "immutability-helper";

interface PetsShowProps {
  id?: string
}

const PetsShow:React.FC<PetsShowProps> = (props) => {
  const [pet, setPet] = useState<any>('')

  const loadPet = () => {
    axios
    .get(`http://localhost:3001/api/v1/pet/${props.id}`)
      .then((res) => {
        console.log(res.data)
        setPet(res.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadPet()
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
      <p>Got a pet, baby!</p>
      {pet ? 
        <p>{pet[0].name}</p>
      : <p>Loading</p>
      }
    </div>
  )
}

export default PetsShow