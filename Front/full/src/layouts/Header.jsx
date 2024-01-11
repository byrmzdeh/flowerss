import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/header.scss'

const Header = () => {
  return (
    <div className='header'>
        <h1>Floral Studio</h1>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/add"}>Add Page</NavLink></li>
            <li><NavLink to={"/basket"}>Basket</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>

        </ul>
    </div>
  )
}

export default Header