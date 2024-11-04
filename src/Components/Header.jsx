import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <div id='header'>
      <div style={{ float: 'left' }}>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <ul className='upper'>
          <li>
            <Link to="/">TALENT HUNT</Link>
            <button><Link to ="/Login"></Link>LOGIN</button>
          </li>
        </ul>
        <nav>
          <label for="drop" class="toggle" style={{float:'right'}}>☰</label>
          <input type="checkbox" id="drop" />
          <ul class="menu">
            <li>
              <label for="drop-1" class="toggle">MENTORSHIP PROGRAM +</label>
              <a >MENTORSHIP PROGRAM</a>
              <input type="checkbox" id="drop-1" />
              <ul>
                <li>
                  <label for="drop-2" class="toggle">Computer Science +</label>
                  <a >Computer Science</a>
                  <input type="checkbox" id="drop-2" />
                  <ul>
                    <li><a >Full Stack Development</a></li>
                    <li><a >Full Stack Development</a></li>
                    <li><a >Full Stack Development</a></li>
                  </ul>
                </li>
                <li>
                  <label for="drop-3" class="toggle">Electronics/Electrical +</label>
                  <a >Electronics/Electrical</a>
                  <input type="checkbox" id="drop-3" />
                  <ul>
                    <li><a >Embedded System</a></li>
                  </ul>
                </li>
                <li>
                  <label for="drop-4" class="toggle">Mechanical/Civil +</label>
                  <a >Mechanical/Civil</a>
                  <input type="checkbox" id="drop-4" />
                  <ul>
                    <li><a >Auto Cad</a></li>
                  </ul>
                </li>
                <li>
                  <label for="drop-5" class="toggle">Management +</label>
                  <a >Management</a>
                  <input type="checkbox" id="drop-5" />
                  <ul>
                    <li><a >Bussiness Analytics</a></li>
                  </ul>
                </li>
                <li>
                  <label for="drop-6" class="toggle">Medical +</label>
                  <a >Medical</a>
                  <input type="checkbox" id="drop-6" />
                  <ul>
                    <li><a >Nano Technology and Genetic Engineering</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a >ADVANCE PROGRAM</a></li>
            <li><a >FEE STRUCTURE</a></li>
            <li><a >COLLABRATION</a></li>
            <li><a >CAREER</a></li>
          </ul>

        </nav>



      </div>


    </div>
  )
}

export default Header