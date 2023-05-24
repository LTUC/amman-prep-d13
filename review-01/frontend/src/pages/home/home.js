import React from 'react'
import Hero from './sections/hero/Hero'
import AboutSection from './sections/about/AboutSection'
import News from './sections/news/news'
import Services from './sections/services/Services'
import Subscribe from './sections/subscribe/Subscribe'

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <News />
      <Subscribe />
      {/* <About />
      <Services />
      <News />
      <Subscribe /> */}
    </>
  )
}

export default Home
