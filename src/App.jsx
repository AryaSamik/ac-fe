import './App.css'
import SignUpForm from './Components/Forms/SignUp'
import UserLoginForm from './Components/Forms/UserLogin'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './Components/Dashboards/User';
import Navbar from './Components/Navbar/Navbar';
import AdminLogin from './Components/Forms/AdminLogin';
import Admin from './Components/Dashboards/AdminDB/Admin';
import Verify from './Components/Dashboards/AdminDB/Verification';

function App() {

  return (
    <div>
      <hr></hr>
      <h1>
        Alum Central
      </h1>
      <hr></hr>
      <br></br>
      <Navbar/>
      <br></br>
      <Router>
        <Routes>
          <Route path="/userlogin" element={<UserLoginForm/>}></Route>
          <Route path="/signup" element={<SignUpForm/>}></Route>
          <Route path="/user/:id" element={<User/>}></Route>
          <Route path='/adminlogin' element={<AdminLogin/>}></Route>
          <Route path='/admin/:id' element={<Admin/>}></Route>
          <Route path='/admin/:id/verify' element={<Verify/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
