import React from 'react'
import './MainBanner.css'

const MainBanner = () => {
  return (
    <div className='mainbanner-component'>
      <div className='txtforbanner'>
        <div className='firsttxtfor-banner'>CAREERS</div>
        <hr className='border-1 border-black'/>
        <div className='secondtxtfor-banner'>CONVICT Job and Internship Program</div>
        <div className='thirdtxtfor-banner'>Accelerate your career with <br />
        CONVICT</div>
      </div>
      <div className='imgfor-banner'>
        <img src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740577873/rsp0tjvzlhkndx8yen5f.png" alt="Peole pic" />
      </div>
    </div>
  )
}

export default MainBanner
