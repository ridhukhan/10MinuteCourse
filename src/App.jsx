import { BrowserRouter ,Routes, Route } from "react-router-dom"
import Navber from "./Nav/Navber"
import Home from "./pages/Home"
import Class6 from "./pages/Class6"
import Class7 from "./pages/Class7"
import Class8 from "./pages/Class8"
import Call from "./Nav/Call"



function App() {
 
  return (
<div>

<BrowserRouter>
<Navber/>
<Call/>
<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/Class6" element={<Class6/>}/>
<Route path="/Class7" element={<Class7/>}/>
<Route path="/Class8" element={<Class8/>}/>








</Routes>





</BrowserRouter>






</div>  
  )
}

export default App
