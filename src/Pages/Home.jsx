import React from 'react'
import Navbar from '../Components/Navbar'
import Profile from '../Components/Profile'

function Home() {
  return (
    <Navbar >
    
    <div className='grid grid-cols-4 bg-[#EDEFF2]'>
        <div className='col-span-1 border-2 py-10'>
            <Profile />
        </div>

        <div className='col-span-3 border-2 border-black py-10 px-6'>
            <h1>sasassa</h1>
        </div>
    </div>
    </Navbar>
  )
}

export default Home