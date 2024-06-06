import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function AdminLogin(){

    let [formData, setFormData] = useState({
        adminid: "",
        password: ""
    });

    let navigate = useNavigate();

    let handleDataChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    let handleSubmit = async(event) => {
        event.preventDefault();
        // console.log(formData);
        let btn = document.querySelector("button");
        btn.textContent = "Logging In...";
        btn.disabled = true;
        try{
            let response = await fetch("https://ac-1.onrender.com/api/admin/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            let data = await response.json();
            // console.log(data);
            if(!data.response){
                throw new Error(data.message);
            }
            alert(data.message);
            navigate(`/admin/${data.response._id}`, {state: {adminDetails: data.response, key: data.api_key}});
        } catch(error) {
            alert(error.message);
        }
        btn.textContent = "Login";
        btn.disabled = false;
    }

    return (
        <div>
            <Navbar/>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="adminid">Admin Id</label>
                <input type="text" placeholder="enter admin id" id="adminid" value={formData.adminid} name="adminid" onChange={handleDataChange}></input>
                    <br></br>
                    <br></br>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="enter password" id="password" value={formData.password} name="password" onChange={handleDataChange}></input>
                <br></br>
                <br></br>
                <button>Login</button>
            </form>
        </div>
    )
}