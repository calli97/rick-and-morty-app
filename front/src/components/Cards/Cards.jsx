import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Cards.module.css'


export default function Cards() {
   const characters=useSelector(state=>state.myCharacters)
   return (
   <div  className={styles.cardsContainer}>
      {characters.map((el,index)=>{
         return (
            <Card 
            name={el.name} 
            id={el.id}
            species={el.species} 
            gender={el.gender} 
            image={el.image}
            key={`${el.id}-${el.name}-card-key`}
            favorite={el.favorite}
            ></Card>
         )
      })}
   </div>
   );
}
