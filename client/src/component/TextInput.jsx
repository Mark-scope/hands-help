import React from 'react'

const TextInput = React.forwardRef( ({
    type, placeholder, icon, styles, label, labelStyles, register, name, error, value
}, ref ) => {
   

  return (
    <div className='w-full flex flex-col mt-2'>
    {/* If label exists, show it; otherwise, don't */}
    {label && (
      <p className={`text-ascent-2 text-sm mb-2 ${labelStyles}`}>
        {label}
      </p>
    )}

    <div className='bg-[#FAFBFE] rounded-lg border border-[#888FB3] flex items-center pl-3 overflow-hidden'>
      {icon && icon}
      {value !== undefined ? (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          ref={ref}
          className={`${styles} bg-[#FAFBFE] outline-none text-base text-ascent-2 px-4 py-5 placeholder:text-[#616A9A]`}
          {...register}
          aria-invalid={error ? 'true' : 'false'}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          ref={ref}
          className={`${styles} bg-[#FAFBFE] outline-none text-base text-ascent-2 px-4 py-5 placeholder:text-[#616A9A]`}
          {...register}
          aria-invalid={error ? 'true' : 'false'}
        />
      )}
    </div>
    {error && (
      <span className='text-sm text-[#f64949fe] mt-0.5'>{error}</span>
    )}
  </div>
  )
  });

export default TextInput