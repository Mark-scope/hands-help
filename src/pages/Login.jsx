import React from 'react';
import TextInput from '../component/TextInput.jsx'
import Btn from '../component/CustomButton.jsx'
import loginImg from '../assets/images/login.png'

const Login = () => {
  return (
    <div className='flex w-100% flex-1 '>
      {/* form */}
      <div className='w-1/2 flex-0.5 flex flex-auto justify-center items-center'>
        <img src="" alt="" />

        <div>
          <h1 className='text'>Log into your Account</h1>
          <p>Welcome back</p>

          <div>
            <TextInput type='text' placeholder='Email' name='search' />
            <TextInput type='text' placeholder='Password' name='search' />
          </div>

          <div className='flex justify-between'>
            <div className='flex'>          
              <TextInput className='w-50px h-10px' type='checkbox' name='rememberMe' />
              <p>Remember me</p>
            </div>

            <p>Forget Password</p>
          </div>

          <Btn title='Log in' containerStyles='bg-blue px-5 py-2 text-white ' iconRight='' type='button' onClick='' />



        </div>

      </div >

      {/* pic */}
      <div className="w-1/2" 
      // style="background-image: url('/assets/images/login.png')"
      >
          <img src={loginImg} alt="" />
      </div>
      

    </div>
  )
}

export default Login