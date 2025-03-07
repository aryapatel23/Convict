import React from 'react'
import './Filter_Internship.css'

const Filter_Internship = () => {
  return (
    <div className='mt-[50px]'>
      <div className="filters">
        <div className="filter-group">
          <button className="filter-btn">1 - Month</button>
          <button className="filter-btn">2 - Months</button>
        </div>
        <div className="filter-group">
        <button className="filter-btn">4 - Months</button>
          <button className="filter-btn">6 - Months</button>
        </div>
        <div className="filter-group">
          <button className="filter-btn">Paid Internships</button>
          <button className="filter-btn">International Inter.</button>
        </div>
      </div>
    </div>
  )
}

export default Filter_Internship
