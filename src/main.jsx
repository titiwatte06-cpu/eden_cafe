import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import { LandingPage } from './pages/LandingPage.jsx'
import { Product } from './pages/Product.jsx'
import { About } from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,        // Layout หลัก — Navbar + Outlet + Footer
    children: [
      { index: true, element: <LandingPage /> },   // "/"
      { path: 'product', element: <Product /> },   // "/product"
      { path: 'about', element: <About /> }   // "/product"
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
