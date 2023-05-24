import React from 'react'
import { Link } from 'react-router-dom'

import './description.scss'

function AboutDescription() {
  return (
    <section className='about-page-description'>
      <section className="inner-section">
        <div className="about-page-image">
          <img src="https://sitquije.com/wp-content/uploads/2020/08/geno-oracle.jpg" alt="" />
        </div>
        <div className="about-page-content-text">
          <h3>Oracle E-Dusiness Suite</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis impedit ipsa voluptatem odio, corrupti explicabo quibusdam libero eos cupiditate ut temporibus maxime est aperiam nostrum labore molestiae quam voluptatum? Id!</p>
          <div className='about-services'>
            <div>
              <i class="fa-solid fa-gear"></i>
              <p>Service1</p>
            </div>
            <div>
              <i class="fa-solid fa-gear"></i>
              <p>Service1</p>
            </div>
            <div>
              <i class="fa-solid fa-gear"></i>
              <p>Service1</p>
            </div>
            <div>
              <i class="fa-solid fa-gear"></i>
              <p>Service1</p>
            </div>
          </div>
          <div className='about-call-to-action'>
            <Link>Read more</Link>
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutDescription
