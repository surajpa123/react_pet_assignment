import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Home} from "./Components/Home"
import Add_pet from './Components/Add_pet'
import {Routes,Route} from "react-router-dom"
import {Login} from './Components/Login'
import {Admin} from "./Components/Admin"

import {Update} from "./Components/Update"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   

     <Routes>
    
     <Route path='/create' element={<Add_pet/>}></Route>
   <Route path='/' element={<Home/>}> </Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route path="/admin" element={<Admin/>}></Route>

   <Route path="/update/:id" element={<Update/>}></Route>

   

     </Routes>
    </div>
  )
}

export default App
