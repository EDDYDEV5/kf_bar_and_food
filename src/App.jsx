import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  Navbar  from './components/Navbar'
import Slider from './components/Slider'
import Menu from './components/Menu'
import Food from './pages/Food'
import Drinks from './pages/Drinks'
import Cart from './pages/Cart'
import { CartProvider } from 'react-use-cart'
import About from './components/About'
import Contact from './components/Contact'



function App() {
  

 
  

  return (
    <>
  <CartProvider>
     <Router>
      <Navbar />
      <Slider />
      <Routes>
      <Route path='/' element={<Menu />} />
        <Route path='/food' element={<Food />}></Route>
        <Route path='/drinks' element={<Drinks />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
     </Router>
     </CartProvider>

    </>
  )
}

export default App
