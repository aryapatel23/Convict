import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Filter_Internship.css'

const Filter_Internship = () => {
  const navigate = useNavigate();
  return (
    <div className='pt-[50px]'>
      <div className="filters">
        <div className="filter-group">
          <button className="filter-btn" onClick={()=> navigate('/internship/1-month')}>1 - Month</button>
          <button className="filter-btn" onClick={()=> navigate('/internship/2-month')}>2 - Months</button>
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
