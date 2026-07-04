import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Services from './components/Services'
import Development from './components/Development'
import Approach from './components/Approach'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Backdrop from './components/ui/Backdrop'

export default function App() {
  return (
    <>
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Development />
        <Approach />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
