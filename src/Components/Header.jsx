import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <div id='header'>
      <div className='upper'>
        <ul>
          <li>
            <Link to="/">CAREER</Link>
            <Link to="/">TALENT HUNT</Link>

            <button><Link to="/">LOGIN</Link></button>
          </li>
        </ul>
      </div>
      <div className='lower'>
        <div className='nav'>
          <img src={logo} alt="Logo" />
          <ul>
            <li>
              <Link to="/">MENTORSHIP PROGRAM</Link>
              <Link to="/">ADVANCE PROGRAM</Link>
              <Link to="/">FEE STRUCTURE</Link>
              <Link to="/">ABOUT US</Link>
              <Link to="/">COLLABRATION</Link>
            </li>
          </ul>
        </div>
       

      </div>


    </div>
  )
}

export default Header