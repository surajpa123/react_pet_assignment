import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { Navigate, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import axios from 'axios';
import { log_out } from '../Redux/action';
import { Link } from 'react-router-dom';
export const Admin = ()=> {
  const navi = useNavigate()
const dispatch = useDispatch()
  const [token,setToken] = useState(true)

  const [data,setdata] = useState()

const IsAuth = useSelector((store)=>
store.isAuth
)

React.useEffect(()=>{
  if(!IsAuth){
    navi("/login")
  }
})

console.log("HOmes",IsAuth)
const logout = useSelector((store)=>
store
)

const deletedata = (id) => {
console.log(id)
  axios.delete(`https://newdbwithauth.herokuapp.com/listing/${id}`).then(function(res){
    alert("Deleted Sucess")
    getdata()
  })
}

React.useEffect(()=>{
  getdata()
},[])
  
const getdata = ()=>{
  axios.get("https://newdbwithauth.herokuapp.com/listing").then(function(res){
      console.log(res.data)
      setdata(res.data)
  })
}
const home = ()=>{
 dispatch(log_out())
 navi("/")
}

  return (

    <>
    <div>Admin</div>
    <button onClick={home}>Logout</button>
   <br />
    
<div>

<Container maxWidth="sm" marginTop="10px">

<table class="table" >
<thead>
       <tr>
           <th scope="col">id</th>
           <th scope="col">Name</th>
           <th scope="col">City</th>
           <th scope="col">Address</th>
           <th scope="col">Capacity</th>
           <th scope="col">Cost per day</th>
           <th scope="col">Verified</th>
           <th scope="col">Rating</th>
           <th scope="col">Update</th>
           <th scope="col">Delete</th>
       </tr>
   </thead>
   <tbody>
   {
data?.map((e,i)=> {
return(
    <tr scope="row">
    <td scope="row">{i+1}</td>
    <td scope="row">
       {e.name}
    </td> 
    <td>{e.city}</td>
    <td>{e.address}</td>
    <td>{e.capacity}</td>
    <td>{e.cost_per_day}</td>
    <td>{e.verified}</td>
    <td>{e.rating}</td>
    <td><Link to={`/update/${e._id}`}><button>Update</button></Link></td>

    <td><button onClick={()=>{deletedata(e._id)}}>Delete</button></td>
    </tr>
) 
})
}  
</tbody>
</table>
</Container>

















</div>








    </>
  )
}

