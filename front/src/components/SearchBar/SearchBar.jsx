import { useState } from "react";
import { useDispatch } from "react-redux";
import {addCharacter} from '../../redux/actions'

export default function SearchBar() {
   let [value, setValue] = useState('')
   const dispatch=useDispatch()
   const handleClick=(id)=>{
      dispatch(addCharacter(id))
      setValue('')
   }
   return (
      <div>
         <input type='search' onChange={(e)=>{setValue(e.target.value)}} value={value}/>
         <button onClick={()=>{handleClick(Number(value))}}>Agregar</button>
         <button onClick={()=>{handleClick((Math.floor(Math.random() * 826)))}}>Add Random</button>
      </div>
   );
}
