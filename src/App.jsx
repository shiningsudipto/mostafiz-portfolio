
import './App.css'
import Banner from './sections/Banner'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import TabSection from './sections/TabSection'

function App() {

  return (
    <>
      <div className='max-w-[1920px] mx-auto'>
        <Banner />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
