import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
    </div>
  )
}

export default App
