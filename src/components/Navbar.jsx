import React from 'react'
import logo from '../logo.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="logo" className="logo-image" />
            <div className="info">
                <p className='phone'><i class="fa-solid fa-location"></i> :Delhi</p>
                <p className='phone'><i class="fa-solid fa-phone"></i> :6232597974</p>
                <p className="email"><i class="fa-regular fa-envelope"></i> :"info@theindiatourism.com"</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar;