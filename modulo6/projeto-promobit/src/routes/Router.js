import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './../pages/Home/HomePage'
import MovieDetail from './../pages/MovieDetail/MovieDetail'


const Router = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default Router