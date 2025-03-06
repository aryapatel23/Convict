import React from 'react'
import './Aboutus.css'
import OurVision from './OurVision/OurVision';
import News from './News/News';
import OurPeople from './OurPeople/OurPeople'

const Aboutus = () => {


  return (
    <div className='aboutusfull-page'>
      <img src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1741168750/refivh3iahxnvqaniyu5.png" alt="About Us Image" />

      <OurVision/>
      <News/>
      <OurPeople/>
    </div>
  )
}

export default Aboutus
