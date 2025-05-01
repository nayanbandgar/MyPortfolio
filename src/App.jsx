import { useState } from 'react'
import './App.css'
import About from './About'
import Home from './Home'
import Skill from './Skill'
import Project from './Project'
import Contact from './contact'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Outlet />
      {/* <About />
      <Skill />
      <Project />
      <Contact /> */}
      
    </>
  )
}

export default App
