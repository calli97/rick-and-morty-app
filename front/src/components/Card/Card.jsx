import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import portalImage from '../../images/portalGIFLoop.gif';
import spaceShipImage from '../../images/spaceShip.png'
import { useDispatch } from 'react-redux';
import favoriteImage from '../../images/checkHeart.png'
import notFavoriteImage from '../../images/uncheckHeart.png'
import { deleteCharacter,deleteFavorite,addFavorite } from '../../redux/actions';


function Card(props) {
   const {id,name,image,species,gender,favorite}=props
   const dispatch=useDispatch()
   
   
   const handleDeleteClick=(e)=>{
      dispatch(deleteCharacter(id))
   }
   const handleFavClick=(e)=>{
      if(favorite===true){
         dispatch(deleteFavorite(id))
      }else if(favorite===false){
         dispatch(addFavorite(id))
      }
   }
   var str = '\uD83D\uDDD1'

   return (
      <div className={styles.cardContainer}>
         <div className={styles.entryPortalContainer}>
            <img src={portalImage} alt="Entry portal"  className={styles.entryPortalImage} id='portalImage'/>
         </div>
         <div  className={styles.cardStyle}>
            <div className={styles.imageContainer}>
               <img src={favorite?favoriteImage:notFavoriteImage} 
                  alt='favorite' 
                  className={`${styles.favHeart}`}
                  onClick={handleFavClick}/>
               <img  src={image} alt={name} className={styles.characterImage}/>
               <div className={styles.title}>{name}</div>
               <div className={`${styles.title} ${styles.middle}`}>{name}</div>
               <div className={`${styles.title} ${styles.bottom}`}>{name}</div>
            </div> 
            <h6>{species}</h6>
            <h6>{gender}</h6>
            <div className={styles.buttonsContainer}>
               <div className={styles.portalButton}>
                  <figure className={styles.portalContainer} onClick={handleDeleteClick}>
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
   );
}
export default Card