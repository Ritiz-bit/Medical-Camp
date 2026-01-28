import { Link } from "react-router-dom"
export const Navbar=()=>{
    return(
        <div>
            <center><h2>Medical Camp Registration</h2></center>
            <nav style={{display:'flex', justifyContent:'space-around',backgroundColor:'beige'}}>
                <Link to='/' style={{textDecoration:'none'}}>Home</Link>
                <Link to='/Contact' style={{textDecoration:'none'}}>Contact</Link>
                <Link to='/Register' style={{textDecoration:'none'}}>Register</Link>
                <Link to='/About' style={{textDecoration:'none'}}>About</Link>
            </nav>
        </div>
    )
}