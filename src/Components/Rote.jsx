import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Contact } from "./Contact"
import { Register } from "./Register"
import { Details } from "./Details"
export const Rote=()=>{
    return(
      <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
           <Route path='/Register' element={<Register/>}/>
           <Route path="/Details" element={<Details/>} />
       </Routes>
      </div>  
    )
}