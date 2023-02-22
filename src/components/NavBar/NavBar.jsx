import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

function NavBar({onSearch}) {
  return (
    <div className={styles.navBar}>
        <h4 className={styles.pageTitle}>Rick and morty app</h4>
        <SearchBar onSearch={onSearch}/>
    </div>
  )
}

export default NavBar