
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'

function App() {
  return (
    <div className='flex flex-col bg-[#0d1117] text-white min-h-screen w-full lg:px-6'>
     <Header/>
     <Hero />
     <hr className='border-t border-slate-600 md:hidden' />
     <About/>
     <Project/>
    </div>
  )
}

export default App
