import React from 'react';
import ansCall from '../assets/icons/AnswerCall.png';
import endCall from '../assets/icons/endCall.png';
import Callbg from '../assets/Callbg.png';


function CallSearch() {
  return (
    <div className='flex flex-col items-center justify-end h-screen bg-center bg-cover bg-no-repeat px-10'
    style={{backgroundImage: `url(${Callbg})`}}>
        <div className='flex justify-center w-full mb-40 md:mb-60 '>
        <h3 className='text-4xl text-center text-white drop-shadow-2xl font-semibold'>Searching for Volunteer</h3>
        <div className='ml-4 flex items-center pt-2'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        </div>
        </div>
        <img src={endCall} alt='' name='' className='p-4 bg-Red rounded-full mb-20'/>

    </div>
  )
}

export default CallSearch;