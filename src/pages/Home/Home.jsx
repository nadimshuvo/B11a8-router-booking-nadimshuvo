import React from 'react'
import Hero from '../../components/Hero/Hero'
import OurBestLayers from '../../components/OurBestLayers/OurBestLayers'
import WeProvideBestLawServices from '../../components/WeProvideBestLawServices/WeProvideBestLawServices'
import Spacer from '../../components/Spacer/Spacer'
import SingleLawyerCardSection from '../../components/OurBestLayers/SingleLawyerCardSection'

const Home = () => {
  return (
    <>
        {/* <Hero />
        <Spacer />
        <OurBestLayers />
        <Spacer />
        <WeProvideBestLawServices />
        <Spacer /> */}

        <SingleLawyerCardSection />
        <Spacer />
    </>
  )
}

export default Home