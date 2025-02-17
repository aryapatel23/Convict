import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 pt-10">
      <div className="container mx-auto flex flex-wrap justify-around border-b border-gray-300 pb-6">
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h4 className="text-lg font-semibold mb-4">Link</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">Free job alert</a></li>
            <li><a href="#" className="hover:text-yellow-500">Free internship alert</a></li>
            <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Skill course</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">User Terms & Condition</a></li>
            <li><a href="#" className="hover:text-yellow-500">Employer Terms of Service</a></li>
            <li><a href="#" className="hover:text-yellow-500">Employer FAQs</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/3">
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-500">Sitemap</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-6 px-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src='https://res.cloudinary.com/dzsvjyg2c/image/upload/v1738649519/cinn4jbfs4fpl6uq9tqn.png' alt="Logo" className="h-12" />
          <h4 className="text-lg font-bold">Follow us on social media</h4>
        </div>
        <div className="flex space-x-4 text-xl">
          <FaInstagram className="cursor-pointer hover:text-yellow-500" />
          <FaYoutube className="cursor-pointer hover:text-yellow-500" />
          <FaLinkedin className="cursor-pointer hover:text-yellow-500" />
          <FaFacebook className="cursor-pointer hover:text-yellow-500" />
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-500">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
