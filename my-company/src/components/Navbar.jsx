import { Link } from "react-router-dom";
import Services from './Services';


function Navbar() {
    return ( <div style={{padding:"10px", display:"flex", justifyContent:"center", backgroundColor:"grey", color:"white"}}>
        
         <Link to="/">Home</Link>
        <Link to="About">About</Link>
        <Link to="Contact">Contact</Link>
        <Link to="Services">Services</Link>
       
    </div> );
}

export default Navbar;