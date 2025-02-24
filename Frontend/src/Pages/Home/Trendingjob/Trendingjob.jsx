import React from "react";
import "./Trendingjob.css";

const searchItems = [
  { id: 1, title: "Jobs For Freshers", img: "https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740058024/nk5x5g832hnzskzv18n6.png" },
  { id: 2, title: "Work From Home", img: "https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740058024/phgtodlsupcnonm7crfm.png" },
  { id: 3, title: "Part Time Job", img: "https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740058024/rl367wtarlj2jtz7ccmc.png" },
  { id: 4, title: "International Job", img: "https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740058024/kaz92awb1fwzo0xi7kfh.png" },
];

const PopularSearches = () => {
  return (
    <div className="popular-searches">
      <h2 className="title">Popular Searches on Convict</h2>
      <div className="search-grid">
        {searchItems.map((item, index) => (
          <div key={item.id} className="search-item">
            <p className="trending-text">TRENDING AT #{index + 1}</p>
            <h3 className="job-title">{item.title}</h3>
            <img src={item.img} alt={item.title} className="job-image" />
            <a href="#" className="view-all">
              View all
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
