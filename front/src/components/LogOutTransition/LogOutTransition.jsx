import React from 'react'
import styles from './LogOutTransition.module.css'
import logOutImage from '../../images/logOutImage.png'
import RYMFont from '../RYMFont/RYMFont'

function LogOutTransition() {
  return (
    <div className={styles.container}>
        <img src={logOutImage} alt="meeseeks" className={styles.image} /> 
        <div className={styles.text}>
            <RYMFont text={'See you soon'} size='6em'></RYMFont>
        </div>
        <div className={styles.customLoader}></div>
        
    </div>
  )
}

export default LogOutTransition