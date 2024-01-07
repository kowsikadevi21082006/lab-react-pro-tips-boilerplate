import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/Registration'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import AllRoutes from './components/Routes/AllRoutes'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Perform Routing */}
      <AllRoutes />
    </div>
  )
}

export default App