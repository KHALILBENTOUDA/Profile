import React from 'react'
import Navbar from '../utility/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../utility/Footer'
import Why from '../components/Why'

const LandinPage = () => {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Why/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
   
  )
}

export default LandinPage
