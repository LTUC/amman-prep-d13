import React from 'react'
import { Link } from 'react-router-dom'

import './about.scss';

function AboutSection() {
  return (
    <section className='about-section'>
      <section className="inner-section">
        <div className="top-about-section">
          <div className="about-image">
            <img src="https://assets.sunwingtravelgroup.com/image/upload/t_Fill-1200x675/g_auto%2Cc_lfill,q_auto,f_auto,w_1140,h_641/v1615577260/sunwing-prod/Web%20Replatform%20Project/OtherPhotos/AboutUs" alt="" />
          </div>
          <div className="about-content">
            <h2>About our client</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam expedita veritatis quia repudiandae consectetur doloribus pariatur debitis voluptatem assumenda. Magni tempore quibusdam praesentium earum quasi aspernatur nobis amet dolore.</p>
            <div>
              <Link to='/'>Read more</Link>

            </div>
          </div>
        </div>
        <div className="about-bottom-section">
          <div class="logos">
            <div class="logos-slide">
              <img src="https://e7.pngegg.com/pngimages/118/341/png-clipart-graphics-logo-graphic-design-high-tech-creative-design-technology.png" alt='' />
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hi-tech-logo-green-design-template-d57e7fb993808c268150e0da8633654e_screen.jpg?ts=1584477855" />
              <img src="https://download.logo.wine/logo/Tech_Mahindra/Tech_Mahindra-Logo.wine.png" />
              <img src="https://logos-world.net/wp-content/uploads/2021/11/Texas-Tech-Logo.png" />
              <img src="https://w1.pngwing.com/pngs/800/473/png-transparent-circle-design-adversity-quotient-logo-text-learning-academy-result-purple-thumbnail.png" />
              <img src="https://www.intelligentfin.tech/wp-content/uploads/sites/56/2022/05/Fin.tech-logo-01.png" />
              <img src="https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-technology-logo-computer-and-data-related-business-hi-tech-innovative-link-png-image_6268023.png" />
              <img src="https://assets-global.website-files.com/613baa7ad4f394142e65cb73/6228f3eb1016857d094821f1_BloomTech-Logo-Black.png" />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutSection
