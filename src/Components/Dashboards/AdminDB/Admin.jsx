import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Admin(){

    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    let handleLinkClick = async () => {
        let open = document.getElementById("opening");
        open.textContent = "Opening Link..."
        try{
            let response = await fetch(`https://ac-1.onrender.com/api/user?key=${data.key}`);
            let users = await response.json();
            if(users.message){
                throw new Error(users.message);
            }
            // console.log(users);
            // let notverified = users.filter((d) => !d.verified)
            // let verified = users.filter((d) => d.verified);
            navigate(`/admin/${data.adminDetails._id}/verify`, {state: {users: users}});
        } catch(error) {
            alert(error);
        }        
        open.textContent = "";
    }

    let handleBtnClick = () => {
        navigate("/");
    }

    return(
        <div>
            {/* {logger()} */}
            <h3>Admin DashBoard</h3>
            <div><b>Admin Id</b>: {data.adminDetails.adminid}</div>
            {/* <br></br> */}
            {/* <div><b>Key</b>: {data.key}</div> */}
            <br></br>
            <br></br>
            <a /*href="/verify"*/onClick={handleLinkClick}>Go To Verification Page</a>
            <div id="opening"></div>
            <br></br>
            <br></br>
            <button onClick={handleBtnClick}>Logout</button>
        </div>
    )
}