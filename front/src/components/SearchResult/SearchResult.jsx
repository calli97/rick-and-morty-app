import React from 'react'
import SearchItem from '../SearchItem/SearchItem';
import styles from "./SearchResult.module.css";

function SearchResult({results,pending,clean}) {
  return (
    <div className={styles.container} onClick={clean}>
        {pending?'...Cargando':(results.length>0?results.map(el=><SearchItem data={el} key={`result-${el.id}`}/>):'No Results')}
    </div>
  )
}

export default SearchResult