import React from "react";
import { useEffect, useRef } from "react";
import "./Yourdream.css";

const Yourdream = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    let scrollAmount = 0;
    const speed = 1; // Adjust speed of scrolling
    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += speed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);
  }, []);

  return (
    <div className="Yourdream">
      <div className="makeyour-dream">
        <img
          src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740025760/nyooeenzuuegy85qf0pp.png"
          alt="" />
      </div>
      <div className="scroll-wrapper">
        <div className="scroll-container" ref={scrollContainerRef}>
          <div className="scroll-content">
            <div className="scroll-item">
              <img 
              src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740054595/mhs3hedq3sobawycavfz.png" 
              alt="" />
            </div>
            <div className="scroll-item">
              <img 
              src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740054595/p7ojdyfrpoza5yvasofs.png" 
              alt="" />
            </div>
            <div className="scroll-item">
              <img 
              src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740054595/eknpdbpcccynafqzjlkx.png" 
              alt="" />
            </div>
            <div className="scroll-item">
              <img 
              src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740375089/qo3ltni1afrg2hs2cjru.png" 
              alt="" />
            </div>
            <div className="scroll-item">
              <img 
              src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740375089/yzxecgbxk8xgfkksllvo.png" 
              alt="" />
            </div>
            <div className="scroll-item">
              <img 
              src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740375089/tli3sv79fydnaj7befr6.png" 
              alt="" />
            </div>
            {/* <div className="scroll-item">
              <img 
              src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740375089/yeuder6de2v9kilcw0t4.png" 
              alt="" />
            </div>
            <div className="scroll-item">
              <img 
              src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740375089/zkgeys3jekkxv49cj1hj.png" 
              alt="" />
            </div>
            <div className="scroll-item">
              <img 
              src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1740375090/pqa2mhrfzkrhfhvpu7gc.png" 
              alt="" />
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Yourdream;
