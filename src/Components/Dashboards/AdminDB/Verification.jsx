import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Verify(){

    let location = useLocation();
    let navigate = useNavigate();
    let {users} = location.state;

    
    
    let [data, setData] = useState(users);
    
    // console.log(data);

  
    let handleSave = async() => {
        let btn = document.querySelector("button");
        btn.textContent = "Saving..."
        btn.disabled = true;
        try{
            let response = await fetch(`https://ac-1.onrender.com/api/user`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });
            response = await response.json();
            // if(!(response.response === "Updation Successful")){
            //     throw new Error(response.response);
            // }
            alert(response.message);
            navigate(-1);//goes back to previous page in history
        } catch(error) {
            alert(error);
        }
        btn.disabled = false;
        btn.textContent = "Save"
    }

    let handleToggle = async (event) => {
        // console.log(event.target.name);
        // console.log(event.target.checked);

        setData(prevData => 
            prevData.map(d => 
                d._id === event.target.name ? { ...d, verified: event.target.checked } : d
            )
        );
    }

    return (
        <div>
            <h3>Verification Page</h3>
            {/* {verified[0].firstname+" "+verified[0].middlename+" "+verified[0].lastname} */}
            <br></br>
            <h4>NOT VERIFIED</h4>
            <ul>
                {/* <li>{users[0].firstname}</li> */}
                {
                    data.filter(d => !d.verified).map((user) => (
                        <li key={user._id}>
                            <div>
                                <span>{user.firstname+" "+((user.middlename)?user.middlename:"")+" "+user.lastname}</span>
                                <br></br>
                                <span>{user.dateofbirth}</span>
                                <br></br>
                                <span>{user.email}</span>
                                <br></br>
                                <label htmlFor="verified">Verify</label>&nbsp;
                                {/* {v.filter(x => x[0]===user._id)[0][1]} */}
                                <input type="checkbox" name={user._id} id="verified" checked={user.verified} onChange={handleToggle}></input>
                                <br></br>
                                <br></br>
                            </div>
                        </li>
                    ))
                }
            </ul>
            
            <br></br>
            <h4>VERIFIED</h4>
            <ul>
                {
                    data.filter(d => d.verified).map((user) => (
                        <li key={user._id}>
                            <div>
                                <span>{user.firstname+" "+((user.middlename)?user.middlename:"")+" "+user.lastname}</span>
                                <br></br>
                                <span>{user.dateofbirth}</span>
                                <br></br>
                                <span>{user.email}</span>
                                <br></br>
                                <label htmlFor="verified">Verify</label>&nbsp;
                                <input type="checkbox" name={user._id} id="verified" checked={user.verified} onChange={handleToggle}></input>
                                <br></br>
                                <br></br>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <br></br>
            <button onClick={handleSave}>Save</button>
        </div>
    )
}