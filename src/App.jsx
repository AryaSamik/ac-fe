import './App.css'
import SignUpForm from './Components/Forms/SignUp'
import UserLoginForm from './Components/Forms/UserLogin'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './Components/Dashboards/User';
import AdminLogin from './Components/Forms/AdminLogin';
import Admin from './Components/Dashboards/AdminDB/Admin';
import Verify from './Components/Dashboards/AdminDB/Verification';
import Home from './Components/Pages/Home';
import Alumnii from './Components/Pages/Alumnii';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/userlogin" element={<UserLoginForm/>}></Route>
          <Route path="/signup" element={<SignUpForm/>}></Route>
          <Route path="/user/:id" element={<User/>}></Route>
          <Route path='/adminlogin' element={<AdminLogin/>}></Route>
          <Route path='/admin/:id' element={<Admin/>}></Route>
          <Route path='/admin/:id/verify' element={<Verify/>}></Route>
          <Route path='/user/:id/alumnii' element={<Alumnii/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
