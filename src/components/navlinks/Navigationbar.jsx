import React from 'react'
import { Link } from 'react-router-dom'

const Navigationbar = () => {
  return (
    <div className="navigation-div">
        <Link to={"/"}>Home</Link>
        <Link to={'/IndianTourism'}>Indian Tourism</Link>
        <Link to={'/packages'}>Tour Packages</Link>
        <Link to={'/Places'}>Places</Link>
        <Link to={'offers'}>Offers</Link>
    </div>
  )
}

export default Navigationbar