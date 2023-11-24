import React, { useState } from 'react';
import TextInput from '../component/TextInput';
import CustomButton from '../component/CustomButton';
import Loading from './Loading';
import { user } from '../assets';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import userImage from '../assets/images/image2.png';
import { NoProfile } from '../assets';

function Edit() {
  const {
    register: registerPersonal,
    handleSubmit: handleSubmitPersonal,
    formState: { errors: errorsPersonal },
  } = useForm({
    mode: "onChange",
  });

  const {
    register: registerEmergency,
    handleSubmit: handleSubmitEmergency,
    formState: { errors: errorsEmergency },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    // Implement your submit logic here
  };

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(userImage);
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = React.useRef(null); // Define the inputRef

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    // Implement your logic for uploading the image (e.g., send it to a server)
    // For demonstration purposes, we'll just reset the selected image
    setSelectedImage(null);
  };

  const handleDelete = () => {
    // Implement your logic for deleting the image
    setImagePreview(userImage); // Set the image to the default image or null if there is no default
    setSelectedImage(null);
  };

  return (
    <div className='m-[20px] md:p-[60px] px-[20px] py-[60px] bg-white rounded '>

      {/* User pic and info */}
      <div className='md:flex flex flex-col md:flex-row md:space-x-10 md:pl-11 justify-center items-center'>
        <div>
          {user ? (
            <img src={imagePreview} alt='User' className='w-[140px] h-[140px] rounded-full object-cover' />
          ) : (
            <img src={NoProfile} alt='No Profile' className='w-[140px] h-[140px] rounded-full object-cover ' />
          )}
        </div>
        <div className='flex flex-col justify-center md:items-start items-center mt-5'>
          <h5>Jane Appiah</h5>
          <p>janeappiah3@gmail.com</p>
          <div className='flex'>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
              ref={(input) => { inputRef.current = input; }}
            />

            <CustomButton
              title='Upload now'
              containerStyles='h-8 px-3 md:px-[20px] py-5 my-3 bg-blue rounded-[10px] justify-center items-center inline-flex text-white text-base font-normal'
              type='button'
              onClick={() => inputRef.current.click()}
            />
            <CustomButton
              title='Delete image'
              containerStyles='h-8 px-3 md:px-[20px] py-5 my-3 mx-[10px] bg-Red rounded-[10px] justify-center items-center inline-flex text-white text-base font-normal'
              type='button'
              onClick={handleDelete}
            />
          </div>
          {selectedImage && (
            <div>
              <p>Selected Image: {selectedImage.name}</p>
              <CustomButton
                title='Confirm Upload'
                containerStyles='h-8 px-3 md:px-[20px] py-5 my-3 bg-[#2BA4E7] rounded-[10px] justify-center items-center inline-flex text-white text-base font-normal'
                type='button'
                onClick={handleUpload}
              />
            </div>
          )}
        </div>
      </div>

      {/* Personal Details */}
      <div className='py-[40px]'>
        <h4 className='text-blue'>Personal Details</h4>
        <form onSubmit={handleSubmitPersonal(onSubmit)} className='flex flex-col gap-3'>
          <TextInput
            type="text"
            name="fullName"
            placeholder="Full Name"
            styles="w-full h-12"
            value="Jane Appiah"
            {...registerPersonal("fullName")}
          />

          <div className='flex md:flex-row flex-col flex-start gap-3'>
            <TextInput
              type="email"
              name="email"
              placeholder="Email"
              styles="w-full h-12"
              value="janeappiah3@gmail.com"
              {...registerPersonal("email")}
            />
            <TextInput
              type="phone"
              name="phone"
              value="0552345678"
              placeholder="Phone Number"
              styles="w-full h-12"
              {...registerPersonal("phone")}
            />
          </div>

          <TextInput
            type="text"
            name="Location"
            value="Accra, Ghana"
            placeholder="Location"
            styles="w-full h-12 "
            {...registerPersonal("location")}
          />
          {/* Error Message if something goes wrong */}
          {
            errorsPersonal && errorsPersonal.fullName && (
              <span className="text-sm text-[#f64949fe]">{errorsPersonal.fullName.message}</span>
            )}

          {/* Submit button with loader  */}
          {
            isSubmitting ? <Loading /> : <CustomButton
              type="submit"
              containerStyles={`inline-flex justify-center rounded-md bg-[#2BA4E7] px-6 py-2 hover:opacity-90 transition-all ease-linear text-base font-medium text-white outline-none w-fit`}
              title='Save'
            />
          }
        </form>
      </div>

      {/* Emergency Contact */}
  

{/* Emergency Contact */}
<div className='pt-[40px]'>
  <h4 className='text-blue'>Emergency Contact</h4>
  <form onSubmit={handleSubmitEmergency(onSubmit)} className='flex flex-col gap-3'>
  <TextInput
            type="text"
            name="fullName"
            placeholder="Full Name"
            styles="w-full h-12"
            value="Mark Anthony"
            {...registerEmergency("fullName")}
          />

          <div className='flex md:flex-row flex-col flex-start gap-3'>
            <TextInput
              type="email"
              name="email"
              placeholder="Email"
              styles="w-full h-12"
              value="markanthony45@gmail.com"
              {...registerEmergency("email")}
            />
            <TextInput
              type="phone"
              name="phone"
              value="0552345448"
              placeholder="Phone Number"
              styles="w-full h-12"
              {...registerEmergency("phone")}
            />
          </div>

        
          {/* Error Message if something goes wrong */}
          {
            errorsPersonal && errorsPersonal.fullName && (
              <span className="text-sm text-[#f64949fe]">{errorsPersonal.fullName.message}</span>
            )}

          {/* Submit button with loader  */}
          {
            isSubmitting ? <Loading /> : <CustomButton
              type="submit"
              containerStyles={`inline-flex justify-center rounded-md bg-[#2BA4E7] px-6 py-2 hover:opacity-90 transition-all ease-linear text-base font-medium text-white outline-none w-fit`}
              title='Save'
            />
          }
  </form>
</div>


    </div>
  );
}

export default Edit;
