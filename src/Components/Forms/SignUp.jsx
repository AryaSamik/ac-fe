import {useState} from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function SignUpForm(){
    let [formData, setFormData] = useState({
        firstname:"",
        middlename:"",
        lastname:"",
        dateofbirth:"",
        email:"",
        password:""
    })
    let navigate = useNavigate();

    let handleDataChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]:event.target.value};
        });
    }

    let data;
    const handleSubmit = async (event) => {
        event.preventDefault();
        let btn = document.querySelector("button");
        btn.textContent = "Signing Up...";
        btn.disabled = true;
        try {
          const response = await fetch('https://ac-1.onrender.com/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          data = await response.json();
          if (!data.response) {
            throw new Error(data.message);
          }
          // console.log(data.response);
          alert(data.message);
          navigate("/userlogin");
        } catch (error) {
          alert(error.message);
        }
        btn.textContent = "Submit";
        btn.disabled = false;
      };

    return (
        <div>
          <Navbar/>
          <form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>
            <label htmlFor="firstname">First Name</label>
            <input placeholder="enter first name" type="text" id="firstname" value={formData.firstname} name="firstname" onChange={handleDataChange}></input>
            <br/>
            <br/>
            <label htmlFor="middlename">Middle Name</label>
            <input placeholder="enter middle name" type="text" id="middlename" value={formData.middlename} name="middlename" onChange={handleDataChange}></input>
            <br/>
            <br/>
            <label htmlFor="lastname">Last Name</label>
            <input placeholder="enter last name" type="text" id="lastname" value={formData.lastname} name="lastname" onChange={handleDataChange}></input>
            <br/>
            <br/>
            <label htmlFor="dateofbirth">Date of Birth</label>
            <input placeholder="enter date of birth" type="date" id="dateofbirth" value={formData.dateofbirth} name="dateofbirth" onChange={handleDataChange}></input>
            <br/>
            <br/>
            <label htmlFor="email">Email</label>
            <input placeholder="enter email" type="email" id="email" value={formData.email} name="email" onChange={handleDataChange}></input>
            <br/>
            <br/>
            <label htmlFor="password">Password</label>
            <input placeholder="enter password" type="password" id="password" value={formData.password} name="password" onChange={handleDataChange}></input>
            <br/>
            <br/>
            <button>Submit</button>
        </form>
        </div>
    )
}

