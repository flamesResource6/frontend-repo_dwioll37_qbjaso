import Home from './pages/Home'
import Menu from './pages/Menu'
import Catering from './pages/Catering'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/catering" element={<Catering />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
