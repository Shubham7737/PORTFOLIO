import React from 'react'
import Skill from './Skill'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import Services from './Services'

function Body() {
  return (
    <div className='bg-white text-gray-900'>
      <Home />
      {/* <About /> */}
      <Services />
      {/* <Skill /> */}
       {/* <Projects /> */}
       <Contact />
    </div>
  )
}

export default Body
