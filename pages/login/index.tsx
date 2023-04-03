// handleSubmit(e) {
//   e.preventDefault()
//   this.setState({noUser: false})

//   Axios.post(baseUrl + api + 'caretakers/login',
//       {
//           username: this.state.username,
//           password: this.state.password
//       },
//       {withCredentials: true}
//   ).then(res => {if (res.data.status.code === 200) {
//       this.props.setUser()
//       this.props.history.push('/user')
//   }
//   else {
//       this.setState({
//           noUser: true
//       })
//   }
//   })
// }