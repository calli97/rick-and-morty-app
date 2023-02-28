import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import portalImage from '../../images/portalGIFLoop.gif';
import spaceShipImage from '../../images/spaceShip.png'


export default function Card(props) {
   const {characters,id,name,image,species,gender}=props
   const deleteCharacter=()=>{
      props.setter(characters.filter(element=>element.id!==id))      
   }

   return (
      <div className={styles.cardContainer}>
         <div className={styles.entryPortalContainer}>
            <img src={portalImage} alt="Entry portal"  className={styles.entryPortalImage}/>
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
               <div className={styles.portalButton}>
                  <figure className={styles.portalContainer} onClick={deleteCharacter}>
                     <img src={portalImage} className={styles.portalImage} alt='portalImage' />
                     <p className={styles.portalText}>X</p>
                  </figure>
               </div>
               <div className={`${styles.shipButton}`}>
                  <Link to={`/detail/${id}`}>
                     <figure className={styles.shipContainer}>
                        <img src={spaceShipImage} className={styles.shipImage}  alt='Borrar'/>
                        <p className={styles.shipText}>More...</p>
                     </figure>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
