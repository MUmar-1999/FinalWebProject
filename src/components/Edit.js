import { useState , useEffect} from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React from 'react'
import { getUse, editUse } from '../services/api'
import { useNavigate , useParams} from 'react-router-dom'
const initialValues = {
    username: '',
    email: '',
    phone: ''

}

const Edit = () => {
    const fStyle = { width: 420, margin: '100px auto' }
    const [user, setUser] = useState(initialValues)
    const navigate = useNavigate()

    useEffect(() => { getUseInfo(); }, [])
    const getUseInfo = async () => {
        let response = await getUse(); 
        setUser(response.data)
    }
    
    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }

    const addInfo = async () => {
       await editUse(user);
        navigate("/view");
   }
   
    

  return (
      <FormGroup style={fStyle}> 
          <Typography variant='h4'>Edit Review</Typography>
          <FormControl>
              <InputLabel>Username</InputLabel>
              <Input onChange={ (e) => onValueChange(e)} name = 'username' value={user.name}/>
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
              <Button onClick = {() => addInfo()} variant='contained'>Edit Reviews</Button>
          </FormControl>
    </FormGroup>
  )
}
export default Edit