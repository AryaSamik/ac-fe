import './App.css'
import SignUpForm from './Components/Forms/SignUp'
import LoginForm from './Components/Forms/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './Components/Dashboards/User';

function App() {

  return (
    <div>
      <navbar>
        <a href='/login'> Login </a>
        <a href='/signup'> Signup </a>
        <a href='/'>Home</a>
      </navbar>
      <h1>
        Alum-Central
      </h1>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm/>}></Route>
          <Route path="/signup" element={<SignUpForm/>}></Route>
          <Route path="/profile/:id" element={<User/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
