import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function User(){

    const location = useLocation();
    const data = location.state;
    // console.log(data);

    let navigate = useNavigate();
    const handleClick = (event) => {
        navigate("/userlogin");
    }

    const handleShowAlumnii = async (event) => {
        let alumBtn = document.getElementById("alum");
        alumBtn.textContent = "Opening..."
        alumBtn.disabled=true;
        let data;
        try{
            let response = await fetch('https://ac-1.onrender.com/api/user?key=giveaccess');
            data = await response.json();
            navigate(`/user/${data._id}/alumnii`, {state: data});
        } catch(error) {
            console.log(error);
        }
        alumBtn.textContent="Show Alumnii";
        alumBtn.disabled = false;
    }

    return(
        <div>
            <h2>User DashBoard</h2>
            <hr></hr>
            <br></br>
            <div><b>Name</b>: {data.firstname+" "+((data.middlename)?data.middlename:"")+" "+data.lastname}</div>
            <br></br>
            <div><b>Email</b>: {data.email}</div>
            <br></br>
            <div><b>Date Of Birth</b>: {data.dateofbirth.slice(0,10)}</div>
            <br></br>
            <br></br>
            <button onClick={handleShowAlumnii} id="alum">Show Alumnii</button>
            <br></br>
            <br></br>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}