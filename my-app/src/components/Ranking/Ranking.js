import React from "react";
import "./Ranking.css";

const Ranking = () => {
  return (
    <div className="ranking">
      <div className="rankingheading"><p>Leader Board</p>
      <p className="rankingheadinginn">Coming Soon!!</p></div>
      <div className="ranking-container">
        <div className="box-container container-2">
          <div className="title title-1">
            <h1>01</h1>
          </div>
          <div className="box">
            <div className="box-data">
              <div className="box-credential">
                <h2 className="box-name">______</h2>
                <h2>________</h2>
              </div>
            </div>
            <div className="underlay underlay-2"></div>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
          </div>
        </div>
        <div className="box-container container-1">
          <div className="title title-2">
            <h1>02</h1>
          </div>
          <div className="box">
            <div className="box-data">
              <div className="box-credential">
                <h2 className="box-name">______</h2>
                <h2>________</h2>
              </div>
            </div>
            <div className="underlay underlay-1"></div>
          </div>
        </div>

        <div className="box-container container-3">
          <div className="title title-3">
            <h1>03</h1>
          </div>
          <div className="box">
            <div className="box-data">
              <div className="box-credential">
                <h2 className="box-name">______</h2>
                <h2>________</h2>
              </div>
            </div>
            <div className="underlay underlay-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
