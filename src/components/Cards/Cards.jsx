import Card from '../Card/Card';
import styles from './Cards.module.css'


export default function Cards(props) {
   const { characters,charactersSetter,} = props;
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
            setter={charactersSetter}
            characters={characters}
            key={`${el.id}-${el.name}-card-key`}
            ></Card>
         )
      })}
   </div>
   );
}
