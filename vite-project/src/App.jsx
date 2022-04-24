import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Home} from "./Components/Home"
import Add_pet from './Components/Add_pet'
import {Routes,Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   

     <Routes>
    
     <Route path='/create' element={<Add_pet/>}></Route>
   <Route path='/' element={<Home/>}> </Route>

     </Routes>
    </div>
  )
}

export default App
