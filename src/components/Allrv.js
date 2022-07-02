import { Table,TableBody, TableCell,TableRow, TableHead, Button} from '@mui/material'
import React from 'react'
import { getUser , deleteUser } from '../services/api'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Allrv = () => {

    const fStyle = { width: 1200, margin: '100px auto' }
    const gStyle = {width: 1200, backgroundColor: "Grey" }
    const [user, setUser] = useState([]);
     useEffect(() => { getUserInfo(); }, [])
    const getUserInfo = async () => {
        let response = await getUser();
        console.log(response);
        setUser(response.data);
    }

    const deleteUserData = async (id) => {
        await deleteUser(id)
    }
  return (
      <Table style={fStyle}>
          <TableHead>
              <TableRow style={gStyle}>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Operation</TableCell>
                  </TableRow>
          </TableHead>
          <TableBody>
              {
                  user.map(user => (
                      <TableRow>
                          <TableCell>{user.id}</TableCell>
                          <TableCell>{user.username }</TableCell>
                          <TableCell>{user.email }</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell> 
                              <Button variant='contained' component= {Link} to = {'/edit/${:id}'}>Edit</Button>
                              <Button variant='contained' color="secondary" onClick= {() => deleteUserData(user.id)}>Delete</Button>
                          </TableCell>
                      </TableRow>
                  ))
              }
          </TableBody>
    </Table>
  )
}

export default Allrv