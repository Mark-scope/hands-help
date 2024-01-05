import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { CustomButton, Loading, TextInput } from '../component'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { BgImage, loginImg, logo } from '../assets'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLockClosed } from 'react-icons/hi'

function Login() {
  const {
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async(data) => {

  }


  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className='bg-[#fff] w-full h-[100vh] flex items-center justify-center overflow-hidden'>     
        {/* LEFT  */}
        <div className='w-full lg:w-1/2 h-full lg:px-32 px-8 py-10 2xl:px-20 flex flex-col justify-center'> 
            <div className='w-full flex gap-2 items-center mb-20 justify-center'>
              <img src={logo} alt='logo' className='w-44' />
              
            </div>

            <p className='text-ascent-1 text-2xl font-black font-poppins'>
              Log in to your Account
            </p>
            <span className='text-sm mt-2 text-ascent-2'>Welcome back</span>

            <form onSubmit={handleSubmit(onSubmit)}
            className='py-8 flex flex-col gap-5'>
              {/* Email field  */}
              <TextInput 
              type="email"
              name="email"
              placeholder="Email"
              styles="w-full"
              icon = {<AiOutlineMail size={20} className='text-[#616A9A]'/>}
              register={
                register("email", {
                  required: "Email Address is required"
                })
              }         
              error={errors.email ? errors.email.message : ''}
              />

               {/* Password field  */}
               <TextInput 
              type="password"
              name="password"
              placeholder="password"
              icon = {<HiOutlineLockClosed size={20} className='text-[#616A9A]'/>}
              styles="w-full"
              register={
                register("password", {
                  required: "Password is required"
                })
              }         
              error={errors.password ? errors.password.message : ''}
              />

            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <input type='checkbox' className='accent-blue'/>
                <span className='text-ascent-2'>Remember Me</span>
              </div>
              <Link
                to='/reset-password'
                className='text-sm text-right text-blue font-semibold'
                >
                  Forget Password ?
                </Link>
            </div>
             
              {/* Error Message if something goes wrong */}
              {
                errMsg?.message && (
                  <span className={`text-sm ${errMsg?.status === "failed" ? "text-[#f64949fe]" : "text-[#2ba150fe]"}`}>{errMsg?.message}</span>
                )}

                {/* Submit button wit loader  */}
                {
                  isSubmitting ? <Loading /> : <CustomButton 
                  type="submit"
                  containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-4 hover:opacity-90 transition-all ease-linear text-base font-medium text-white outline-none`}
                  title='Login'
                  />
                }
            </form>
            <p className='text-ascent-2 text-sm text-center'>
              Don't have an account ?
              <Link
              to='/register'
              className='text-blue font-semibold ml-2 cursor-pointer'>
                  Create Account
              </Link>
            </p>
        </div>

        {/* RIGHT  */}
        <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue'>       
              <img src={loginImg} alt='Login Bg' className=' object-cover w-full h-full' />
                
        </div>
      </div>
  )
}

export default Login
