import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ParticlesBackground from './Components/ParticlesBackground'
import About from './Components/About'
import Projects from './Components/Project'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div>
       <Navbar/>
       <ParticlesBackground/>
        <Home/>
        <About/>
        <Education/>
        <Projects/>
        <Contact/>
        <Footer/>
      
      </div>
    
    </>
  )
}

export default App
