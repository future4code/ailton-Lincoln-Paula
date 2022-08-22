import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/" element={<FeedPage />}></Route> */}
        <Route path="/login" element={<LoginPage />}></Route>
        <Route index element={<HomePage />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Router