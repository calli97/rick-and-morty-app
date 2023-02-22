import { useState } from "react";

export default function SearchBar({onSearch}) {
   let [value, setValue] = useState('')
   const addRandom=()=>{
      onSearch(Math.floor(Math.random() * 826))
      setValue('')
   }
   return (
      <div>
         <input type='search' onChange={(e)=>{setValue(e.target.value)}} value={value}/>
         <button onClick={()=>{onSearch(Number(value));setValue('')}}>Agregar</button>
         <button onClick={addRandom}>Add Random</button>
      </div>
   );
}
