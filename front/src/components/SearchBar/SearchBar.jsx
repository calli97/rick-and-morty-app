import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {addCharacter} from '../../redux/actions'

export default function SearchBar() {
   let [value, setValue] = useState('')
   const [searchResults, setSearchResults] = useState([])
   const dispatch=useDispatch()
   const handleClick=(id)=>{
      dispatch(addCharacter(id))
      setValue('')
   }
   const queryURL='https://rickandmortyapi.com/api/character/?name='
   useEffect(() => {
      const search=async()=>{
         if(value.length>3){
            const response=await fetch(`${queryURL}${value}`)
            const data=await response.json()
            console.log(data)
            setSearchResults([data.results])
         }else{
            setSearchResults([])
         }
      }
      search()
   }, [value])
   
   return (
      <div>
         <input type='search' onChange={(e)=>{setValue(e.target.value)}} value={value}/>
         <button onClick={()=>{handleClick(Number(value))}}>Agregar</button>
         <button onClick={()=>{handleClick((Math.floor(Math.random() * 826)))}}>Add Random</button>
      </div>
   );
}
