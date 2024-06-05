import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function UserLoginForm(){

    let [formData, setFormData] = useState({
        email:"",
        password:""
    })

    let navigate = useNavigate();

    let handleDataChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    let data={};
    let handleSubmit = async (event) => {
        event.preventDefault();
        let btn = document.querySelector("button");
        btn.textContent = "Logging In...";
        btn.disabled = true;
        try{
            const response = await fetch('https://ac-1.onrender.com/api/user/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              });
              data = await response.json();
              if (!data.response) {
                  throw new Error(data.message || 'Failed to login');
                }
              alert(data.message);
              data = data.response;
            //   console.log(data);
            navigate(`/user/${data._id}`, {state: data});
        } catch(error) {
            alert(error.message);
        }
        btn.textContent = "Login";
        btn.disabled = false;
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="enter email" name="email" id="email" value={formData.email} onChange={handleDataChange} ></input>
                <br/>
                <br/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="enter password" name="password" id="password" value={formData.password} onChange={handleDataChange} ></input>
                <br/>
                <br/>
                <button>Login</button>
            </form>
            {/* <Router>
                <Routes>
                </Routes>
            </Router> */}
        </div>
    )
}