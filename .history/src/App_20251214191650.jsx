import { BrowserRouter ,Routes, Route } from "react-router-dom"
import Navber from "./Nav/Navber"
import Home from "./pages/Home"



function App() {
 
  return (
<div>

<BrowserRouter>
<Navber/>
<Routes>

<Route path="/" element={<Home/>}/>





</Routes>





</BrowserRouter>






</div>  
  )
}

export default App
