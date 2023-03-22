import React from 'react'
import SearchItem from '../SearchItem/SearchItem';
import styles from "./SearchResult.module.css";

function SearchResult({results}) {
  return (
    <div className={styles.container}>
        {results.length>0?results.map(el=><SearchItem data={el}/>):'No se encontro'}
    </div>
  )
}

export default SearchResult