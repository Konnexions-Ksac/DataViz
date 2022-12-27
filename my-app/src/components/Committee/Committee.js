import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./Committee.css";
import data from "./committeeData";

const Committee = () => {
  const [value, setValue] = useState(0);
  const handleLeft = () => {
    if (value <= 0) {
      setValue(0);
    } else {
      setValue(value - 1);
    }
  };
  const handleRight = () => {
    if (value == data.length - 1) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
  };

  return (
    <div className="committee">
      <div className="section-container">
        
        <div className="committe-container">
          <button onClick={handleLeft} className="slider-btn">
            <MdKeyboardArrowLeft />
          </button>
          <div className="slider-container">
            {data.map((item, index) => {
              const { id, name, position, img } = item;

              return (
                <div
                  key={index}
                  className={`slide ${id <= value && "slide-invisible"}`}
                >
                  <div className="slide-img">
                    <img src={img} alt="slide-img" />
                  </div>
                  <div className="slide-info">
                    <h4>{name}</h4>
                    <p>{position}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button onClick={handleRight} className="slider-btn">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Committee;
