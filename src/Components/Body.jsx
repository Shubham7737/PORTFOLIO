import React from 'react'
import Skill from './Skill'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import Services from './Services'

function Body() {
  return (
    <div className='bg-zinc-950'>
      <Home />
      <About />
      <Skill />
       {/* <Projects /> */}
       {/* <Services /> */}
       <Contact />

    </div>
  )
}

export default Body
