// call your components here
//style them in mainlayout.css
import React from 'react'
import CountComp from '../components/countComp/CountComp'
import countObjectData from '../components/countComp/CountObjects'

const Mainlayout = (data) => {
  return (
    <div>
      Mainlayout
      {
        countObjectData.map(data, i =>
          <CountComp data={data} key={i} />)
      }
    </div>
  )
}

export default Mainlayout