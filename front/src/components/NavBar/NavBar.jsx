import React from 'react'
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

function NavBar({onSearch,logOut}) {
  return (
    <div className={styles.navBar}>
      <div className='linkContainer'>
        <NavLink to={'home'} className={styles.link}>Rick and Mory app</NavLink>
        <NavLink to={'home'} className={styles.link}>Home</NavLink>
        <NavLink to={'about'} className={styles.link}>About</NavLink>
        <NavLink to={'contact'} className={styles.link}>Contact</NavLink>
        <NavLink to={'favorites'} className={styles.link}>Favorites</NavLink>
      </div> 
      <SearchBar onSearch={onSearch}/>
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default NavBar