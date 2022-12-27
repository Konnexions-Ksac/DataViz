// call your components here
//style them in mainlayout.css
import React from "react";
import Committee from "../components/Committee/Committee";
import Ranking from "../components/Ranking/Ranking";

const Mainlayout = () => {
  return (
    <>
      <Ranking />
      <Committee />
    </>
  );
};

export default Mainlayout;
