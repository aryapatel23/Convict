import React from 'react'
import Yourdream from './Yourdream/Yourdream'
import Trendingjob from './Trendingjob/Trendingjob'
import Review from './Review/Review'
import Homepagelogin from './Homepagelogin/Homepagelogin'
import MainBanner from './MainBanner/MainBanner'
import HireBannerforHome from './HireBannerforHome/HireBannerforHome'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <div className='Homepage'>
      <MainBanner/>
      <Yourdream/>
      <Trendingjob/>
      <Review/>
      <Homepagelogin/>
      <HireBannerforHome/>
      <Footer/>
    </div>
  )
}

export default Home
