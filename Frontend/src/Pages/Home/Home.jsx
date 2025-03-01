import React from 'react'
import Yourdream from './Yourdream/Yourdream'
import Trendingjob from './Trendingjob/Trendingjob'
import Review from './Review/Review'


const Home = () => {
  return (
    <div className='Homepage'>
      <Yourdream/>
      <Trendingjob/>
      <Review/>
    </div>
  )
}

export default Home
