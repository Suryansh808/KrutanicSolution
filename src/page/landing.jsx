import React from 'react';
import ShuffleHero from '../Components/ShuffleHero';
import { color } from 'framer-motion';
import ClientsCarousel from '../Components/our_alumni';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.webp';


const HomePage = () => {
  return (
    <div id='landingpage'>
      <div style={{ backgroundColor: 'black' }}>
        <ShuffleHero />
      </div>
      {/* Waves Container */}
      <div style={{ backgroundColor: 'black' }}>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      {/* Waves end */}
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{ fontSize: '30px', fontWeight: '600' }}>EXPLORE NOW</h2>
        <p>We empower tech careers with education, training, and placements.</p>
        <div className='process'>
          <h2><span>&#128221;</span> <br /> JOIN US</h2>
          <h2><span>&#128214;</span> <br />LEARN</h2>
          <h2> <span>&#128188;</span><br />GET PLACED</h2>
        </div>
        <button className='exp-btn'>EXPLORE ALL</button>
      </div>

      <div className='provide' >
        <div>
          <h1 >Krutanic Provides ?</h1>
          <h2><span>&#8667;</span>Industry-Relevant Curriculum</h2>
          <p>Our courses are designed in collaboration with industry experts.</p>
          <br />
          <h2><span>&#8667;</span>Expert Instructors</h2>
          <p>Learn from seasoned professionals with years of experience.</p>
          <br />
          <h2><span>&#8667;</span>Hands-on Training</h2>
          <p>Get practical experience with real-world projects and case studies.</p>
          <br />
          <h2><span>&#8667;</span>100% Job Placement Assistance</h2>
          <p>Our dedicated team helps you land your dream tech job.</p>
        </div>
        <div>
          <img src={img1} alt="why" />
        </div>

      </div>

      <div className='alumni'>
        <h1>Our Aluminee work at top MNC</h1>
        <ClientsCarousel />
      </div>
      {/* Waves Container */}
      <div style={{ backgroundColor: 'black',rotate:'180deg' }}>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            {/* <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" /> */}
            {/* <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" /> */}
            {/* <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" /> */}
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      {/* Waves end */}
      <div className='misvis'>
        <div className='mission'>
          <h1>OUR MISION</h1>
          <ul>
            <li> Expert faculty with real-world experience</li>
            <li>Comprehensive support for students</li>
            <li>Interactive learning approach</li>
            <li>Proven track record of success</li>
          </ul>
        </div>
        <div className='vission'>
          <h1>OUR VISION</h1>
          <p>Our vision is to be the leading provider of special education camps for programming, empowering students to achieve their full potential.</p>
          <br />
          <button>LEARN MORE</button>

        </div>
      </div>
      <div className='empower'>
        <div>
          <span >
            &#128480;</span>
          <p>Empower students with skills for success in the digital economy.</p>
        </div>
        <div>
          <span >&#128464;</span>
          <p>Deliver the best learning experience for success in the digital world.</p>
        </div>
        <div>
          <span >&#x2690;</span>
          <p>Foster innovation and creativity by encouraging students to think creatively</p>
        </div>
        <div>
          <span>&#128435;</span>

          <p>Be a catalyst for positive change, transforming the world one student at a time.</p>
        </div>
      </div>
      {/* Waves Container */}
      <div style={{ backgroundColor: 'black' }}>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            {/* <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" /> */}
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      {/* Waves end */}
      <div className='specialization'>
        <h1>| Specialization </h1>
        <div>
          <div>
            <h2>Special Education Campaign</h2>
            <p>Our special education camps are designed to provide students with the skills and knowledge they need
              to succeed in the digital economy. Our camps are led by expert faculty with real-world experience and
              are tailored to meet the unique needs of each student.</p>
          </div>
          <div style={{ padding: '20px' }}>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>

      <div className='whychoose'>
        <h1>| Why choose us</h1>
        <div>
          
          <div>

          </div>
          <div>
            <h2>Expert Faculty</h2>
           
          </div>

        </div>
              
        

      </div>



    </div>
  )
}
export default HomePage
