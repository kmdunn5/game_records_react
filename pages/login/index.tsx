import React, { Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'
import {User} from '@/models/user'
import { baseUrl } from '@/baseUrl'
import { Button, Card, TextField } from '@mui/material'

interface LoginProps {
  user?: User
  setUser: (value: React.SetStateAction<User | undefined>) => void
}

const Login:React.FC<LoginProps> = (props) => {
  const [noUser, setNoUser] = useState<Boolean>(true)
  const [username, setUsername] = useState<Boolean>(true)
  const [password, setPassword] = useState<Boolean>(true)
  
  // const handleChange = () => {
  //   this.setState({
  //       [e.target.id]: e.target.value
  //   })
  // }
  
  const handleSubmit = () => {
    setNoUser(false)

    axios.post(baseUrl +  'caretakers/login',
        {
            username: username,
            password: password
        },
        {withCredentials: true}
    ).then(res => {if (res.data.status.code === 200) {
        props.setUser(res.data)
        // props.history.push('/user')
    }
    else {
        setNoUser(true)
    }
    })
  }
  
  return (
    <Card>
      {noUser ? (<p className='error'>Username and Password do not match</p>) : (null)}
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          className={classes.textField}
          label="Username"
          name="username"
          autoFocus
          defaultValue={username}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          className={classes.textField}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          defaultValue={username}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Log In
        </Button>
      </form>
    </Card>
  )
}


