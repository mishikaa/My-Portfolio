import { BrowserRouter } from "react-router-dom"
import {Navbar, Hero, Tech, Works, About, Contact, StarsCanvas, Experience} from "./components"
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
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <About /> 
          <Experience /> 
          <Works /> 
          <Tech /> 
        </div>
      </div>
      
      {/* Contact Section with background */}
      <div className="relative mt-20">
        <Contact /> 
        <StarsCanvas /> 
        <img 
          className="z-0 absolute bottom-0 right-[-10rem] opacity-20 hidden lg:block" 
          src={contactRight} 
          alt="bg-image" 
        />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
