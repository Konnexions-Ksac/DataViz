import React from "react";
import "./Landing.css";
import kiit_logo from "../../assets/kiit_logo.png";
import man from "../../assets/27.png";
import stroke from "../../assets/Stroke.png";
import logoKonn from "../../assets/konnexions_logo.png";
import logoOp from "../../assets/Optix_logo.png";
const Landing = () => {
  return (
    <div className="landing">
      <div className="landing_nav">
        <div className="landing_nav_left">
          <div className="ellipse1"></div>
          <div className="ellipse2"></div>
          <div className="ellipse3"></div>

          <div className="ellipse4"></div>
          <div className="ellipse5"></div>
        </div>
        {/* <div className="landing_body_main">
          <div>
              <div className="logo"><img src={kiit_logo} alt="gku"></img></div>
              <div className="event_date">
                <div><p>Event Date: 14 th January 2023</p></div>
                <div><p>Venue: KSOM premises at Kautilya Hall.</p></div>
              </div>
          </div>
          <div className="landing_body">
        <div className="landing_body_left">
          <div className="text1">Data Visualization Competition</div>
          <div className="text2">DataViz</div>
          <div className="text3">For those who want to foster there knowledge.</div>
        </div>
        <div className="landing_body_right">
          <img src={man} alt="ud"></img>
        </div>
      </div>
        </div> */}
        <div className="landingdiv">
          <div className="upperdiv">
            <div>
              <img src={kiit_logo} alt="gku" className="logo" />
            </div>
            <div className="righttextdiv">
              <div>
                <p>
                  <b>Event Date :</b>{" "}
                </p>
                <p>
                  <b>Venue :</b>
                </p>
              </div>
              <div>
                <p>
                  <b>14 th January 2023</b>
                </p>
                <p>
                  <b>KSOM premises at Kautilya Hall.</b>
                </p>
              </div>
            </div>
          </div>

          <div className="lowerdiv">
            <div className="lowerleftdiv">
              <div className="text1">
                Data Visualization Competition
                {/* <div><img
          src={stroke}
          className="stroke"
          /></div> */}
              </div>
              <div className="text2">DataViz</div>
              <div className="text3">
                For those who want to foster there knowledge.
              </div>
              <p>button</p>
              <div className="lowerdivcoll">
                <div>
                  <p><i>In collaboration with:</i></p>
                </div>

                <div>
                  <img src={logoKonn} className="logo_konn" />
                </div>
                <div>
                  <img src={logoOp} className="logo_op" />
                </div>
              </div>
            </div>
            <div className="lowerrightdiv">
            <div className="ellipse6"></div>
          <div className="ellipse7"></div>
              <img src={man} alt="ud" className="rightimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
