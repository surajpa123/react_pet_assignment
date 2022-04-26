import React from 'react'
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import axios from 'axios';
import Container from '@mui/material/Container';
import { useState } from 'react';
import style from "../Components/home.css"
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import {get_data} from "../Redux/action"

 
export  const Home = ()=> {
 const dispatch = useDispatch()
    const datas = useSelector((store)=>
    store.isAuth
 )
 
 console.log("HOmes",datas)

    const [data,setdata] = useState()
    const [name,setname] = useState()

    const [status,sets] = useState(true)

    React.useEffect(()=>{
        getdata()
    },[name])

    const handelSort = ()=>{
        const alld = [...data]
        if(status == true){
            alld.sort(function(a,b){
                if(a.name > b.name){
                    return 1
                }if(a.name < b.name){
                    return -1
                }
                return 0
            })
            console.log("Data",data)
            // get_data()
            sets(false)
        }else{
            alld.sort(function(a,b){
                if(a.name < b.name){
                    return 1
                }if(a.name > b.name){
                    return -1
                }
                return 0
            })
            sets(true)
        }
     
        setdata(alld)
      }

   
    const getdata = ()=>{
        axios.get("https://newdbwithauth.herokuapp.com/listing").then(function(res){
            console.log(res.data)
            setdata(res.data)
            // dispatch(getdata(res.data))
            dispatch(get_data(res.data))
        })

      
    }


const Search= ()=>{
    axios.get(`https://newdbwithauth.herokuapp.com/listing/search/${name}`).then(function(res){
        console.log(res.data)
        setdata(res.data)
    })
}

const handelchange = (e)=>{
    const {id,value} = e.target;
    console.log(value)
    setname(value)
//    setData({...data,[id]:value})
setdata(value)
   }

console.log(data)

  return (

    <>
    {/* <div>Home Page</div> */}

    

    <div className='maindiv'>
   <Button variant='contained' onClick={handelSort}>Sort by name</Button>
      <br />
      <br />

      <Link to={"/login"}>Login Admin</Link>
      <br />
      <br />
   <Link to={"/create"}><Button variant="outlined">Add New Pet</Button></Link> 

   
    <br />
    <br />
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
