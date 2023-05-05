import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import OtpVerify from './pages/OtpVerify'
import ChangePassword from './pages/ChangePassword'
import LearnMore from './pages/LearnMore'
import Product from './pages/Product'

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/otp" element={ <OtpVerify/> } />
        <Route path="/change-password" element={ <ChangePassword/> } />
        <Route path="/learnMore" element={ <LearnMore/> } />
        <Route path="/product" element={ <Product/> } />
      </Routes>
    </>
  )
}

export default App
