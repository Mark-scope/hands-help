import React from 'react';
import TextInput from '../component/TextInput';
import CustomButton from '../component/CustomButton';
import { user } from '../assets';

function Profile() {
  return (
    <div className='m-[20px] md:p-[60px] px-[20px] py-[60px] bg-white rounded '>

      {/* User pic and info */}
      <div className='md:flex flex flex-col justify-center items-center'>
        <div>
          <img src={user} className='w-[140px] h-[140px] rounded-full' />
        </div>
        <div className='flex flex-col justify-center md:items-start items-center mt-5'>
          <h5>Jane Appiah</h5>
          <p>janeappiah3@gmail.com</p>
          <div className='flex'>
            <CustomButton 
            title='Upload now' 
            containerStyles='h-8 px-3 md:px-[20px] py-5 my-3 bg-blue rounded-[10px] justify-center items-center inline-flex text-white text-base font-normal'  
            type='button' />
            <CustomButton 
            title='Delete image' 
            containerStyles='h-8 px-3 md:px-[20px] py-5 my-3 mx-[10px] bg-Red rounded-[10px] justify-center items-center inline-flex text-white text-base font-normal'  
            type='button' />

          </div>
        </div>

      </div>

      {/* Personal Details */}
      <div className='py-[40px]'>
        <h4 className='text-blue'>Personal Details</h4>
        <TextInput 
              type="text"
              name="fullname"
              placeholder="Full name"
              styles="w-full h-12 "
              />

        <div className='flex pt-[10px] space-x-4 '>
          <TextInput 
              type="text"
              name="Email"
              placeholder="Email"
              styles="w-full  h-12"
          />
          <TextInput 
              type="text"
              name="PhoneNumber"
              placeholder="Phone Number"
              styles="w-full h-12"
          />
        </div>

        <div className='mt-[20px]'>
          <span className=' text-LGray'>Gender</span>
          <div>
            <label className='text-blue' >
              Male
              <input type='radio' className='ml-[5px]' name='Male' />
            </label>
            <label className='ml-[30px] text-blue'>
              Female
              <input type='radio' className='ml-[5px]' name='Female' />
            </label>
          </div>
        </div>

      </div>

      {/* Next Of Kin */}
      <div className='pt-[40px]'>
        <h4 className='text-blue'>Next Of Kin</h4>
        <TextInput 
              type="text"
              name="NextOfKinfullname"
              placeholder="Full name"
              styles="w-full h-12 "
              />

        <div className='flex pt-[10px] space-x-4 '>
          <TextInput 
              type="text"
              name="NextOfKinEmail"
              placeholder="Email"
              styles="w-full  h-12"
          />
          <TextInput 
              type="text"
              name="NextOfKinPhoneNumber"
              placeholder="Phone Number"
              styles="w-full h-12"
          />

        </div>

        <div className='mt-[20px]'>
          <span className=' text-LGray'>Gender</span>
          <div>
            <label className='text-blue'>
              Male
              <input type='radio' className='ml-[5px]' name='Male' />
            </label>
            <label className='ml-[30px] text-blue'>
              Female
              <input type='radio' className='ml-[5px]' name='Female' />
            </label>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile;