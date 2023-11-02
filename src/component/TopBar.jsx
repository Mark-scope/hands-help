import React from 'react'
import logo from '../assets/logo.png'
import help from '../assets/icons/help.png'
import notification from '../assets/icons/notification.png'
import profileIcon  from '../assets/icons/profile.png'
import TextInput from '../component/TextInput.jsx'

const TopBar = () => {
  return (
    <div className='flex justify-between align-middle px-10 py-5 shrink '>

      {/* logo */}
      <div>
        <img src={logo} alt="" />
      </div>

      {/* search tool */}
      <div>
        <TextInput className='w-50px h-10px' type='text' placeholder='Search' name='search' />
      </div>

      {/* icons */}
      <div className='flex'>

        <div className='flex justify-center align-middle p-4 bg-white rounded-full shadow-lg m-2'>
          <img src={help} alt="" />
        </div>
        <div className='flex justify-center align-middle p-4 bg-white rounded-full shadow-lg m-2'>
          <img src={notification} alt="" />
        </div>
        <div className='flex justify-center align-middle p-4 bg-white rounded-full shadow-lg m-2'>
          <img src={profileIcon} alt="" />
        </div>
        
      </div>

    </div>
  )
}

export default TopBar