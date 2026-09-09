
import { useEffect, useState } from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'
import Process from './components/Process'

function App() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
  }, [isLight])

  return (
    <div className='min-h-screen overflow-hidden'>
     <Header isLight={isLight} onThemeToggle={() => setIsLight((value) => !value)} />
     <main>
       <Hero />
       <About />
       <Project />
       <Process />
     </main>
     <Footer />
    </div>
  )
}

export default App
