import React from "react";
import "./bottomfooter.css";
import logokonn from "../../assets/konnections logo.png"
import logopp from "../../assets/Optics logo.png"
const Bottomfooter = () => {
  return (
    <div>
      <div className="upperfootermaindiv">
        <div className="footerupperdiv">
          <div className="uppfooterleft">
            <div>
              <p className="uppfooterleftp1">EXCITED???</p>
              <p className="uppfooterleftp2">YAAAAY!!!</p>
            </div>

            <div>
            <a href="https://my.forms.app/form/639ad4142db11127ce0c4f4f"  target="_blank">
              <button className="button">Click to register</button>
              </a>
            </div>
          </div>
          <div className="uppfooterright">
            <div className="uppfooterrightinn1">
              <div>
                <p>Event date:</p>
              </div>
              <div>
                <p>Last Date of Registration: </p>
              </div>
              <div>
                <p>Venue:</p>
              </div>
            </div>
            <div className="uppfooterrightinn2">
              <div>
                <p>
                  <b>14 th January 2023</b>
                </p>
              </div>
              <div>
                <p>
                  <b>05 th January 2023</b>
                </p>
              </div>
              <div>
                <p>
                  <b>KSOM premises at Kautilya Hall.</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lowerfootermaindiv">
        <div className="lowerfooterleft">
          <div><p className="dataviz">DataViz</p></div>
          <div><p><b>Approved By:</b></p>
          <p>Dr. S.K Mahapatra Director, KSOM</p>
          <p>Dr. Shyam Sundar Behura Director,KSAC</p></div>
        </div>
        <div className="lowerfooterright">
            <div><p><i>In collaboration with:</i></p></div>
            <div ><img src={logokonn} className="imglogo"/></div>
            <div><img src ={logopp}  className="imglogo"/></div>

        </div>
      </div>
      <hr></hr>
      <div className="endfooter"><p>Made with Love 💜 by KONNEXIONS </p></div>
    </div>
  );
};

export default Bottomfooter;
