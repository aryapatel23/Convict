import React from 'react'
import './Review.css'

const Review = () => {
    const comments = [
        {
            id: 1,
            name: "Shivangi Singla",
            status: "Placed",
            image: "",
            feedback: "Thanks Convict for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the Apna app."
        },
        {
            id: 2,
            name: "Jenil Ghevariya",
            status: "Placed",
            image: "path-to-image-2.jpg", // Update with the correct image path
            feedback: "This app is very helpful if you are looking for a job and the team is also very supportive and friendly. They guided me through every stage. It is very easy to find a job on Convict because there are a lot of job options here for everyone. I got a job interview call very quickly after applying."
        },
        {
            id: 3,
            name: "Khyati Patel",
            status: "Placed",
            image: "path-to-image-3.jpg", // Update with the correct image path
            feedback: "It is definitely a great app with correct and true information on the job details. I am happy to use it and I would also recommend my friends to use it for their career development."
        },
        {
            id: 4,
            name: "Rekha",
            status: "Placed",
            image: "path-to-image-4.jpg", // Update with the correct image path
            feedback: "Good and helpful app, even for freshers who don't have good qualifications. There are jobs for Caretakers, Househelp and many more. It's very easy to find jobs here. Thank you, Convict."
        }
    ]


    return (
        <div className='Review-container'>
            <div className='leftsection'>
                <div className='quote-icon'>❝</div>
                <h2>Join the community of 5 crore satsfied job seekers...</h2>
            </div>
            <div className='rightcomment-section'>
                <div className='testimonial-slider'>
                    {comments.map((comment) => (
                        <div key={comment.id} className='testimonial-card'>
                            <img
                                src={comment.image}
                                alt={comment.name}
                                className='testimonial-image' />
                            <div className="testimonial-content">
                                <h3>{comment.name}</h3>
                                <span className="status">{comment.status}</span>
                                <p>{comment.feedback}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Review
