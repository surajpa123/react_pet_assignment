import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Input from "@mui/material/Input"
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"

export const Update = () =>{
    const getstore = useSelector((store)=>
       store.data
    )

   
const {id} = useParams()

    console.log("datas",getstore)
    const [data,setData] = useState({})
    const handelSubmit = (e)=>{
        e.preventDefault()
        axios.patch(`https://newdbwithauth.herokuapp.com/listing/${id}`,data).then(function(res){
            alert("Updated sucess")
        })
   console.log(data)

    }
    const handelchange = (e)=>{
     const {id,value} = e.target;
     console.log(value)
    setData({...data,[id]:value})
    }
  return (
      <>
    <div className='maindiv'><h2>Add_pet</h2>
<br />
    <form class="row g-3 " onSubmit={handelSubmit}>
    <label htmlFor="">Name</label>
   <select name="Capacity" onChange={handelchange} id="name">
   <option>Select Pet Name</option>
    <option value={"Dog"}>Dog</option>
    <option value={"Rabbit"}>Rabbit</option>
    <option value={"Cat"}>Cat</option>
   </select>

   <Input id= "city" type="text" placeholder='Enter city' onChange={handelchange}/>
 
   <Input id='address' type="text " placeholder='Enter address' onChange={handelchange}/>

   {/* <Label id="demo-simple-select-label">Capacity</Label> */}
   <label htmlFor="">Capacity</label>
   <select name="Capacity" onChange={handelchange} id="capacity">
    <option value={"1-5 Kg"}>1-5 Kg</option>
    <option value={"5-10 Kg"}>5-10 Kg</option>
    <option value={"10-20 Kg"}>10-20 Kg</option>
    <option value={"20-40 Kg"}>20-40 Kg</option>

   </select>
        <br />
        <br />
        <Input id='cost_per_day'   onChange={handelchange} type="number " placeholder='Enter cost per day'/>
        <Input type="text " id='verified'  onChange={handelchange} placeholder='Verified'/>
        <Input type="number" id='rating'   onChange={handelchange} placeholder='Rating'/>
        <hr />
        <Button  variant="contained" type = "submit">Submit</Button>
    
    </form>


    </div>







    </>
  )
}

