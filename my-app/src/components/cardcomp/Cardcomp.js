import React from 'react'
import "./cardcomp.css"
const Cardcomp = ({data}) => {
  return (
    <div className="maindiv">
      <div className="innerdiv">
        <div className="medalimg">
        <img src={data.img} className="imagecard" />
        </div>
        <div>
        <p
            dangerouslySetInnerHTML={{ __html: data.position }}
            className="inner"
          ></p>
        </div>
        <div>
        <p
            dangerouslySetInnerHTML={{ __html: data.award }}
            className="inner"
          ></p>
        </div>
      </div>
    </div>
  )
}

export default Cardcomp
