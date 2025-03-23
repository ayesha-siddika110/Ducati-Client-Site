import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Router from './Router/Router.jsx'
import { BrowserRouter } from 'react-router'
import ThemeProvider from './Provider/ThemeProvider.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
