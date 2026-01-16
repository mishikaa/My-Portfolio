import { BrowserRouter } from "react-router-dom"
import {Navbar, Hero, Tech, Works, About, Contact, StarsCanvas, Experience, Footer, ScrollToTop} from "./components"
import { contactRight } from "./assets"

function App() {
  return (
    <BrowserRouter>
    <div className="relative bg-gradient-to-br from-[#0F103F] via-[#1a1b5e] to-[#2a2d78] z-0 overflow-x-hidden min-h-screen">
      {/* Hero Section with background */}
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      
      {/* Main Content Sections */}
      <div className="relative z-10 w-full">
        <About /> 
        <Experience /> 
        <Works /> 
        <Tech />
      </div>
      
      {/* Contact Section with background */}
      <div className="relative w-full">
        <Contact /> 
        <StarsCanvas /> 
        <img 
          className="z-0 absolute bottom-0 right-[-8rem] sm:right-[-10rem] opacity-15 lg:opacity-20 hidden md:block pointer-events-none" 
          src={contactRight} 
          alt="bg-image" 
        />
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
    </BrowserRouter>
  )
}

export default App
