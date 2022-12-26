// call your components here
//style them in mainlayout.css
import React from "react";
import Text from "../components/textcomp/Text";
import { Dataofpage } from "../data/data.js";
import Cardcomp from "../components/cardcomp/Cardcomp";
import { Dataofcard } from "../data/carddata.js";
import "./mainlayout.css"
const Mainlayout = () => {
  return (
    <div>
      <div className="datadiv">
        {Dataofpage.map((data, i) => (
          <Text data={data} key={i} />
        ))}
      </div>
      <div >
        <h2 className="Awards" >
          <span className="maindivheading">Awards</span>
        </h2>
          <div className="awardsdiv">
        {Dataofcard.map((data, i) => (
          <Cardcomp data={data} key={i} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
