import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AllCustomer from './components/AllCustomer/AllCustomer'
import CreateCustomer from './components/CreateCustomer/CreateCustomer'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AdminDash from './components/NewUser/AdminDash'
import Spend from './components/Spend/Spend'
import AuthLogin from './Pages/authLogin/AuthLogin'
import Home from './Pages/Home/Home'
import KistiDetails from './Pages/KistiDetails/KistiDetails'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Test from './Pages/Test'

const App = () => {
  const userData = JSON.parse(localStorage.getItem('authUser'))
  
  return (
    <Router>
  <h1>{userData.role}</h1>   
     
     
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Test/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/gkssreg' element={<Register/>} />
        <Route path='/authlogin' element={<AuthLogin/>} />
        <Route path='/new-customer' element={userData?.role?<CreateCustomer/> : <AuthLogin/>} />
        <Route path='/admin' element={userData?.role?<AdminDash/>:<AuthLogin/>} />
        <Route path='/customers' element={<AllCustomer/>} />
        <Route path='/spend' element={<Spend/>} />
        <Route path='/customer/:id' element={<KistiDetails/>} />
      </Routes>
      <Footer/>
  
    </Router>
  )
}

export default App