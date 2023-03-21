import React from 'react'
import Cards from '../../components/Cards/Cards.jsx'
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.page}>
            <Cards />
        </div>
    )
}

export default Home