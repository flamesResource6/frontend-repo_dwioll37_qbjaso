import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Specials from '../components/Specials'
import Story from '../components/Story'
import Social from '../components/Social'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <Carousel />
      <Specials />
      <Story />
      <Social />
      <Footer />
    </div>
  )
}
