import { Link } from "react-router-dom"
import "./Master.css"
function Master(){
    return(
      <>
      <div className="head1">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/grid">Grid</Link>
      </div>
      
      </>
    )
  }
  export default Master