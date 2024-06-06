import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Alumnii(){
    const location = useLocation();
    const data = location.state;

    return(
        <div>
           <h2>Alumnii Page</h2>
           <ul>
            {
                data.filter(d => d.verified===true).map(d => (
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
        </div>
    )
}