import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Alumnii(){
    const location = useLocation();
    const data = location.state;

    let navigate = useNavigate();

    let [yearValue, setYearValue] = useState((new Date().getFullYear()).toString());
    let [year, setYear] = useState(yearValue);

    let handleFilterYearChange = (event) => {
        setYearValue(event.target.value);
    }

    let handleYear = (event) => {
        setYear(yearValue);
    }

    return(
        <div>
           <h2>Alumnii Page</h2>
            <label htmlFor="filter-year">Year Of Birth</label>
           <input type="text" id="filter-year" value={yearValue} onChange={handleFilterYearChange} name="year"></input>
           <br />
           <button onClick={handleYear}>Done</button>
           <br />
           <br />
           <ul>
            {
                data.filter(d => (d.verified===true && d.dateofbirth.slice(0,4)===year)).map(d => (
                    <li key={d._id}>
                        Name: {d.firstname+" "+((d.middlename)?d.middlename:"")+" "+d.lastname}
                        <br></br>
                        Date Of Birth: {d.dateofbirth.slice(0,10)}
                        <br></br>
                        Email: {d.email}
                        <br></br>
                        <br></br>
                    </li>
                ))
            }
           </ul>
           <br></br>
           <br></br>
           <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}
