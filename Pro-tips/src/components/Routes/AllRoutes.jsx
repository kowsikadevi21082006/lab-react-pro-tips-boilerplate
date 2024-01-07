import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Contact from '../Contact'
import PageNotFound from '../PageNotFound'
import Registration from '../Registration'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='registration' element={<Registration/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
  )
}

export default AllRoutes