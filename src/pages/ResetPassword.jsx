import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { CustomButton, Loading, TextInput } from '../component';
import { AiOutlineMail } from 'react-icons/ai';
import { RiArrowLeftDoubleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

function ResetPassword() {
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {};
  return (
    <div className='w-full h-[100vh] bg-primary flex items-center justify-center p-6'>
        <div className='bg-bgColor w-full md:w-2/5 2xl:w-1/4 px-10 py-12  flex flex-col gap-2 items-center justify-center'>
            <p className='text-ascent-1 text-3xl font-black'>Forget Password</p>
            <span className='text-sm text-ascent-2 text-center'>Enter your Email during Registration and w’ll send you instructions
to reset your password</span>

            <form onSubmit={handleSubmit(onSubmit)}
            className='py-4 flex flex-col gap-5 w-full'
            >
                  {/* Email field  */}
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

               {/* Error Message if something goes wrong */}
               {
                errMsg?.message && (
                  <span className={`text-sm ${errMsg?.status === "failed" ? "text-[#f64949fe]" : "text-[#2ba150fe]"}`}>{errMsg?.message}</span>
                )}

                  {/* Submit button wit loader  */}
                  {
                  isSubmitting ? <Loading /> : <CustomButton 
                  type="submit"
                  containerStyles={`inline-flex justify-center rounded-md bg-blue px- py-4 text-base font-medium text-white outline-none`}
                  title='Submit'
                  />
                }
            </form>
            <Link
            to='/login'
            className='flex items-center gap-4'>
              <RiArrowLeftDoubleLine className='text-ascent-1'/>
              <span className='text-ascent-1'>Back to log in</span>
            </Link>
        </div>
    </div>
  )
}

export default ResetPassword
