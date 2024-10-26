import React from 'react'

const Header = () => {
  return (
    <div className='bg-black text-white'>
     <div className='flex items-center justify-between w-full px-10 py-3 '>
        logo 
        <div className='flex items-center flex-wrap gap-4 '>
          <h1>Career</h1>
          <h1>Events</h1>
        </div>
        <button>LogIn</button>
     </div>
     <nav className='flex items-center  flex-wrap justify-center gap-10 pb-3'>
      <h1>Courses</h1>
      <h1>Fees</h1>
      <h1>About Us</h1>
      <h1>Collebration</h1>
     </nav>
    </div>
  )
}

export default Header
