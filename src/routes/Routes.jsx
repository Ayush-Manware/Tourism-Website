import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/navlinks/Home'
import Indiantourism from '../components/navlinks/Indiantourism'
import Offers from '../components/navlinks/Offers'
import Packages from '../components/navlinks/Packages'
import Placestovisit from '../components/navlinks/Placestovisit'

const Routers = () => {
  return (
    <div className="routes">
        <Routes>
            <Route path = "/" element={ <Home/> }/>
            <Route path = '/IndianTourism' element={<Indiantourism/>} />
            <Route path = '/Offers' element = {<Offers/>} />
            <Route path = '/packages' element = {<Packages/>} />
            <Route path = '/Places' element = {<Placestovisit/>} />
        </Routes>
    </div>
  )
}

export default Routers