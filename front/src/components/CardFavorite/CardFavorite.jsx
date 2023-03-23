import React from 'react'
import styles from './CardFavorite.module.css'
import portalImage from '../../images/portalGIFLoop.gif';
import { Link } from 'react-router-dom'
import spaceShipImage from '../../images/spaceShip.png'
import { useDispatch } from 'react-redux';
import {deleteFavorite} from '../../redux/actions'

function CardFavorite(props) {
   var str = '\uD83D\uDDD1'
  const {id,name,image,species,gender}=props
  const dispatch=useDispatch()

  const handleClick=()=>{
   dispatch(deleteFavorite(id))
  }
  return (
    <div className={styles.cardContainer}>
         <div className={styles.entryPortalContainer}>
            <img src={portalImage} alt="Entry portal"  className={styles.entryPortalImage} id='portalImage'/>
         </div>
         <div  className={styles.cardStyle}>
            <div className={styles.imageContainer}>
               <img  src={image} alt={name} className={styles.characterImage}/>
               <div className={styles.title}>{name}</div>
               <div className={`${styles.title} ${styles.middle}`}>{name}</div>
               <div className={`${styles.title} ${styles.bottom}`}>{name}</div>
            </div> 
            <h6>{species}</h6>
            <h6>{gender}</h6>
            <div className={styles.buttonsContainer}>
               <div className={styles.portalButton} onClick={handleClick}>
                  <figure className={styles.portalContainer} /*onClick={deleteCharacter}*/>
                     <img src={portalImage} className={styles.portalImage} alt='portalImage' />
                     <p className={styles.portalText}>{str}</p>
                  </figure>
               </div>
               <div className={`${styles.shipButton}`}>
                  <Link to={`/detail/${id}`}>
                     <figure className={styles.shipContainer}>
                        <img src={spaceShipImage} className={styles.shipImage}  alt='Borrar'/>
                        <p className={styles.shipText}>Details</p>
                     </figure>
                  </Link>
               </div>
            </div>
         </div>
      </div>
  )
}

export default CardFavorite