import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Approach from './components/Approach'
import Process from './components/Process'
import Stats from './components/Stats'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Process />
        <Stats />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
