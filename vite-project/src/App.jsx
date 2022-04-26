import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Home} from "./Components/Home"
import Add_pet from './Components/Add_pet'
import {Routes,Route, Navigate} from "react-router-dom"
import {Login} from './Components/Login'
import {Admin} from "./Components/Admin"
import {useSelector} from "react-redux"

import {Update} from "./Components/Update"
const PrivateRoute = ({isAuth,children})=>{
  return isAuth?children:<Navigate to={"/login"}/>
}
function App() {
  const [count, setCount] = useState(0)


  const isAuth = useSelector((store)=>
  store.isAuth
  )

  console.log("IsAUTH",isAuth)

  return (
    <div className="App">
   

     <Routes>
   
       {/* <Route path='/create' element={<PrivateRoute isAuth={isAuth}><Add_pet/> </PrivateRoute>}></Route> */}
     <Route path='/create' element={<Add_pet/>}></Route>
     
   <Route path='/' element={<Home/>}> </Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route path="/admin" element={<Admin/>}></Route>
   {/* <Route path='/admin' element={<PrivateRoute isAuth={isAuth}><Admin/> </PrivateRoute>}></Route> */}
   <Route path="/update/:id" element={<Update/>}></Route>
     </Routes>
    </div>
  )
}

export default App
