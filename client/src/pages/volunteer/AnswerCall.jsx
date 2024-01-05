import React from 'react';
import ansCall from '../../assets/icons/AnswerCall.png';
import endCall from '../../assets/icons/endCall.png';
import Callbg from '../../assets/Callbg.png';


function AnswerCall() {
  return (
    <div className='flex flex-col items-center justify-end h-screen bg-center bg-cover bg-no-repeat '
    style={{backgroundImage: `url(${Callbg})`}}>
        <h3 className='text-4xl mb-40 md:mb-60 text-center text-white drop-shadow-2xl font-semibold px-20'>Reason For Call{}</h3>
        <div className='flex space-x-20'>
            <img src={ansCall} alt='' name='' className='p-4 bg-[#37E433] rounded-full mb-20'/>
            <img src={endCall} alt='' name='' className='p-4 bg-Red rounded-full mb-20'/>

        </div>

    </div>
  )
}

export default AnswerCall;