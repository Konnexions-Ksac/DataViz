// call your components here
//style them in mainlayout.css
import React from 'react'
import { countObjectData } from '../components/countComp/CountObjects'
import CountCompObject from '../components/countComp/CountCompObject'

const Mainlayout = () => {
  return (
    <div>
      <div className='countCompMainDiv'>
        {
          countObjectData.map((data, i) =>
          (
            <CountCompObject data={data} key={i} />))
        }
      </div>
    </div>
  )
}

export default Mainlayout