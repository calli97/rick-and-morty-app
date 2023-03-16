import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import RYMFont from '../../components/RYMFont/RYMFont';
import styles from "./Detail.module.css";
import portalImage from '../../images/portal.png'

function Detail() {
  const {characterId}=useParams()
  const [data, setData] = useState({})
  const [isPending, setIsPending] = useState(true)
  const statusSignColor={
    unknown:styles.unknown,
    Alive:styles.alive,
    Dead:styles.dead
  }


  useEffect(() => {
    const getData=async()=>{
      const data=await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      const json=await data.json()
      setData(json)
    }
    getData()
    .then(setIsPending(false))
  }, [characterId])
  
  return (
    <div className={styles.page}>
      {!isPending?(<div className={styles.container}>
        <div className={styles.dataContainer}>
          <RYMFont text={data.name}></RYMFont>
          <div className={styles.status}>
              <div className={`${styles.statusSignal} ${statusSignColor[data.status]}`}></div>
              <h5>{data.status}</h5>
          </div>
          <h5>Species: {data.species}</h5>
          <h5>Types: {data.type}</h5>
          <h5>Gender: {data?.gender}</h5>
          <h5>Origin: {data?.origin?.name}</h5>
          <h5>Last known location: {data?.location?.name}</h5>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardFront}>
              <img src={data.image} alt="Character"   className={styles.characterImage} />
            </div>
            <div className={styles.flipCardBack}>
              <img src={portalImage} alt="CardBack" className={styles.cardImageBack}></img>
            </div>
          </div> 
        </div>
      </div>):''}
    </div>
  )
}

export default Detail