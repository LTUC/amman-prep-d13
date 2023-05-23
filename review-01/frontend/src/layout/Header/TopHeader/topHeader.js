import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

function TopHeader() {
  return (
    <div className='top-header'>
      <p>Learning Center</p>
      <div className='contact-info'>
        <Link>info@asac.jo</Link>
        <Link>+9763443223123</Link>
        <div className="social-icon">
          <Link><i class="fa-brands fa-facebook"></i></Link>
          <Link><i class="fa-brands fa-twitter"></i></Link>
          <Link><i class="fa-brands fa-linkedin"></i></Link>
          <Link><i class="fa-brands fa-youtube"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
