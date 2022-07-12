import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/HomePage'
import ListTripsPage from '../pages/User/ListTripsPage'
import AdminHomePage from '../pages/Admin/AdminHomePage'
import LoginPage from '../pages/Admin/LoginPage'
import CreateTripPage from '../pages/Admin/CreateTripPage'
import TripDetailsPage from '../pages/User/TripDetailsPage'
import AdminDetailTrip from '../pages/Admin/AdminDetailTrip'
import ErrorPage from './../pages/Admin/ErrorPage.js'

export const Router = () =>{

return(
    <BrowserRouter>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path='user-captation' element={<ListTripsPage/>}/>
    <Route path='user-trip-detail' element={<TripDetailsPage/>}/>
    <Route path='admin-login' element={<LoginPage/>}/>
    <Route path='admin-area' element={<AdminHomePage/>}/>
    <Route path='admin-create' element={<CreateTripPage/>}/>
    <Route path='admin-trip-detail' element={<AdminDetailTrip/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>


)



}