import React, { Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'
import {User} from '@/models/user'
import { baseUrl } from '@/baseUrl'

interface LoginProps {
  user?: User
  setUser: (value: React.SetStateAction<User | undefined>) => void
}

const Login:React.FC<LoginProps> = (props) => {
  const [noUser, setNoUser] = useState<Boolean>(true)
  const [username, setUsername] = useState<Boolean>(true)
  const [password, setPassword] = useState<Boolean>(true)
  
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
    <div>

    </div>
  )
}


