import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import RYMFont from '../../components/RYMFont/RYMFont';
import styles from "./Detail.module.css";

function Detail() {
  const {characterId}=useParams()
  const [data, setData] = useState({})
  useEffect(() => {
    const getData=async()=>{
      const data=await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      const json=await data.json()
      setData(json)
    }
    getData()
  }, [])
  
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.dataContainer}>
          <RYMFont text={data.name}></RYMFont>
        </div>
        <div className={styles.imageContainer}>
          <img src={data.image} alt="Character" srcset=""  className={styles.characterImage} />
        </div>
      </div>
    </div>
  )
}

export default Detail