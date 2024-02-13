import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/header/header'
import Home from './components/home/Home'
import About from './components/about/about'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'

function App() {

  return (
    <>
   <Header/>
   <main className='main'></main>
   <Home/>
   <About/>
   <Skills/>
   <Services/>
    </>
  )
}

export default App
