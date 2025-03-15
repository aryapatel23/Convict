import React from 'react'
import './Internship.css'
import Filter_Internship from './Filter_Internships/Filter_Internship'
import TopInternships from './TopInternships/TopInternships'

const Internship = () => {
  return (
    <div className='internship-full-page'>
      <Filter_Internship/>
      <TopInternships/>
    </div>
  )
}

export default Internship
