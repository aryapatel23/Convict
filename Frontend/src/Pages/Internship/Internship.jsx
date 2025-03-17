import React from 'react'
import './Internship.css'
import Filter_Internship from './Filter_Internships/Filter_Internship'
import TopInternships from './TopInternships/TopInternships'
import Footer from '../../Components/Footer/Footer'

const Internship = () => {
  return (
    <div className='internship-full-page'>
      <Filter_Internship/>
      <TopInternships/>
      <Footer/>
    </div>
  )
}

export default Internship
