import React from 'react'
import styles from './countComp.module.css'
import CountCompObject from './CountCompObject'

const CountComp = () => {
  return (
    <div className={styles.countCompMainDiv}>
      <CountCompObject className={styles.countCompMappedObject} />
    </div>
  )
}

export default CountComp