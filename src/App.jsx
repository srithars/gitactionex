import About from "./components/About"
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Master from "./components/Master";
import Grid from "./components/Grid";



function App(){
  return(
    <>

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Master/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Grid" element={<Grid/>}/>
      </Routes>
    
    </BrowserRouter>



   

    </>
  )
}
export default App