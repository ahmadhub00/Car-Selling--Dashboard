import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Bookings from '../pages/Bookings';
import Dashboard from '../pages/Dashboard';
import SellCar from '../pages/SellCar';
import Settings from '../pages/Settings';

function Router() {
  return (
    <>
    
      <Routes>
        <Route path='/' element = {<Navigate to = '/dashboard' element = {<Dashboard />} />} />
        <Route path='/dashboard' element = {<Dashboard/>} />
        <Route path='/settings' element = {<Settings/>} />
        <Route path='/sell-car' element = {<SellCar/>} />
        <Route path='/bookings' element = {<Bookings/>} />
      </Routes>
    
    </>
  )
}

export default Router