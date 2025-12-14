import { BrowserRouter ,Routes, Router } from "react-router-dom"
import Navber from "./Nav/Navber"
import Home from "./pages/Home"



function App() {
 
  return (
<div>

<BrowserRouter>
<Navber/>
<Routes>

<Router path="/" element={<Home/>}/>





</Routes>





</BrowserRouter>






</div>  
  )
}

export default App
