import React from 'react'
import {Link} from 'react-router-dom'
import './TopInternships.css'

const TopInternships = () => {
    const internships = [
        { id: 1, company: "Swiggy", description: "Food delivery and online ordering platform.", duration: "1-Month" },
        { id: 2, company: "Zomato", description: "Online food delivery marketplace.", duration: "5-Month" },
        { id: 3, company: "Adani", description: "Indian multinational technology company.", duration: "2-Month" }
      ];
  return (
    <div>
       <div className="top-internships">
      <h2>TOP INTERNSHIPS</h2>
      <div className="internships-list">
        {internships.map((internship) => (
          <div key={internship.id} className="internship-cardforlanding">
            <h3>{internship.company}</h3>
            <p>{internship.description}</p>
            <span className="duration">{internship.duration}</span>
            <Link to={`/internship/${internship.id}`} className="view-link">View &gt;</Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default TopInternships
