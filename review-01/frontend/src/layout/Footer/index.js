import React from 'react'
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

import './footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>

      <div>
        <h3>Services</h3>
        <nav className="footer-links">
          <Link>Service1</Link>
          <Link>Service2</Link>
          <Link>Service3</Link>
          <Link>Service4</Link>
          <Link>Service5</Link>
          <Link>Service6</Link>
        </nav>
      </div>

      <div>
        <h3>Quick links</h3>
        <nav className="footer-links">
          <Link>Home</Link>
          <Link>About us</Link>
          <Link>Blogs</Link>
          <Link>Services</Link>
          <Link>Contact us</Link>
        </nav>
      </div>

      <div>
        <h3>About us</h3>
        <nav className="footer-links">
          <Link>About us</Link>
          <Link>Client Successes</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
