import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <header className='border-b border-black bg-white sticky top-0 z-50'>
      <div className='size h-[55px] flex items-center justify-between max-w-5xl mx-auto'>
        <img
          className="h-[2.2rem]"
          src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
          alt="logo"
        />

        <div className='flex items-center gap-5'>
          <nav>
            <div className='hidden text-sm sm:flex items-center gap-5'>
              <Link to="#">Our Story</Link>
              <Link to="#">Membership</Link>
              <Link to="#">Write</Link>
              <Link to="#">Sign In</Link>
              <Link to="#" className="bg-black text-white px-4 py-2 border rounded-full">Get Started</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default header;