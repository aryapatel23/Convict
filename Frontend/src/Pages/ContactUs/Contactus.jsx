import React, { useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contactus.css";
import Footer from "../../Components/Footer.jsx"


const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://convict-copy-2.onrender.com/contactus",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log(response)

      if (response.status === 200) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fullpage">
      <div className="bg-for-contectus">
        <div className="contectus-img">
          <img
            src="https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM="
            alt="Contact Us"
          />
        </div>
        <div className="form-for-contectus">
          <h1>Contact Us</h1>

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-400 text-green-700 text-sm rounded-sm">
              <span className="font-medium">Success:</span> {success}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-400 text-red-700 text-sm rounded-sm">
              <span className="font-medium">Error:</span> {error}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

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

export default Contactus;
