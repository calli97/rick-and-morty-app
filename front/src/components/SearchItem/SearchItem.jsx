import React from 'react'
import styles from './SearchItem.module.css'
import { Link } from "react-router-dom";
import shipImage from '../../images/spaceShip.png'
import { useDispatch } from 'react-redux';
import {addCharacter} from '../../redux/actions'
const statusSignColor={
  unknown:styles.unknown,
  Alive:styles.alive,
  Dead:styles.dead
}

const detailURL='http://localhost:3000/detail/'

function SearchItem({data}) {
  const dispatch=useDispatch()
  const clickHandler=()=>{
    dispatch(addCharacter(data.id))
  }
  return (
    <div className={styles.item}>
        <div className={styles.container} onClick={clickHandler}>
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
      <Link to={`${detailURL}${data.id}`}>
        <div className={styles.redirect}>
          <img src={shipImage} alt="ship" className={styles.shipImage} />
          <p className={styles.details}><b>Details</b></p>
        </div> 
      </Link>
    </div>
     
  )
}

export default SearchItem