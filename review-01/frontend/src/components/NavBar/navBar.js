import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss';

function NavBar() {
  return (
    <nav className='header-nav'>
      <Link to='/'>Home</Link>
      <Link to='/services'>services</Link>
      <Link to='/about'>about us</Link>
      <Link to='/'>news</Link>
      <Link to='/'>blogs</Link>
      <Link to='/'>contact us</Link>
    </nav>
  )
}

export default NavBar
