import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import RYMFont from '../../components/RYMFont/RYMFont';
import styles from "./Detail.module.css";
import spaceShip from '../../images/spaceShip.png'
import Episodes from '../../components/Episodes/Episodes';

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
      setTimeout(() => {
        setIsPending(false)
      }, 800);
      
    }
    getData()
    //.then(setIsPending(false))
  }, [characterId])
  
  return (
    <div className={styles.page}>
      {!isPending?(<div className={styles.container}>
        <div className={styles.dataContainer}>
          <RYMFont text={data.name}></RYMFont>
          <div className={styles.infoContainer}>
            <div className={styles.status}>
                <div className={`${styles.statusSignal} ${statusSignColor[data.status]}`}></div>
                <h5>{`${data.status} - ${data.species}`}</h5>
            </div>
            {data.type?<h5>Types: {data.type}</h5>:''}
            <h5 className={styles.gender}>Gender: {data?.gender}</h5>
            <h5>Origin: {data?.origin?.name}</h5>
            <h5>Last known location: {data?.location?.name}</h5>
            <h4>Episodes: </h4>
            <Episodes episodes={data?.episode}/>
          </div>  
        </div>
        <div className={styles.imageContainer}>
          <img src={data.image} alt="Character"  className={styles.characterImage} />
        </div>
      </div>):(
        <div className={styles.shipContainer}>
          <img src={spaceShip} alt="spaceShip" className={styles.shipImage}/>
        </div>
      )}
    </div>
  )
}

export default Detail