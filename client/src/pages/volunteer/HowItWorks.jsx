import React from 'react' 
import TopBar from '../../component/TopBar'
import heropic from '../../assets/images/hands-help.jpg'

function HowItWorks() {
  return (
    <div className='h-screen'>
        <div className='px-6 py-4 shadow'>
            <TopBar   />
        </div>

        <div className='flex flex-col items-center ' >

            <div className='w-full h-[300px] flex justify-center items-center bg-blue2 bg-center bg-cover bg-no-repeat bg-blend-screen ' style={{backgroundImage: `url(${heropic})`}}>
                <h1 className='text-3xl py-4 font-bold leading-snug text-white '>How Hands <br className='hidden'/> Help Works</h1>
            </div>

            <p className='text-center my-7 text-xl md:px-60'>Hands Help is an online platform that connects the deaf/mute community with volunteers (that's people are
                able to talk and sign). As a volunteer, these are the steps to take note of in order to 
                communicate with deaf/mute </p>

            <ul className='m-4'>
                
                <li className='text-left m-1'>You'd recieve a call anytime deaf/mute person places a call </li>
                <li className='text-left m-1'>Just like bolt or uber when you pick a call other volunteers are withdrawn from picking the call </li>
                <li className='text-left m-1'>If you are not able to pick it don't worry other Volunteers will pick up </li>
            </ul>

            <p className='bg-blue2 text-white my-9 mx-5 md:mt-9 p-4 rounded-xl'>
                <span className='font-bold text-xl  text-white pr-3'>Please Note:</span> 
                If you don't get a call in the first 2-3 weeks don't be bothered you will recieve one 
                soon if someone needs you
            </p>
        </div>
    </div>
  )
}

export default HowItWorks