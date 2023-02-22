import React from 'react'
import styles from './VideoBackground.module.css'

function VideoBackground({video}) {
  return (
    <>
        <video autoPlay loop muted className={styles.videoStyle}>
            <source src={video} type='video/mp4'/>
        </video>
    </>
    
  )
}

export default VideoBackground