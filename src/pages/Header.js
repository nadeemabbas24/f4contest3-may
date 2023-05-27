import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div >HEADER</div>
        <nav>
            <Link to='/'>Login</Link>
            <Link to='signup'>Signup</Link>
            <Link to='profile'>Profile</Link>
        </nav>
    </div>
  )
}

export default Header