// call your components here
//style them in mainlayout.css
import React from "react";
import Text from "../components/textcomp/Text";
import { Dataofpage } from "../data/data.js";
import Cardcomp from "../components/cardcomp/Cardcomp";
import { Dataofcard } from "../data/carddata.js";
import Committee from "../components/Committee/Committee";
import Ranking from "../components/Ranking/Ranking";
import Bottomfooter from "../components/bottomcomp/Bottomfooter";
import { countObjectData } from "../components/countComp/CountObjects";
import CountCompObject from "../components/countComp/CountCompObject";
import Landing from '../components/Landing/Landing';
import "./mainlayout.css";
const Mainlayout = () => {
  return (
  
    <div>
      
    <div><Landing/></div>
    
    <div className="rankingdiv">
      <Ranking />
      </div>
      
      <div className="datadiv">
        {Dataofpage.map((data, i) => (
          <Text data={data} key={i} />
        ))}
      </div>
      <Committee />

      <div className="countCompMainDiv">
        {countObjectData.map((data, i) => (
          <CountCompObject data={data} key={i} />
        ))}
      </div>

      <div>
        <h2 className="Awards">
          <span className="maindivheading">Awards</span>
        </h2>
        <div className="awardsdiv">
          {Dataofcard.map((data, i) => (
            <Cardcomp data={data} key={i} />
          ))}
        </div>
      </div>
      <Bottomfooter />
    </div>
  );
};

export default Mainlayout;
