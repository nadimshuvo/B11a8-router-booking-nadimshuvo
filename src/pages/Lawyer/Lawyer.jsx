import React from 'react'
import SingleLawyerCardSection from '../../components/OurBestLayers/SingleLawyerCardSection'
import Spacer from '../../components/Spacer/Spacer'
import { useLoaderData } from 'react-router'

const Lawyer = () => {
  const lawyer = useLoaderData();  
  
  return (
    <>
        <SingleLawyerCardSection lawyer={lawyer}/>
        <Spacer />
    </>
  )
}

export default Lawyer