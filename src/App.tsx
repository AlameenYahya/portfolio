import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Glance from './components/Glance.tsx'
import About from './components/About.tsx'
import Experience from './components/Experience.tsx'
import Projects from './components/Projects.tsx'
import Stack from './components/Stack.tsx'
import Education from './components/Education.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Glance />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
