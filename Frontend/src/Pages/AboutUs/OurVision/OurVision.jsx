import React from 'react'
import './OurVision.css'

const OurVision = () => {

    const opportunities = [
        {
          title: "Trainings",
          description: "Learn new-age skills on the go with our short-term online trainings",
          image: "https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740053658/wqa7arfk016vmikb7a9k.png",
        },
        {
          title: "Placement Guarantee courses",
          description: "Specialize in industry-oriented programs that get you ready for a career in your dream profile",
          image: "https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740053658/u6h5ekvjrcw3lvmzlbg3.png",
        },
        {
          title: "Fresher jobs",
          description: "Get premium fresher jobs with a minimum CTC of 2LPA on your fingertips",
          image: "https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740053658/msdaqigz6lmukpo7a6yv.png",
        },
        {
          title: "Internships",
          description: "Find 10,000+ internships from great companies to give a kickstart to your career",
          image: "https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740053658/dixj02gpyjtx92ucgg1i.png",
        },
      ];

  return (
    <div>
      <section className='aboutus-vision'>
          <h2 className='aboutus-vision-heading'>Our Vision</h2>
          <p className='aboutus-vision-para'>We are a technology company on a mission to equip students with relevant skills & practical exposure to help them get the best possible start to their careers...</p>
      
        <div className='opportunities-container'>
          {opportunities.map((item,index) => (
            <div className='opportunity-card' key={index}>
              <img src={item.image} alt={item.title} className='opportunity-image'/>
              <div className='opportunity-content'>
                <h3 className='opportunity-content-heading'>{item.title}</h3>
                <p className='opportunity-content-para'>{item.description}</p>
                <a href="#" className='explore-link'>
                  Explore more →
                </a>
              </div>
            </div>
          ))}

        </div>

      </section>
    </div>
  )
}

export default OurVision
