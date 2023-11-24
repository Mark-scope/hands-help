import React, { useState } from 'react'
import TextInput from '../component/TextInput';
import CustomButton from '../component/CustomButton';
import { HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Loading from './Loading';

function ChangePassword() {
  const [showPassword, setShowPassword] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {

  }

  return (
    <div className='md:m-[20px] px-[20px] py-[60px] md:p-[60px] bg-white rounded '>
      <h3 className='text-blue text-[24px] font-semibold '>Change Password</h3>


      <div className='md:py-[40px]'>
        <form onSubmit={handleSubmit(onSubmit)}
          className='py-8 flex flex-col gap-5'>

          {/* Password field  */}
          <div className='relative'>
            <TextInput
              type={showPassword ? "text" : "password"}
              name="curpassword"
              placeholder="Current Password"
              styles="w-full"
              register={register("curpassword", {
                required: "Current Password is required"
              })}
              error={errors.curpassword ? errors.curpassword.message : ''}
            />


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

          <div className='flex md:flex-row flex-col gap-5'>
          <div className='relative w-full'>
            <TextInput
              type={showPassword ? "text" : "password"}
              name="newpassword"
              placeholder="New Password"
            
              styles="w-full"
              register={register("newpassword", {
                required: "New Password is required"
              })}
              error={errors.newpassword ? errors.newpassword.message : ''}
            />


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
          <div className='relative w-full'>
            <TextInput
              type={showPassword ? "text" : "password"}
              name="cpassword"
              placeholder="Confirm Password"
        
              styles="w-full"
              register={register("cpassword", {
                required: "Confirm Password is required",
                validate: (value) => value === watch('password') || "Passwords do not match"
              })}
              error={errors.cpassword ? errors.cpassword.message : ''}
            />


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
          </div>

          <div>

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
              containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-4 hover:opacity-90 transition-all ease-linear text-base font-medium text-white outline-none w-fit`}
              title='Save'
            />
          }
        </form>
      

      </div>

    </div>
  )
}

export default ChangePassword