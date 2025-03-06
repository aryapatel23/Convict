import React from 'react'
import './Aboutus.css'
import OurVision from './OurVision/OurVision';
import News from './News/News';

const Aboutus = () => {


  return (
    <div className='aboutusfull-page'>
      <img src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1741168750/refivh3iahxnvqaniyu5.png" alt="About Us Image" />

      <OurVision/>
      <News/>
    </div>
  )
}

export default Aboutus
