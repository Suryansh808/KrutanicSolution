import React from 'react';
import ShuffleHero from '../Components/ShuffleHero';
import { color } from 'framer-motion';
import ClientsCarousel from '../Components/our_alumni';

const HomePage = () => {
  return (
    <div id='landingpage'>
      <div style={{ backgroundColor: 'black', paddingBottom: '100px' }}>
        <ShuffleHero />
        <div style={{ color: 'white', textAlign: 'center',  padding: '20px' }}>
          <h2 style={{fontSize:'24px'}}>EXPLORE NOW</h2>
          <p>We empower tech careers with education, training, and placements.</p>
        </div>
      </div>
      <div style={{position:'relative',top:'-80px',textAlign:'center'}}>
      <div className='process'>

      <h2><span>&#128221;</span> <br/> JOIN US</h2>
      <h2><span>&#128214;</span> <br/>LEARN</h2>
      <h2> <span>&#128188;</span><br/>GET PLACED</h2>
      </div>
      <button className='exp-btn'>EXPLORE ALL</button>
      </div>

      <div className='why-choose' >
        <h1 className='changable_by_admin'>Krutanic Provides ?</h1>
        <h2>Industry-Relevant Curriculum</h2>
        <p>Our courses are designed in collaboration with industry experts.</p>
        <br/>
        <h2>Expert Instructors</h2>
        <p>Learn from seasoned professionals with years of experience.</p>
        <br/>
        <h2>Hands-on Training</h2>
        <p>Get practical experience with real-world projects and case studies.</p>
        <br/>
        <h2>100% Job Placement Assistance</h2>
        <p>Our dedicated team helps you land your dream tech job.</p>
      </div>

      <div className='alumni'>
        <h1>Our Aluminee work at top MNC</h1>
        <ClientsCarousel />
        
       
      </div>


    </div>
  )
}
export default HomePage
