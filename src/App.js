import './App.css'
import {Route,Routes, useLocation, useNavigate } from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Detail from './pages/Detail/Detail'
import Error404 from './pages/Error404/Error404'
import VideoBackground from './components/VideoBackground/VideoBackground'
import spaceVideo from './videos/spaceVideo.mp4'
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import SingIn from './pages/SignIn/SingIn';
import Favorites from './pages/Favorites/Favorites';

function App () {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const navigate=useNavigate()
  const username='hola@gmail.com'
  const password='a12345'
  const location=useLocation()

  const logOut=()=>{
    setAccess(false)
  }
  const logIn=(userData)=>{
    if(userData.username===username&&userData.password===password){
      setAccess(true)
      navigate('home')     
    }
  }

  useEffect(() => {
    if(access===false){
      navigate('/')
    }
  }, [access])
  

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
    <>
    <VideoBackground video={spaceVideo}></VideoBackground>
    {location.pathname==='/'?'':<NavBar onSearch={addCharacter} logOut={logOut}></NavBar>}
      <Routes>
        <Route path='/home' element={<Home characters={characters} charactersSetter={setCharacters}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/detail/:characterId' element={<Detail></Detail>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
        <Route path='/' element={<SingIn userVerification={logIn}/>}></Route>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>  
    </>
  )
}

export default App
