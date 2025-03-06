import React from 'react'
import './News.css'

const News = () => {
  return (
    <div>
      <section className='news-section'>
        <h2 className='news-heading'>In News</h2>

        <div className='news-logos'>
            <img src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1741235075/d9fluxny8xbtyogag34y.png" alt="News 18" />

            <img src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1741235074/m6qhfyabnh3zwg56avbe.png" alt="Dainik Bhaskar" />

            <img src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1741235074/igi2mwcn8wqnqt28vdhn.png" alt="The Economic Times" />

            <img src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1741235074/wkdqvavy1u19nhxvirrj.png" alt="Republic World" />

        </div>
      </section>
    </div>
  )
}

export default News
