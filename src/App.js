import './App.css'
import {Route,Routes,BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Detail from './pages/Detail/Detail'
import Error404 from './pages/Error404/Error404'
import VideoBackground from './components/VideoBackground/VideoBackground'
import spaceVideo from './videos/spaceVideo.mp4'
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';

function App () {
  const [characters, setCharacters] = useState([])
  const addCharacter=async(id)=>{
    if(characters.find((el)=>el.id===id)){
      alert('Personaje ya agregado')
    }else{
      const data=await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const json=await data.json()
      if(json.error){
        alert('Ingrese un id Valido')
      }else{
        setCharacters([...characters,json])
      }
    }
  }
  return (
    <BrowserRouter>
    <VideoBackground video={spaceVideo}></VideoBackground>
    <NavBar onSearch={addCharacter}></NavBar>
      <Routes>
        <Route path='/' element={<Home characters={characters} charactersSetter={setCharacters}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/detail/:characterId' element={<Detail></Detail>}></Route>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App
