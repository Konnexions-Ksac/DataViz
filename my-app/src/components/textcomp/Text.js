import React from "react";
import "./text.css";
const text = ({ data }) => {
  return (
    <div className="textmaincont">
      <div className="heading">
        <h2>
          <span className="headinginn">{data.heading}</span>
        </h2>

        <div className="text">
          <p
            dangerouslySetInnerHTML={{ __html: data.para }}
            className="innertext"
          ></p>
        </div>
      </div>
      <div className="imgcont">
        <img src={data.img} className="image" />
      </div>
    </div>
  );
};

export default text;
