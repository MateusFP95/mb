import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/home'
import RegistrationWrapper from './containers/registration/index'
import './styles/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationWrapper />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)