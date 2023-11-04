
import Hero from './components/Hero/Hero'
import Banner from './components/Banner'
import MobileBanner from './components/Banner/MobileBanner'
import './App.css'
import FAQ from './components/FAQ'

function App() {

  return (
    <>
    <div className='mainCon'>
    <Hero/>
      <Banner/>
      <MobileBanner/>
    </div>
    <FAQ/>
    </>
  )
}

export default App
