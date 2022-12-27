import React from 'react'
import styles from './countComp.module.css'
import arrObjects from './CountObjects'

const CountCompObject = ({ data }) => {
  return (
    <div className={styles.countCompMappedObject}>
      <div className={styles.mainClass}>
        <div className={styles.mainClassLeft}>
          <img src={data.img} />
        </div>
        <div className={styles.mainClassRight}>
          <h1>{data.textTop}</h1>
          <p>{data.textBottom}</p>
        </div>
      </div>
    </div>
  )
}

export default CountCompObject