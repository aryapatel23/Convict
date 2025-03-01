import React from 'react'
import './Homepagelogin.css'

const Homepagelogin = () => {
    return (
        <div className='Homeloginpage'>
            <div className="banner-container">
                <h2 className='Homelogintxt'>
                    Empower your career <br /> with Convict Today
                </h2>
                <button className="google-login">
                    <img
                        src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740125463/jbuegyzydwlcy9ngyd0b.png"
                        alt="Google Logo"
                    />
                    Log in with Google
                </button>
            </div>
        </div>
    )
}

export default Homepagelogin
