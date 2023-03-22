import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {addCharacter} from '../../redux/actions'
import SearchResult from "../SearchResult/SearchResult";
import styles from './SearchBar.module.css'

export default function SearchBar() {
   let [value, setValue] = useState('')
   const [searchResults, setSearchResults] = useState([])
   const [pending, setPending] = useState(false)
   const dispatch=useDispatch()
   const handleClick=(id)=>{
      dispatch(addCharacter(id))
      setValue('')
   }
   const queryURL='https://rickandmortyapi.com/api/character/?name='
   useEffect(() => {
      const search=async()=>{
         if(value.length>3){
            setPending(true)
            const response=await fetch(`${queryURL}${value}`)
            const data=await response.json()
            setPending(false)
            if(data.error!==undefined){
               setSearchResults([])
            }else{
               setSearchResults(data.results)
            }  
         }else{
            setSearchResults([])
         }
      }
      search()
   }, [value])

   const cleanSearchBar=()=>{
      setValue('')
   }
   
   return (
      <div className={styles.container}>
         <input type='search' onChange={(e)=>{setValue(e.target.value)}} value={value} className={styles.input}/>
         {value.length>3?<SearchResult results={searchResults} pending={pending} clean={cleanSearchBar}/>:''}
         <button onClick={()=>{handleClick(Number(value))}} className={styles.button}>Agregar</button>
         <button onClick={()=>{handleClick((Math.floor(Math.random() * 826)))}} className={styles.button}>Add Random</button>
      </div>
   );
}
