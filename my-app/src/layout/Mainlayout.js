// call your components here
//style them in mainlayout.css
import React from 'react'
import CountComp from '../components/countComp/CountComp'
import countObjectData from '../components/countComp/CountObjects'
import CountCompObject from '../components/countComp/CountCompObject'

const Mainlayout = () => {
  return (
    <div>
      Mainlayout
      <div className={styles.countCompMainDiv}>
        {
          countObjectData.map((data, i) =>
          (
            <CountCompObject data={data} key={i} className={styles.countCompMappedObject} />))
        }
      </div>
    </div>
  )
}

export default Mainlayout