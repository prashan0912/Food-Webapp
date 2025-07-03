
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import { useState } from 'react'
import Login from './Components/Login/Login'
import { Payment } from './Pages/Payment/Payment'
function App() {

  const [showLogin, setShowLogin] = useState(false)


  return (
    <div className='app'>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </div>
  )
}

export default App
