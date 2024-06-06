import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <div id="navbar">
            <div>
            <hr></hr>
            <h1>
                Alum Central
            </h1>
            <hr></hr>
            <br></br>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/userlogin">User Login</Link>
                <Link to="/adminlogin">Admin Login</Link>
            </div>
            <br></br>
            <br></br>            
        </div>
    )
}