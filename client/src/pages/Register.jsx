import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { CustomButton, Loading, TextInput } from '../component'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { RegiserImg, logo } from '../assets'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify({userType, fullName, email, password}),
      });
      if (response.ok) {
        // Successful registration logic
        console.log('Registration successful');
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    }catch (e) {
      console.error("error", e)
    }
  }


  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [location, setLocation] = useState('')
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('volunteer');
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='bg-[#fff] w-full h-[100vh] flex items-center justify-center'>

      {/* LEFT  */}
      <div className='w-full lg:w-1/2 h-full lg:px-32 px-8 py-10 2xl:px-20 flex flex-col justify-center'>
        <div className='w-full flex gap-2 items-center mb-10 justify-center'>
          <img src={logo} alt='logo' className='w-44' />

        </div>

        <p className='text-ascent-1 text-2xl font-black font-poppins'>
          Create an Account
        </p>
        <span className='text-sm mt-2 text-ascent-2'>Please enter your details</span>

        <form onSubmit={handleSubmit(onSubmit)}
          className='py-4 flex flex-col gap-2'>
          <div className='flex gap-5 items-center justify-center'>
            <div className='flex items-center gap-5'>
              {/* User radio button */}
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='accountType'
                  id='user-radio'
                  value='user'  // Add a unique value for the user option
                  className='accent-blue'
                  checked={userType === 'user'}
                  onClick={() => setUserType('user')}
                  {...register('accountType', { required: 'Please select an account type' })}
                />

                <label htmlFor='user-radio' className='text-ascent-2 cursor-pointer'>User</label>
              </div>
              {/* Volunteer radio button */}
              <div>

              </div>
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='accountType'
                  id='volunteer-radio'
                  value='volunteer'  // Add a unique value for the volunteer option
                  className='accent-blue'
                  checked={userType === 'volunteer'}
                  onClick={() => setUserType('volunteer')}
                  {...register('accountType', { required: 'Please select an account type' })}
                />

                <label htmlFor='volunteer-radio' className='text-ascent-2 cursor-pointer'>Volunteer</label>

              </div>

            </div>

            {errors.accountType && (
              <span className='text-sm text-[#f64949fe] mt-0.5'>{errors.accountType.message}</span>
            )}
          </div>
          {/* Name field  */}
          <TextInput
            type="text"
            name="fullName"
            placeholder="Full Name"
            styles="w-full rounded-lg"
            icon={<AiOutlineUser size={20} className='text-[#616A9A]' />}
            onChange={(e) => setFullName(e.target.value)}
            register={
              register("fullName", {
                required: "Full name is required"
              })
            }
            error={errors.fullName ? errors.fullName.message : ''}
          />

          {/* Email field  */}
          <div className='flex gap-5'>
            <TextInput
              type="email"
              name="email"
              placeholder="Email"
              styles="w-full rounded-lg"
              icon={<AiOutlineMail size={20} className='text-[#616A9A]' />}
              onChange={(e) => setEmail(e.target.value)}
              register={
                register("email", {
                  required: "Email Address is required"
                })
              }
              error={errors.email ? errors.email.message : ''}
            />
            <TextInput
              type="phone"
              name="phone"
              placeholder="Phone Number"
              styles="w-full rounded-lg"
              icon={<FiPhoneCall size={20} className='text-[#616A9A]' />}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <TextInput
              type="location"
              name="location"
              placeholder="Location"
              styles="w-full rounded-lg"
              icon={<AiOutlineMail size={20} className='text-[#616A9A]' />}
              register={
                register("location", {
                  required: "location  is required"
                })
              }
              onChange={(e) => setLocation(e.target.value)}
              error={errors.email ? errors.email.message : ''}
            />

          {/* Password field */}
          <div className='relative'>
            <TextInput
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              icon={<HiOutlineLockClosed size={20} className='text-[#616A9A]' />}
              styles="w-full"
              register={register("password", {
                required: "Password is required"
              })}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password ? errors.password.message : ''}
            />

            {/* Eye toggle for Password field */}
            <div
              onClick={() => setShowPassword(!showPassword)}
              className='cursor-pointer absolute top-[40%] right-5'
            >
              {showPassword ? (
                <HiOutlineEyeOff size={20} className='text-[#616A9A]' />
              ) : (
                <HiOutlineEye size={20} className='text-[#616A9A]' />
              )}
            </div>
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

export default Register
