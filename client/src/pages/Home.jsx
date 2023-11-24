import React from 'react';
import Btn from '../component/CustomButton.jsx';
import home1 from '../assets/images/image1.png'
import home2 from '../assets/images/image2.png'
import home3 from '../assets/images/image3.png'
import home4 from '../assets/images/hands-help.jpg'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
// import HiOutlineMenuAlt2 from 'react-icons'

const Home = () => {
  return (
    <div className='w-full relative'>
      {/* Navbar */}
      <nav className=' absolute top-0 left-0 right-0' >
        <div className=' py-1 md:px-12 px-4 md:flex md:items-center md:justify-between w-full'>
          <div className='flex items-center gap-4 justify-between w-full'>
            <Link to='/' className='flex items-center'>
              <img src={logo} className='w-[100px]' alt="" />
            </Link>
            <ul className='p-5 z-10 bg-white/80 backdrop-blur w-full 
             
             
            transition-all ease-in duration-500  flex items-center gap-4 justify-end
           '>

              <li className=''>
                <Link to='/login'>
                  <Btn 
                    title='Log in' 
                    containerStyles='w-full bg-bgColor px-5 py-2 text-black w-fit hover:secondary hover:drop-shadow-md 
                    transition duration-300 ease-in-out font-semibold rounded' 
                    type='button' 
                    onClick='' />
                </Link>
              </li>
              <li className=''>
                <Link to='/register'>
                  <Btn 
                      title='Sign Up' 
                      containerStyles='w-full bg-blue px-5 py-2 text-white w-fit hover:secondary hover:drop-shadow-md 
                      transition duration-300 ease-in-out rounded' 
                      type='button' 
                      onClick='' />
                </Link>
              </li>

            </ul>
          </div>
          <div>
          </div>

        </div>


      </nav>


      {/* Hero section */}
      <div className='flex md:flex-row flex-col gap-10 px-10 pt-32'>
        {/* texts */}
        <div className='flex w-full flex-col md:px-6'>

          <h1 className='md:text-5xl text-3xl py-4 font-bold leading-2- text-blue'>Empowering Connections,<br />Bridging Worlds</h1>
          <h3 className='text-3xl py-4 font-semibold text-blue mx'>Where Community Meets Compassion</h3>
          <p className='text-ascent py-3'>Welcome to HandsHelp Connect, HandsHelp Connect unites
            the deaf and mute community with compassionate volunteers, 
            ensuring no one feels unheard. Join us in fostering equality 
            through communication.</p>
          <Btn 
            title='Download App' 
            containerStyles='bg-blue px-8 py-4 my-8 text-white w-fit hover:secondary hover:drop-shadow-md transition duration-300 ease-in-out ' 
            iconRight='' 
            type='button' 
            onClick='' />

        </div>

        {/* pics */}
        <div className='flex w-full gap-4 overflow-hidden lg:h-screen mb-10'>
            <div className='flex flex-col gap-3 w-full justify-start h-fit'>
                <div className='bg-Red lg:w-72 md:w-44 w-32 lg:h-80 overflow-hidden'>
                    <img src={home1} className='w-full'/>
                </div>
                <div className='bg-Red lg:w-72 md:w-44 w-32'>
                    <img src={home2} className='w-full md:h-full h-fit'/>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-full justify-start h-fit'>
                <div className='bg-Red  lg:w-72 lg:h-80 w-32 md:w-44 overflow-hidden'>
                    <img src={home3} className='lg:w-full h-fit'/>
                </div>
                <div className='bg-Red lg:w-72 lg:h-fit md:w-44 w-32'>
                    <img src={home4} className='w-full h-fit'/>
                </div>
            </div>
            
           
            
        </div>


      </div>

      {/* stats */}
      <div className='bg-blue md:p-20 p-10 flex md:justify-between md:flex-rol flex-col gap-5 justify-center'>
        <div className='flex items-center'>
          <h5 className='md:text-3xl text-xl text-white '>Trusted by over 1,000+ Users and Volunteers Worldwide</h5>
        </div>

        <div className='flex lg:justify-evenly justify-between md:w-1/2'>
          <div>
            <h3 className='md:text-5xl text-3xl  font-semibold text-white'>400+</h3>
            <p className='md:text-2xl text-lg py-2 font-normal text-white'>Users</p>
          </div>
          <div>
            <h3 className='md:text-5xl text-3xl font-semibold text-white'>700+</h3>
            <p className='text-2xl py-2 font-normal text-white'>Volunteers</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home