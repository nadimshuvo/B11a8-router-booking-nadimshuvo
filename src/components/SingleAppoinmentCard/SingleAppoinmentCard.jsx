import React from 'react'
import divider from "../../assets/divider-line.png"

const SingleAppoinmentCard = ({lawyer: { id, name, specialty, fee}, handleCancel}) => {
  
  return (
    <div className='border border-[#141414]/15 p-8 rounded-2xl mt-16'>
      <div className='flex justify-between items-center mb-4'>
        <aside>
          <h5 className='font-bold text-[20px] text-[#141414] mb-3'>{name}</h5>
          <p className='plus-jakarta-sans-medium text-[18px] text-[#141414]/60'>{specialty}</p>
        </aside>
        <p className='plus-jakarta-sans-medium text-[18px] text-[#141414]/60'>Appointment Fee :  {fee} Taka</p>
      </div>
      <img src={divider} alt="divider" />

      <div onClick={()=> handleCancel(id)} className='cursor-pointer border border-[#FF0000] rounded-full p-3 text-center mt-7 text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition'>
        <button className='cursor-pointer plus-jakarta-sans-semibold text-[20px]'>Cancel Appointment</button>
      </div>
    </div>
  )
}

export default SingleAppoinmentCard