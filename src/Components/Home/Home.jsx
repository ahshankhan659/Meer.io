import React from 'react'
import Main from '../Main/Main'
import About from '../About/About'
import Services from '../Services/Services'
import Project from '../Projects/Project'
import Pages from '../Pages/Pages'
import Chart from '../Chart/Chart'
import Testimonials from '../Testimonials/Testimonials'

function Home() {
  return (
    <>
    <About/>
    <Services/>
    <Project/>
    <Pages/>
    {/* <Chart/> */}
    <Testimonials/>
    </>
  )
}

export default Home