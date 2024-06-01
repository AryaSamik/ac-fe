import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function User({state}){

    const location = useLocation();
    const data = location.state;
    // console.log(data);

    let navigate = useNavigate();
    const handleClick = (event) => {
        navigate("/");
    }

    return(
        <div>
            <h3>User DashBoard</h3>
            <div><b>Name</b>: {data.firstname+" "+((data.middlename)?data.middlename:"")+" "+data.lastname}</div>
            <br></br>
            <div><b>Email</b>: {data.email}</div>
            <br></br>
            <div><b>Date Of Birth</b>: {data.dateofbirth.slice(0,10)}</div>
            <br></br>
            <br></br>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}