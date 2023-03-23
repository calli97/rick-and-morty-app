import React from 'react'
import { useSelector } from 'react-redux'
import CardFavorite from '../../components/CardFavorite/CardFavorite'
import FilterBar from '../../components/FilterBar/FilterBar'
import styles from './Favorites.module.css'


function Favorites() {
    const favorites=useSelector(state=>state.ordered)

  return (
    <div className={styles.page}>
        <FilterBar/>
        <div className={styles.container}>
          {favorites.map((favCharacter)=>{
            return <CardFavorite
              id={favCharacter.id}
              name={favCharacter.name}
              image={favCharacter.image}
              species={favCharacter.species}
              gender={favCharacter.gender}
              key={`${favCharacter.id}-favCard`}
            />
          })}
        </div>
    </div>
  )
}

export default Favorites