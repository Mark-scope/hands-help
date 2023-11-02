import React from 'react';
import Btn from '../component/CustomButton.jsx';
import home1 from '../assets/images/image1.png'
import home2 from '../assets/images/image2.png'
import home3 from '../assets/images/image3.png'
import logo from '../assets/logo.png'
// import HiOutlineMenuAlt2 from 'react-icons'

const Home = () => {
  return (
    <div className='w-full relative'>
      {/* Navbar */}
      <nav className='  barder-b border-gray-100 absolute top-0 left-0 right-0' >
        <div className=' md:px-12 md:flex md:items-center md:justify-between w-full'>
          <div className='flex items-center justify-between'>
            <a className='flex items-center'>
              <img src={logo} className='w-50' alt="" />
            </a>
          </div>
          <div>
            <ul className='p-5 z-10 absolute bg-white/80 backdrop-blur w-full left-0 py-4 opacity-0 top-[-400px] 
            transition-all ease-in duration-500 md:p-0 md:flex md:items-center md:space-x-8 md:static md:w-auto 
            md:opacity-100'>

              <li className='md:my-0'>
                <a href=''>
                  <Btn 
                    title='Log in' 
                    containerStyles='w-full bg-bgColor px-5 py-2 text-black w-fit hover:secondary hover:drop-shadow-md 
                    transition duration-300 ease-in-out font-semibold rounded' 
                    type='button' 
                    onClick='' />
                </a>
              </li>
              <li className='md:my-0'>
                <a href=''>
                  <Btn 
                      title='Sign Up' 
                      containerStyles='w-full bg-blue px-5 py-2 text-white w-fit hover:secondary hover:drop-shadow-md 
                      transition duration-300 ease-in-out rounded' 
                      type='button' 
                      onClick='' />
                </a>
              </li>

            </ul>
          </div>

        </div>


      </nav>


      {/* Hero section */}
      <div className='flex flex-auto w-full h-screen gap-10 p-10 '>
        {/* texts */}
        <div className='flex w-full flex-col justify-center px-12'>

          <h1 className='text-5xl py-4 font-bold leading-snug text-blue'>Empowering Connections,<br></br> Bridging Worlds</h1>
          <h3 className='text-3xl py-4 font-semibold text-blue mx'>Where Community Meets Compassion</h3>
          <p className='text-ascent py-3'>Welcome to HandsHelp Connect, HandsHelp Connect unites
            the deaf and mute community with compassionate volunteers, 
            ensuring no one feels unheard. Join us in fostering equality 
            through communication.</p>
          <Btn 
            title='Join Community' 
            containerStyles='bg-blue px-8 py-4 my-8 text-white w-fit hover:secondary hover:drop-shadow-md transition duration-300 ease-in-out ' 
            iconRight='' 
            type='button' 
            onClick='' />

        </div>

        {/* pics */}
        <div className='flex justify-center w-full  pt-28 overflow-hidden'>
          <div className=''>
            <img src={home1} alt="" className='mx-3 my-5' />
            <img src={home2} alt="" />
          </div>
          <div>
            <img src={home3} alt="" className='mx-3 my-5'/>
            <img src={home3} alt="" />
          </div>
        </div>


      </div>

      {/* stats */}
      <div className='bg-blue p-20 flex justify-between'>
        <div className='flex items-center'>
          <h5 className='text-3xl text-white '>Trusted by over 1,000+ Users and Volunteers Worldwide</h5>
        </div>

        <div className='flex justify-evenly w-1/2'>
          <div>
            <h3 className='text-5xl  font-semibold text-white'>400+</h3>
            <p className='text-2xl py-2 font-normal text-white'>Users</p>
          </div>
          <div>
            <h3 className='text-5xl font-semibold text-white'>700+</h3>
            <p className='text-2xl py-2 font-normal text-white'>Volunteers</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home