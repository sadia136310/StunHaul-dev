import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Screens/Navbar'
import Home from '../Screens/Home'
import Categories from '../Screens/Categories'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Categories/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default Router
