import React from 'react'
import "../styles/navbar.css"
import Menu from './Menu'
import logo from '../imgs/logo.png'
import searchImg from '../imgs/search.png'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <img className='logo' src={logo} alt='Instragram logo'/>
            <div className='search'>
                <img className='searchImg' src={searchImg} alt='Search icon'/>
                <span className='searchText'>Search</span>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default Navbar