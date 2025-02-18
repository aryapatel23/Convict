import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactUs.css';
import Footer from '../../Components/Footer';

const ContactUs = () => {
  return (
    <div className='fullpage'>
      <div className="bg-for-contectus">
        {/* Contact Image */}
        <div className="contectus-img">
          <img
            src="https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM="
            alt="Contact Us"
          />
        </div>

        {/* Contact Form */}
        <div className="form-for-contectus">
          <h1>Contact Us</h1>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
      {/* Contact Information Section */}
      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" size={50} />
          <h3>Phone</h3>
          <p>+91 -9727659023</p>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" size={50} />
          <h3>Email</h3>
          <p>enroll@convict.com</p>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" size={50} />
          <h3>Office</h3>
          <p>Ahmedabad, Gujarat, India</p>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;