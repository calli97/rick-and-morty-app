import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
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
        <h2>{data.name}</h2>
      </div>
    </div>
  )
}

export default Detail