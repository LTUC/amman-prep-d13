import React from 'react'
import TopHeader from './TopHeader/topHeader'

import logo from '../../assets/images/logo.png';
import NavBar from '../../components/NavBar/navBar';

import './style.scss'

function Header() {
  return (
    <header>
      <TopHeader />
      <section className='main-header'>
        <img src={logo} alt="" />
        <NavBar />
      </section>
    </header>
  )
}

export default Header
