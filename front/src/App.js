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
import { useDispatch } from 'react-redux';
import {getCharacter,getFavorites} from './redux/actions'
import LogOutTransition from './components/LogOutTransition/LogOutTransition';

function App () {
  const [access, setAccess] = useState(false)
  const navigate=useNavigate()
  const username='hola@gmail.com'
  const password='a12345'
  const location=useLocation()
  const dispatch=useDispatch()
  const [logOutTransition, setlogOutTransition] = useState(false)

  useEffect(() => {
    dispatch(getCharacter())
    dispatch(getFavorites())
  }, [dispatch])
  

  const logOut=()=>{
    setlogOutTransition(true)
    setTimeout(() => {
      setlogOutTransition(false)
      setAccess(false)
    }, 1200);
    
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
  }, [access,navigate])
  

  return (
    <>
    <VideoBackground video={spaceVideo}></VideoBackground>
    {location.pathname==='/'?'':<NavBar logOut={logOut}></NavBar>}
    {logOutTransition?<LogOutTransition/>:''}
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
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
