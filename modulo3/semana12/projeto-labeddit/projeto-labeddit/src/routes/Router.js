import React from 'react'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import LoginPage from './../pages/Login/LoginPage'
import SignUpPage from './../pages/SignUp/SignUpPage'
import FeedPage from './../pages/Feed/FeedPage'
import ErrorPage from './../pages/Error/ErrorPage'
import PostDetail from './../pages/PostDetail/PostDetailPage'


const Router = () =>{

return(
    <BrowserRouter>

        <Routes>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/signup' element={<SignUpPage/>}></Route>
    <Route path='/' element={<FeedPage/>}></Route>
    <Route path='/post/:id' element={<PostDetail/>}></Route>
    <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
    </BrowserRouter>

)



}

export default Router