import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/games-list-logo.png'

const Header = () => (
    <nav className ='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
            <Link className='navbar-brand' to='/'><img id='logo' src={logo}/></Link>
        </div>
    </nav>
)

export default Header
