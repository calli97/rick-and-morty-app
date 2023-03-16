import React from 'react'
import styles from './RYMFont.module.css'

function RYMFont({text,size}) {
  return (
    <div className={styles.container}>
        <div className={styles.title}>{text}</div>
        <div className={`${styles.title} ${styles.middle}`}>{text}</div>
        <div className={`${styles.title} ${styles.bottom}`}>{text}</div>
    </div>
  )
}

export default RYMFont