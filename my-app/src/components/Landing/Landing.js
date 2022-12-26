import React from "react";
import "./Landing.css";
import kiit_logo from "../../assets/kiit_logo.png";
import man from "../../assets/27.png";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing_nav">
        <div className="landing_nav_left">
          <div className="ellipse1"></div>
          <div className="ellipse2"></div>
          <div className="ellipse3"></div>
          <div className="logo"><img src={kiit_logo} alt="gku"></img></div>
        </div>  
        <div className="landing_nav_right">
          <div className="ellipse4"></div>
          <div className="ellipse5"></div>
          <div className="event_date">
            <p>Event Date: 14 th January 2023</p>
            <p>Venue: KSOM premises at Kautilya Hall.</p>
          </div>
        </div>
      </div>
      <div className="landing_body">
        <div className="landing_body_left">
          <div className="text1">Data Visualization Competition</div>
          <div className="text2">DataViz</div>
          <div className="text3">For those who want to foster there knowledge.</div>
          <button>click to register</button>
        </div>
        <div className="landing_body_right">
          <img src={man} alt="ud"></img>
        </div>
      </div>
    </div>

    );
  };
export default Landing;