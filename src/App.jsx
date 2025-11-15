import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { About, Experience, Projects, Skills, Education, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero name="Electrical Engineer" title="Power • Electronics • Embedded Systems" location="Available for full-time and freelance" />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
