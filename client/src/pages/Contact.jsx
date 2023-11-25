import React, { useState } from 'react'
import heropic from '../assets/images/hands-help41.png'
import { useForm } from "react-hook-form"
import { CustomButton, Loading, TextInput } from '../component'
import { useDispatch } from 'react-redux'
import { HiOutlineEyeOff } from 'react-icons/hi'
import { HiOutlineEye } from 'react-icons/hi2'


function Contact() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onChange",
    });
  
    const onSubmit = async (data) => {
      // Handle form submission
    };
  
    const [errMsg, setErrMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
  
    return (
      <div className='flex h-screen flex-col items-center pt-20 bg-center bg-cover bg-no-repeat bg-blend-screen' style={{ backgroundImage: `url(${heropic})` }}>
        <h1 className='text-3xl py-4 font-bold leading-snug text-gray'>Get In Touch</h1>
        <p>Having a problem? Don't hesitate to contact us</p>
  
        <div>
          <div className='py-10 md:px-80 px-5 w-full'>
            <form onSubmit={handleSubmit(onSubmit)} className='py-4 block w-[40rem]'>
  
              <TextInput
                type="text"
                name="fullName"
                placeholder="Full Name"
                styles="w-full"
                register={{
                  ...register("fullName", {
                    required: "Full name is required",
                  }),
                }}
                error={errors.fullName ? errors.fullName.message : ''}
              />
  
              <TextInput
                type="subject"
                name="subject"
                placeholder="Subject"
                styles="w-full"
                register={{
                  ...register("subject", {
                    required: "Subject is required",
                  }),
                }}
                error={errors.subject ? errors.subject.message : ''}
              />
  
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full py-2 px-5 mt-2 bg-bgColor1 rounded-lg border  resize-none"
                rows={6}
                {...register("message", {
                  required: "Message is required",
                  maxLength: {
                    value: 500,
                    message: "Message cannot exceed 500 characters",
                  },
                })}
              />
  
              {errors.message && (
                <span className="text-sm text-[#f64949fe]">{errors.message.message}</span>
              )}
  
              {errMsg?.message && (
                <span className={`text-sm ${errMsg?.status === "failed" ? "text-[#f64949fe]" : "text-[#2ba150fe]"}`}>
                  {errMsg?.message}
                </span>
              )}
  
            <div className='mt-5'>
            {isSubmitting ? (
                <Loading />
              ) : (
                <CustomButton
                  type="submit"
                  containerStyles={`w-fit rounded-md bg-blue px-8 py-4 hover:opacity-90 transition-all ease-linear text-base font-medium text-white outline-none `}
                  title='Send Message'
                />
              )}
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;