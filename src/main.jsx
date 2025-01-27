import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

//Import Pages
import Home from './pages/Home'
import Work from './pages/Work'
import Daphne from './pages/Daphne'
import Error from './pages/Lost'

//Import Components
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/work/:workId" element={<Work />} />
          <Route path="/daphne" element={<Daphne />}/>
          <Route path="/lost" element={<Error />} />
          <Route
            path="*"
            element={<Navigate to="/lost" replace />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
