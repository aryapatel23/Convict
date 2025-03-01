import React from 'react'
import Yourdream from './Yourdream/Yourdream'
import Trendingjob from './Trendingjob/Trendingjob'
import Review from './Review/Review'
import Homepagelogin from './Homepagelogin/Homepagelogin'


const Home = () => {
  return (
    <div className='Homepage'>
      <Yourdream/>
      <Trendingjob/>
      <Review/>
      <Homepagelogin/>
    </div>
  )
}

export default Home
