import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div className=' w-full'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About/>} />
      
      </Routes>
      
      <Footer/>
      </BrowserRouter>


    </div>
  )
}

export default App