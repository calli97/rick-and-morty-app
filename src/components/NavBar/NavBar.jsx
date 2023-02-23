import React from 'react'
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

function NavBar({onSearch}) {
  return (
    <div className={styles.navBar}>
      <div className='linkContainer'>
        <NavLink to={'/'}>Rick and Mory app</NavLink>
        <NavLink to={'about'}>About</NavLink>
        <NavLink to={'contact'}>Contact</NavLink>
      </div> 
      <SearchBar onSearch={onSearch}/>
    </div>
  )
}

export default NavBar