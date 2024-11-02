import React from 'react';
import ShuffleHero from '../Components/ShuffleHero';
import { color } from 'framer-motion';

const HomePage = () => {
  return (
    <div id='landingpage'>
      <div style={{ backgroundColor: 'black', paddingBottom: '100px' }}>
        <ShuffleHero />
        <div style={{ color: 'white', textAlign: 'center', backgroundColor: 'red', padding: '50px' }}>
          <h2>EXPLORE NOW</h2>
          <p>We empower tech careers with education, training, and placements.</p>
        </div>
      </div>
      <div className='card'>
        {/* <div>
          <h2>JOIN US</h2>
        </div>
        <div>
          <h2>LEARN</h2>
        </div>
        <div>
          <h2>GET PLACED</h2>
        </div> */}

      </div>


    </div>
  )
}
export default HomePage
