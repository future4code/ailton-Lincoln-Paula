import React from 'react';
import HomePage from '../Pages/Home/HomePage';
import ErrorPage from '../Pages/Error/Error';
import MovieDetails from '../Pages/Details/Details';
import {Route, Routes} from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}