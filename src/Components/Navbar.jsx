import React from 'react'
import Header1 from './Header1'
import Sidebar from './Sidebar'

function Navbar({children}) {
  return (
    <div>
    <div >
    <Header1 />
    </div>
    <div className='flex flex-row'>
        <Sidebar />
    <div>
        {children}
    </div>
    </div>
    </div>
  )
}

export default Navbar