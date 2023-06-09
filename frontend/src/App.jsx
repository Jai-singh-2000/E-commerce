import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import OtpVerify from './pages/OtpVerify'
import ChangePassword from './pages/ChangePassword'
import ShowProducts from './components/ShowProduct/ShowProducts'

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={ <Home/> } /> 
        <Route path="/product/:pid" element={ <ShowProducts/> } /> 
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/otp" element={ <OtpVerify/> } />
        <Route path="/change-password" element={ <ChangePassword/> } />
      </Routes>
    </>
  )
}

export default App
