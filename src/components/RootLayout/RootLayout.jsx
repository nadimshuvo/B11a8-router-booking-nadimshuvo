import React from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Footer/Footer'
import Spinner from '../Spinner/Spinner'
import { ToastContainer } from 'react-toastify'
import DynamicTitle from '../DynamicTitle/DynamicTitle'

const RootLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  

  return (
    <>
 
        <Header />
        <DynamicTitle />
        {isNavigating && <Spinner />}
        <Outlet />
        <ToastContainer />
        <Footer />
    </>
  )
}

export default RootLayout