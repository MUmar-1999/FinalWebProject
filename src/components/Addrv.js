import { useState } from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React from 'react'
import { addUser } from '../services/api'
import { useNavigate } from 'react-router-dom'
const initialValues = {
    username: '',
    email: '',
    phone: ''

}
const Addrv = () => {
    const fStyle = { width: 420, margin: '100px auto' }
    const [user, setUser] = useState(initialValues)
    const navigate = useNavigate()
    
    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }

    const addInfo = async () => {
        await addUser(user);
        navigate("/view");
    }
   
    

  return (
      <FormGroup style={fStyle}> 
          <Typography variant='h4'>Add Review</Typography>
          <FormControl>
              <InputLabel>Username</InputLabel>
              <Input onChange={ (e) => onValueChange(e)} name = 'username'/>
          </FormControl>
          <FormControl>
              <InputLabel>Email</InputLabel>
              <Input onChange={ (e) => onValueChange(e)} name = 'email'/>
          </FormControl>
          <FormControl>
              <InputLabel>Phone</InputLabel>
              <Input onChange={ (e) => onValueChange(e)} name = 'phone'/>
          </FormControl>
          <FormControl>
              <Button onClick = {() => addInfo()} variant='contained'>Add Reviews</Button>
          </FormControl>
    </FormGroup>
  )
}

export default Addrv