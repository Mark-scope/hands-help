import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { TbSocial } from 'react-icons/tb'
import { BsShare } from 'react-icons/bs'
import { AiOutlineInteraction } from 'react-icons/ai'
import { ImConnection } from "react-icons/im"
import { CustomButton, Loading, TextInput } from '../component'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { RegiserImg, logo } from '../assets'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
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
    <div className='bg-primary w-full h-[100vh] flex items-center justify-center'>
     
        {/* LEFT  */}
        <div className='w-full lg:w-1/2 h-full px-32 py-10 2xl:px-20 flex flex-col justify-center'> 
            <div className='w-full flex gap-2 items-center mb-20 justify-center'>
              <img src={logo} alt='logo' />
              
            </div>

            <p className='text-ascent-1 text-2xl font-black font-poppins'>
              Create an Account
            </p>
            <span className='text-sm mt-2 text-ascent-2'>Pls enter your details</span>

            <form onSubmit={handleSubmit(onSubmit)}
            className='py-8 flex flex-col gap-5'>
              <div className='flex gap-5 items-center justify-center'>
              <div className='flex items-center gap-2'>
                <input type='checkbox' className='accent-blue'/>
                <span className='text-ascent-2'>User</span>
              </div>
              <div className='flex items-center gap-2'>
                <input type='checkbox' className='accent-blue'/>
                <span className='text-ascent-2'>Volunteer</span>
              </div>
              </div>
                 {/* Name field  */}
                 <TextInput 
              type="text"
              name="fullName"
              placeholder="Full Name"
              styles="w-full rounded-lg"
              icon = {<AiOutlineUser size={20} className='text-[#616A9A]'/>}
              register={
                register("fullName", {
                  required: "Full name is required"
                })
              }         
              error={errors.fullName ? errors.fullName.message : ''}
              />

              {/* Email field  */}
              <TextInput 
              type="email"
              name="email"
              placeholder="Email"
              styles="w-full rounded-lg"
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
                  title='Sign Up'
                  />
                }
            </form>
            <p className='text-ascent-2 text-sm text-center'>
              Already have an account ?
              <Link
              to='/login'
              className='text-blue font-semibold ml-2 cursor-pointer'>
                  Sign In
              </Link>
            </p>
        </div>

        {/* RIGHT  */}
        <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue'>       
              <img src={RegiserImg} alt='Sign Up Bg' className=' object-cover w-full h-full' />
                
        </div>
      </div>
  )
}

export default Login
