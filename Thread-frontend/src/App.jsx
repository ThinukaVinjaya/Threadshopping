import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import Product from './components/Product/Product'
import Navigation from './components/navigation/Navigation.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigation/>
      <div>
        {/*<HomePage />*/}
        <Product/>
      </div>
      <Footer />
    </div>
  )
}

export default App
