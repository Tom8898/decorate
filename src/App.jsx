import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import ProductRange from './components/ProductRange'
import Inspire from './components/Inspire'
import ShowroomCTA from './components/ShowroomCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <ProductRange />
        <Inspire />
        <ShowroomCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
