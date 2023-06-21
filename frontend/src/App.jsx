import './App.css'
import { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import OtpVerify from './pages/OtpVerify'
import ChangePassword from './pages/ChangePassword'
import ShowProducts from './components/ShowProduct/ShowProducts'
import Cart from './pages/Cart'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import PaymentMethod from './pages/PaymentMethod'
import { useDispatch } from 'react-redux'
import { fetchAllProducts } from './redux/reducers/productSlice'
import ShippingPage from './pages/ShippingPage'
import OrderDetailes from './pages/OrderDetailes'

function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    console.log("yaahah")
    dispatch(fetchAllProducts())
  },[])
  
  return (
    <>
       <Routes>
        <Route path="/" element={ <Home/> } /> 
        <Route path="/product/:pid" element={ <ShowProducts/> } /> 
        <Route path="/cart" element={ <Cart/> } /> 
        <Route path="/payment" element={ <PaymentMethod/> } /> 
        <Route path="/about" element={ <AboutUs/> } /> 
        <Route path="/contact" element={ <ContactUs/> } /> 
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/otp" element={ <OtpVerify/> } />
        <Route path="/change-password" element={ <ChangePassword/> } />
        <Route path="/shipping" element={ <ShippingPage/> } />
        <Route path="/order" element={ <OrderDetailes/> } />

      </Routes>
    </>
  )
}

export default App
