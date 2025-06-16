import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </>

  )
}

export default App
