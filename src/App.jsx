import { useState } from 'react'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Products from './sections/Products'
import Testimonial from './sections/Testimonial'
import EmailSubscription from './sections/EmailSubscription'
import Footer from './layout/Footer'
import Banner from './components/Banner'
import SingleBanner from './components/SingleBanner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <SingleBanner />
      <About />
      <Banner />
      <Products />
      <Testimonial />
      <EmailSubscription />
      <Footer />
    </>
  )
}

export default App
