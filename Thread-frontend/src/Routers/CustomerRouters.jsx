import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Cart from '../components/Cart/Cart'
import Navigation from '../components/navigation/Navigation.jsx'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'
import ProductDetails from '../components/ProductDetails/ProductDetails.jsx'
import Checkout from '../components/Checkout/Checkout.jsx'
import Order from '../components/Order/Order.jsx'
import OrderDetails from '../components/Order/OrderDetails.jsx'

const CustomerRouters = () => {
  return (
    <div>
        <div>
         <Navigation/>
        </div>
      <Routes>
         <Route path='/' element={<HomePage/>}></Route>
         <Route path='/cart' element={<Cart/>}></Route>
         <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
         <Route path='/product/:productId' element={<ProductDetails/>}></Route>
         <Route path='/checkout' element={<Checkout/>}></Route>
         <Route path='/account/order' element={<Order/>}></Route>
         <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>


      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouters
