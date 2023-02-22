import { useEffect, useState } from 'react'
import styles from './Card.module.css'


export default function Card(props) {
   const {characters,id,name,image,species,gender}=props
   const [isMounted, setIsMounted] = useState(false)
   const [style, setStyle] = useState({})
   const deleteCharacter=()=>{
      props.setter(characters.filter(element=>element.id!==id))
   }
   //Se ejecuta solo cuando monto el objeto
   // useEffect(() => {
   //    console.log('paso')
   //    setStyle({
   //       animationName: 'ingresoDeCarta',
   //       animationDuration: '3s',
   //       animationIterationCount: '1'
   //    })
   // }, [])
   

   return (
      <div  className={styles.cardStyle} style={style}>
         <div className={styles.imageContainer}>
            <button className={styles.deleteButton} onClick={deleteCharacter}>X</button>
            <img  src={image} alt={name} className={styles.characterImage}/>
            <div className={styles.title}>{name}</div>
            <div className={`${styles.title} ${styles.middle}`}>{name}</div>
            <div className={`${styles.title} ${styles.bottom}`}>{name}</div>
         </div> 
         <h6>{species}</h6>
         <h6>{gender}</h6>        
      </div>
   );
}
