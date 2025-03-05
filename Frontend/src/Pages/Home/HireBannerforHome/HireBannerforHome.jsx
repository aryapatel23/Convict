import React from 'react'
import './HireBannerforHome.css'

const HireBannerforHome = () => {
  return (
    <div className="HireBannerforHome">
    <div className="HireBannerforHome-container">
    <div className="HireBannerforHome-image">
        <img src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740126587/sqdxt5bwq2q0epg4ovlp.png" alt="Employers" />
      </div>
      <div className="HireBannerforHome-txt">
        <span className="HireBannerforHome-tag">Employers</span>
        <h2 className="HireBannerforHome-hiretxt">Want To Hire?</h2>
        <p className='HireBannerforHome-hirepara'>Find the best candidate from 5 crore+ active job seekers!</p>
        <button className="HireBannerforHome-postjob">
        Post job <span>&#x276F;</span>
        </button>
      </div>
      
    </div>
    </div>
  )
}

export default HireBannerforHome
