import React from 'react';
import {
  direction,
  bank,
  buying,
  police,
  health
} from './assets/icons/index';

function CallModel() {
  return (
    <div className='bg-white h-70 w-70'>
      <h3>For Direction</h3>
      <div className='flex  flex-col gap-2 bg-[#2BA4E7] px-4 w-96 py-12 rounded-lg items-center cursor-pointer sd'>
        <RiCustomerService2Line size={50} />
        <h1 className='text-white lg:text-3xl'> Need Assistance</h1>
      </div>
    </div>
  )
}

export default CallModel;