import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { IS_AUTH, token } from '../Redux/action';
import { is_auth } from '../Redux/action';
import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
export const Login = () => {
    const navi = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let Auth = false
    let data = {
        email,
        password
    }
    const dispatch = useDispatch()
    const IsAuth = useSelector((store) =>
        store.isAuth
    )
    // console.log("isAuthing is", IsAuth)
    
    React.useEffect(()=>{
   if(IsAuth){
        navi("/admin")
    } 
    },[IsAuth])

    // console.log("HOmes", IsAuth)
    const handelSubmit = () => {
        axios.post("https://loginauthapi.herokuapp.com/login", data).then(function (res) {
            console.log(res.data)
            dispatch(token(res.data.Token))
            // navi("/admin")
        })
    }

    return (

        <div>

            <h1> Admin Login</h1>
            <br />
            <TextField type="text" label="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
            <br />
            <br />
            <TextField type="text" label="Enter password" onChange={(e) => { setPassword(e.target.value) }} />
            <br />
            <br />
            <Button type="button" class="btn btn-success" onClick={handelSubmit}>Login</Button>

            <br />
            <br />
            <p>TO TEST THE ADMIN FUNCTIONALITY KINDLY LOGIN WITH THIS EMAIL & PASSWORD</p>
            <p>Email - suraj@hotmail</p>
            <p>Password - 12345</p>
        </div>
    )

}
