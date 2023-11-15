import React from 'react'
import TextInput from '../component/TextInput';
import CustomButton from '../component/CustomButton';

function AccountSettings() {
  return (
    <div className='m-[20px] px-[20px] py-[60px] md:p-[60px] bg-white rounded '>
      <h3 className='text-blue text-[24px] font-semibold '>Account Settings</h3>
      {/* Personal Details */}
      <div className='py-[40px]'>
        <h4>Personal details</h4>  
        <div className='flex space-x-12 mt-3'>
          <p className='ml-4 text-LGray'>janeappiah3@gmail.com</p> 
          <p className='cursor-pointer hover:underline'>change</p>                
        </div>

      </div>      
      <div className='md:py-[40px]'>
        <h4>Password</h4>                   
       
        <div className='flex md:flex-row flex-col pt-[10px] md:space-x-4 space-y-4 '>
          <TextInput 
              type="text"
              name="NewPassword"
              placeholder="New Password"
              styles="w-full  h-12"
          />
          <TextInput 
              type="text"
              name="CurrentPassword"
              placeholder="Current Password"
              styles="w-full h-12"
          />
        </div>
        <CustomButton 
            title='Save Password' 
            containerStyles='h-8 px-[20px] py-5 my-3 bg-blue rounded-[10px] justify-center items-center inline-flex text-white text-base font-normal'  
            type='button' />

      </div>      

    </div>
  )
}

export default AccountSettings