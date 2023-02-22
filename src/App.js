import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar'
import VideoBackground from './components/VideoBackground/VideoBackground'
import spaceVideo from './videos/spaceVideo.mp4'

function App () {
  const [characters, setCharacters] = useState([])
  const addCharacter=async(id)=>{
    if(characters.find((el)=>el.id===id)){
      alert('Personaje ya agregado')
    }else{
      const data=await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const json=await data.json()
      setCharacters([...characters,json])
    }
  }
  return (
    <div className='App' style={{ padding: '0px' }}>
      <VideoBackground video={spaceVideo}/>
      <NavBar onSearch={addCharacter}/>
      <Cards characters={characters} charactersSetter={setCharacters}/>
    </div>
  )
}

export default App
