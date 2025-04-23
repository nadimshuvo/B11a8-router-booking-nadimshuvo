import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const Services = ({img, title, subtitle, ls}) => {
  const {ref, inView} = useInView({
    triggerOnce: false,
    threshold: 1
  })
  return (
    <div ref={ref} className={`bg-[#0F0F0F]/5 py-10 px-12 rounded-2xl xl:min-w-[302px] w-full ${ls ? "max-lg:col-2" : ""} hover:bg-[#09982F]/10 hover:scale-115 hover:border-[#09982F] hover:border transition hover:rotate-[-0.029rad]`}>
        <div className='text-left'>
          <img src={img} alt="Layer icon" />
          <h2 className='mt-4 mb-3 font-extrabold max-sm:text-2xl text-5xl text-[#0F0F0F]'>
            {inView ? <CountUp start={0} end={title} duration={5} delay={0}/> : 0}+
          </h2>
          <p className='font-medium max-sm:text-sm text-[20px] leading-[25px] opacity-60'>{subtitle}</p>
        </div>
      </div>
  )
}

export default Services