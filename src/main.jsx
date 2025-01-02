import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header.jsx'
import About from "../Pages/AboutPage/Content/About.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="w-full min-h-screen bg-white overflow-hidden">
    <Header />
    <About />
    </div>
  
  </StrictMode>,
)
