import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'
import './assets/shared-css/basic-style.css'
import './assets/shared-css/colorblocks-style.css'
import './assets/shared-css/normalize.css'

import NavBar from './components/NavBar'
import FlyingV from './assets/IAmXCSB_flyingV.png'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Events from './routes/Events'
import Donate from './routes/Donate'
import Home from './routes/Home'
import MediaCoverage from './routes/MediaCoverage'
import WCSB50Years from './routes/WCSB50Years'
import Footer from './components/Footer'
import Programs from './routes/Programs'
// import Banner from './components/NavBar/Banner'

function App() {
  // const navigate = useNavigate();
  // const handleScrollToPlace = (element, pathname) => {
  //   console.log(element, pathname)
  //   navigate(pathname)
  //   const el = document.getElementById(element)
  //   el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // }
  console.log(import.meta.env.BASE_URL, window.location.pathname, `${import.meta.env.BASE_URL}/xscb-donate`)
  return (
    <>
    {/* <Banner /> */}
      <img className="header-banner" src={FlyingV} alt="banner image XCSB" />
      <div className="app-container">
        <BrowserRouter>
          <NavBar />
          <div className="routes-container">
          <Routes>
            <Route
              path={`${import.meta.env.BASE_URL}`}
              element={<Home />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}/xcsb-donate`}
              element={<Donate />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}/xcsb-mediaCoverage`}
              element={<MediaCoverage />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}/xcsb-events`}
              element={<Events />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}/xcsb-WCSB50Years`}
              element={<WCSB50Years />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}/xcsb-programDetail`}
              element={<Programs />}
            />
          </Routes>
          </div>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default App
