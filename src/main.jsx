import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header.jsx'
import Main_Component from './Components/Content/MainContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="w-full min-h-screen bg-white overflow-hidden">
    <Header />
    <Main_Component />
    </div>
  
  </StrictMode>,
)
