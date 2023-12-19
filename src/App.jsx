import { BrowserRouter } from "react-router-dom"
import {Navbar, Hero, Tech, Works, About, Contact, StarsCanvas, Experience} from "./components"
import { contactRight } from "./assets"

function App() {
  return (
    <BrowserRouter>
    <div className="relative bg-[#0F103F] z-0 overflow-x-hidden">
      <div>
        <Navbar />
        <Hero />
      </div>
      
      <About /> 
      <Tech /> 
      <Works /> 
      <Experience /> 
      
      <div className="relative">
        <Contact /> 
        <StarsCanvas /> 
        <img className="z-0 absolute bottom-0 right-[-10rem]" src={contactRight} alt="bg-image" />
      </div>
    
    </div>
    </BrowserRouter>
  )
}

export default App
