import { Product } from './pages/Product.jsx'
import { LandingPage } from './pages/LandingPage.jsx'
import { Navbar } from './components/Navbar.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (

    
    <BrowserRouter>
      <Navbar />

      <Routes>
       
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/product" element={<Product />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
