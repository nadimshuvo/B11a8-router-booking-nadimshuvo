import React from 'react'


const Services = ({img, title, subtitle, ls}) => {
  return (
    <div className={`bg-[#0F0F0F]/5 py-10 px-12 rounded-2xl xl:min-w-[302px] w-full ${ls ? "max-lg:col-2" : ""}`}>
        <div className='text-left'>
          <img src={img} alt="Layer icon" />
          <h2 className='mt-4 mb-3 font-extrabold max-sm:text-2xl text-5xl text-[#0F0F0F]'>{title}</h2>
          <p className='font-medium max-sm:text-sm text-[20px] leading-[25px] opacity-60'>{subtitle}</p>
        </div>
      </div>
  )
}

export default Services