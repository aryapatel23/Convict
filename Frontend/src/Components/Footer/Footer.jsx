import React from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Link</h4>
          <ul>
            <li><a href="#">Free job alert</a></li>
            <li><a href="#">Free internship alert</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Skill course</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">User Terms & Condition</a></li>
            <li><a href="#">Employer Terms of Service</a></li>
            <li><a href="#">Employer FAQs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-media">
          <div className="flex-bottom">
            <img src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1738649519/cinn4jbfs4fpl6uq9tqn.png" alt="" />
            <h4>Follow us on social media</h4>
          </div>
          
          <div className="social-icons">
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
