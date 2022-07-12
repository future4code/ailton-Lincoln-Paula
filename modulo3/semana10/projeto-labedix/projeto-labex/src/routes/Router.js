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
    <Route index  path ='/home' element={<Home/>}/>
    <Route path='/trips/list' element={<ListTripsPage/>}/>
    <Route path='/trips/application' element={<TripDetailsPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/admin/trips/list' element={<AdminHomePage/>}/>
    <Route path='/admin/trips/create' element={<CreateTripPage/>}/>
    <Route path='/admin/trips/:id' element={<AdminDetailTrip/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>


)



}