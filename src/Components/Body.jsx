import React from 'react'
import Skill from './Skill'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import Services from './Services'
import WhyChooseMe from './WhyChooseMe'
import AdminDashboardShowcase from './AdminDashboardShowcase'
import B2BTravelPortalShowcase from './B2BTravelPortalShowcase'
import CaseStudies from './CaseStudies'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import FinalCTA from './FinalCTA'

function Body() {
  return (
    <div className='bg-3d-grid text-gray-900'>
      <Home />
      {/* <About /> */}
      <Services />
      {/* <Skill /> */}
       {/* <Projects /> */}
       {/* <Contact /> */}
      <WhyChooseMe />
      <AdminDashboardShowcase />
      <B2BTravelPortalShowcase />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  )
}

export default Body
