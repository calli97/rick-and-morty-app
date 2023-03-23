import React from 'react'
import styles from './RYMFont.module.css'

function RYMFont({text,size}) {
  return (
    <div className={styles.container}>
        <div className={`${styles.title}`} style={size?{fontSize:size}:{}}>{text}</div>
        <div className={`${styles.title} ${styles.middle}` } style={size?{fontSize:size}:{}}>{text}</div>
        <div className={`${styles.title} ${styles.bottom}`} style={size?{fontSize:size}:{}}>{text}</div>
    </div>
  )
}

export default RYMFont