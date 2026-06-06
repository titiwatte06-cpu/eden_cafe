import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import './App.css'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />  {/* React Router เอา LandingPage หรือ Product มาใส่ตรงนี้ */}
      </div>
      <Footer />
    </div>
  )
}

export default App
