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


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#d4ecf2] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Testimonial />
      <EmailSubscription />
      <Footer />
    </div>
  )
}

export default App
