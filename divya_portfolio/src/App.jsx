import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'




const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>

      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      
      
      
    
    </div>
  )
}

export default App