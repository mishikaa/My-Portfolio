import { BrowserRouter } from "react-router-dom"
import {Navbar, Hero, Tech, Works, About, Contact, StarsCanvas} from "./components"

function App() {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-coverbog-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      
      <About /> 
      <Tech /> 
      <Works /> 
      
      <div className="relative z-0">
        <Contact /> 
        <StarsCanvas /> 
      </div>
    
    </div>
    </BrowserRouter>
  )
}

export default App
