import React from 'react'
import Cards from '../../components/Cards/Cards.jsx'
import styles from './Home.module.css'

function Home({characters,charactersSetter}) {
    return (
        <div className={styles.page}>
            <Cards characters={characters} charactersSetter={charactersSetter}/>
        </div>
    )
}

export default Home