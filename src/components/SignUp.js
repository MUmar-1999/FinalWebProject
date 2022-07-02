import React ,{useState} from 'react'
import { Avatar, Grid, Paper, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from './Contact';

const SignUp = () => {
    const paperStyle = { padding: 20, height: '50vh', width: 420, margin: '100px auto',  }
    const avatarStyle = { backgroundColor: 'green' }
    const gStyle = { backgroundColor: 'grey' }
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function signUp()
    {
        let item = { name, password, email }
        console.warn(item)
    }
    
    
    return (
        
      <Grid color = {gStyle}>
          <Paper elevation={10} style={paperStyle}>
              <Grid align ="center">
              <Avatar style={avatarStyle}> PC </Avatar>
              <h2> Sign-Up </h2>
                </Grid>
    <TextField label="UserName" onChange={(e)=> setName(e.target.value)} placeholder="Enter UserName" fullWidth required />
    <TextField label="Email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" fullWidth required />
    <TextField label="Password" onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter Password" fullWidth required />
                <Link to=''>  <Button variant="contained" onClick={signUp} fullWidth>Sign-UP</Button> </Link>
          </Paper>
          <Contact/>
     </Grid> 
  )
}

export default SignUp