import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Main_Component from './Components/Content/MainContent.jsx'
import ContactPage from './Components/ContactPage/ContactPage.jsx'
import ServicesPage from './Components/Services&Pricing/ServicesPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioPage from './Components/Portfolio/PortfolioPage.jsx'
import Resume from './Components/Resume/Resume.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main_Component />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </BrowserRouter>
</StrictMode>

)
