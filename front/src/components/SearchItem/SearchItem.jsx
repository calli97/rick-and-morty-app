import React from 'react'
import styles from './SearchItem.module.css'
import { Link } from "react-router-dom";

const statusSignColor={
  unknown:styles.unknown,
  Alive:styles.alive,
  Dead:styles.dead
}

const detailURL='http://localhost:3000/detail/'

function SearchItem({data}) {
  return (
    <Link to={`${detailURL}${data.id}`}>
      <div className={styles.container}>
          <img src={data.image} alt={data.name} className={styles.image}/>
          <div className={styles.data}>
            <h5>{data.name}</h5>
            <p>{data.species}</p>
            <div className={styles.status}>
                <div className={`${styles.statusSignal} ${statusSignColor[data.status]}`}></div>
                <h5>{data.status}</h5>
            </div>
          </div>    
      </div>
    </Link>  
  )
}

export default SearchItem