import React from 'react'
import Header from './Header/header'
import Main from './Main/main'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  )
}

export default Layout
