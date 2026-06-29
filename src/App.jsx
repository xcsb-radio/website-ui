import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar'
import FlyingV from './assets/IAmXCSB_flyingV.png'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Events from './routes/Events'
import Donate from './routes/Donate'
import Home from './routes/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.BASE_URL, window.location.pathname, `${import.meta.env.BASE_URL}xscb-donate`)
  return (
    <>
      <img src={FlyingV} alt="banner image XCSB" />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path={`${import.meta.env.BASE_URL}`}
            element={<Home />}
          />
          <Route
            path={`${import.meta.env.BASE_URL}xcsb-donate`}
            element={<Donate />}
          />
          <Route
            path={`${import.meta.env.BASE_URL}xcsb-events`}
            element={<Events />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
