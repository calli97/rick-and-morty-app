import { useEffect ,useState} from 'react'
import styles from './Card.module.css'
import {useTransition,animated} from 'react-spring'
import { Link } from 'react-router-dom'
import portalImage from '../../images/portal.png';


export default function Card(props) {
   const {characters,id,name,image,species,gender}=props
   const [isMounted, setIsMounted] = useState(false)
   const transition=useTransition(isMounted,{
      from:{position:'absolute',x:200,y:200,opacity:0},
      enter:{position:'relative',x:0,y:0,opacity:1},
      leave:{x:400,y:300,opacity:0},
      config:{duration: 1000}
   })
   const deleteCharacter=()=>{
      setIsMounted(false)
      setTimeout(() => {
         props.setter(characters.filter(element=>element.id!==id))
       }, 2000)
      
   }

   //Se ejecuta solo cuando monto el objeto
   useEffect(() => {
      console.log('seteado')
      setIsMounted(true)
   }, [])

   return (
      <>
         {transition((style,item)=>
            item?(
            <animated.div style={style} className='item'>
               <div  className={styles.cardStyle} >
                  <div className={styles.imageContainer}>
                     <button className={styles.deleteButton} onClick={deleteCharacter}>X</button>
                     <img  src={image} alt={name} className={styles.characterImage}/>
                     <div className={styles.title}>{name}</div>
                     <div className={`${styles.title} ${styles.middle}`}>{name}</div>
                     <div className={`${styles.title} ${styles.bottom}`}>{name}</div>
                  </div> 
                  <h6>{species}</h6>
                  <h6>{gender}</h6>
                  <div className={styles.linkButton}>
                     <img src={portalImage} className={styles.linkImage}/>
                     <Link to={`detail/${id}`} className={styles.linkText}>More ...</Link>
                  </div>
                  
               </div>
            </animated.div>):''
         )}
      </>
   );
}
