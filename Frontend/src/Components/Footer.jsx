import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="text-white pt-24">
      {/* Footer Top */}
      <div className="flex justify-around border-b border-white/20 pb-5 bg-[#F4F2F6]">
        <div className="text-black">
          <h4 className="text-lg font-semibold mb-4 pt-12">Link</h4>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#" className="hover:text-yellow-500">Free job alert</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-500">Free internship alert</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-500">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-500">Skill course</a></li>
          </ul>
        </div>
        <div className="text-black">
          <h4 className="text-lg font-semibold mb-4 pt-12">Legal</h4>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-500">User Terms & Condition</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-500">Employer Terms of Service</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-500">Employer FAQs</a></li>
          </ul>
        </div>
        <div className="text-black">
          <h4 className="text-lg font-semibold mb-4 pt-12">Resources</h4>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#" className="hover:text-yellow-500">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:text-yellow-500">Sitemap</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center pt-5 bg-[#1a0e26] px-5">
        <div className="ml-5">
          <div className="flex items-center">
            <img src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1738649519/cinn4jbfs4fpl6uq9tqn.png" alt="Logo" className="h-10" />
            <h4 className="ml-5 text-lg font-bold">Follow us on social media</h4>
          </div>
          <div className="flex gap-4 text-2xl mt-3 ml-5">
            <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-500 cursor-pointer" />
            <FaLinkedin className="hover:text-yellow-500 cursor-pointer" />
            <FaFacebook className="hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>
        <div className="flex space-x-5 mr-5">
          <a href="#" className="text-white hover:text-yellow-500">Privacy Policy</a>
          <a href="#" className="text-white hover:text-yellow-500">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;