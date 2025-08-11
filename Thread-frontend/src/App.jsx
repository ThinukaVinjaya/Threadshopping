import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import Product from './components/Product/Product'
import Navigation from './components/navigation/Navigation.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import Cart from './components/Cart/Cart.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
import Order from './components/Order/Order.jsx'
import OrderDetails from './components/Order/OrderDetails.jsx'
import { Route, Routes } from 'react-router-dom'
import CustomerRouters from './Routers/CustomerRouters.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
    
      
    </div>
  )
}

export default App
