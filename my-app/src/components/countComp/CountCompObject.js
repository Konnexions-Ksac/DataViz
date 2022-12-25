import React from 'react'
import styles from './countComp.module.css'
import arrObjects from './CountObjects'

const CountCompObject = ({ props }) => {
  return (
    <div className={styles.countCompMappedObject}>
      {
        arrObjects.map((i, k) =>
          <div className={styles.mainClass}>
            <div className={styles.mainClassLeft}>
              <img src={i.img.image} alt="" />
            </div>
            <div className={styles.mainClassRight}>
              <h1>{i.textTop}</h1>
              <p>{i.textBottom}</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CountCompObject